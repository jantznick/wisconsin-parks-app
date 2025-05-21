const express = require('express');
const { PrismaClient } = require('./generated/prisma');
const { v4: uuidv4 } = require('uuid');
const { verifyAttestation, verifyAssertion } = require('node-app-attest');

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

// --- App Attest Configuration ---
const BUNDLE_IDENTIFIER = process.env.APP_ATTEST_BUNDLE_IDENTIFIER;
const TEAM_IDENTIFIER = process.env.APP_ATTEST_TEAM_IDENTIFIER;
// Allow attestations from development environment. SET TO FALSE IN PRODUCTION!
const ALLOW_DEVELOPMENT_ENVIRONMENT_ATTESTATION = process.env.NODE_ENV !== 'production';

if (!BUNDLE_IDENTIFIER || !TEAM_IDENTIFIER) {
  console.error("FATAL: APP_ATTEST_BUNDLE_IDENTIFIER and APP_ATTEST_TEAM_IDENTIFIER must be set in environment variables.");
  process.exit(1);
}

const CHALLENGE_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

app.use(express.json());

// --- App Attest Endpoints ---

// 1. Generate Challenge
app.post('/attest/challenge', async (req, res) => {
  const challenge = uuidv4();
  try {
    await prisma.appAttestChallenge.create({
      data: { challenge: challenge },
    });
    console.log(`Challenge generated and stored: ${challenge}`);
    // No need to call cleanupExpiredChallenges here, do it periodically or on verify
    res.json({ challenge });
  } catch (error) {
    console.error('Error storing challenge:', error);
    res.status(500).json({ error: 'Failed to generate challenge' });
  }
});

// 2. Verify Attestation
app.post('/attest/verify', async (req, res) => {
  const { keyId, attestation: attestationB64, challenge } = req.body;

  if (!keyId || !attestationB64 || !challenge) {
    return res.status(400).json({ error: 'Missing keyId, attestation, or challenge' });
  }

  try {
    const storedChallenge = await prisma.appAttestChallenge.findUnique({
      where: { challenge: challenge },
    });

    if (!storedChallenge || (Date.now() - storedChallenge.createdAt.getTime() > CHALLENGE_EXPIRY_MS)) {
      console.warn(`Invalid or expired challenge received: ${challenge}`);
      if (storedChallenge) {
        await prisma.appAttestChallenge.delete({ where: { challenge: challenge } });
      }
      return res.status(401).json({ error: 'Invalid or expired challenge' });
    }

    const attestationBuffer = Buffer.from(attestationB64, 'base64');
    const verificationResult = verifyAttestation({
      attestation: attestationBuffer,
      challenge: challenge, // The library expects the original challenge string
      keyId: keyId,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      teamIdentifier: TEAM_IDENTIFIER,
      allowDevelopmentEnvironment: ALLOW_DEVELOPMENT_ENVIRONMENT_ATTESTATION,
    });

    await prisma.appAttestation.upsert({
      where: { keyId: keyId },
      update: {
        publicKey: verificationResult.publicKey,
        signCount: BigInt(0), // Reset signCount on new attestation if keyId existed
        updatedAt: new Date(),
      },
      create: {
        keyId: keyId,
        publicKey: verificationResult.publicKey,
        signCount: BigInt(0), // Initial sign count is 0
      },
    });

    console.log(`Attestation successful for keyId: ${keyId}`);
    await prisma.appAttestChallenge.delete({ where: { challenge: challenge } }); // Challenge consumed
    res.sendStatus(204); // Success, no content
  } catch (error) {
    console.error('Attestation verification failed:', error.message, error.stack);
    res.status(401).json({ error: 'Attestation verification failed', details: error.message });
  }
});

async function cleanupExpiredChallenges() {
    const expiryDate = new Date(Date.now() - CHALLENGE_EXPIRY_MS);
    try {
        const deleted = await prisma.appAttestChallenge.deleteMany({
            where: { createdAt: { lt: expiryDate } },
        });
        if (deleted.count > 0) {
            console.log(`Cleaned up ${deleted.count} expired challenges.`);
        }
    } catch (error) {
        console.error("Error cleaning up expired challenges:", error);
    }
}

// --- App Attest Middleware for Protected Routes ---
async function appAttestMiddleware(req, res, next) {
  const assertionHeader = req.headers['x-app-attest-assertion'];

  if (!assertionHeader) {
    return res.status(401).json({ error: 'Missing App Attest assertion header' });
  }

  try {
    const { keyId, assertion: assertionB64, challenge, requestPayloadSHA256 } = JSON.parse(Buffer.from(assertionHeader, 'base64').toString());
    
    if (!keyId || !assertionB64 || !challenge || !requestPayloadSHA256) {
        return res.status(400).json({ error: 'Invalid assertion header format. Missing keyId, assertion, challenge, or requestPayloadSHA256.' });
    }

    const attestationData = await prisma.appAttestation.findUnique({
      where: { keyId: keyId },
    });

    if (!attestationData) {
      console.warn(`No attestation data found for keyId: ${keyId}`);
      return res.status(401).json({ error: 'No attestation found for this app instance. Please re-attest.' });
    }

    const crypto = require('crypto');
    const requestBodyString = JSON.stringify(req.body);
    const serverCalculatedPayloadSHA256 = crypto.createHash('sha256').update(requestBodyString).digest('base64');

    if (requestPayloadSHA256 !== serverCalculatedPayloadSHA256) {
      console.warn(`Payload hash mismatch. Client: ${requestPayloadSHA256}, Server: ${serverCalculatedPayloadSHA256}`);
      console.warn(`Client request body for hashing (as interpreted by server): ${requestBodyString}`);
      return res.status(401).json({ error: 'Payload integrity check failed (hash mismatch).' });
    }

    const assertionBuffer = Buffer.from(assertionB64, 'base64');
    const payloadToVerify = Buffer.from(requestPayloadSHA256, 'base64');

    const verificationResult = verifyAssertion({
      assertion: assertionBuffer,
      payload: payloadToVerify,
      publicKey: attestationData.publicKey,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      teamIdentifier: TEAM_IDENTIFIER,
      signCount: Number(attestationData.signCount), // Convert BigInt from DB to Number for the library
    });

    await prisma.appAttestation.update({
      where: { keyId: keyId },
      data: { signCount: BigInt(verificationResult.signCount) }, // Convert Number from library to BigInt for DB
    });

    console.log(`Assertion successful for keyId: ${keyId}, new signCount: ${verificationResult.signCount}`);
    next();
  } catch (error) {
    console.error('Assertion verification failed:', error.message, error.stack);
    if (error.message && error.message.includes('Invalid signCount')) {
        return res.status(401).json({ error: 'Assertion verification failed: Invalid sign count (possible replay attack).' });
    }
    return res.status(401).json({ error: 'Assertion verification failed', details: error.message });
  }
}

// --- Original Park Endpoint (now protected and POST) ---
app.post('/parks', appAttestMiddleware, async (req, res) => { 
  const { minLat, minLng, maxLat, maxLng } = req.body; 

  // Validate query parameters
  if (minLat == null || minLng == null || maxLat == null || maxLng == null) {
    return res.status(400).json({ error: 'Missing required body parameters: minLat, minLng, maxLat, maxLng' });
  }

  // Convert to numbers
  const minLatNum = parseFloat(minLat);
  const minLngNum = parseFloat(minLng);
  const maxLatNum = parseFloat(maxLat);
  const maxLngNum = parseFloat(maxLng);

  if (isNaN(minLatNum) || isNaN(minLngNum) || isNaN(maxLatNum) || isNaN(maxLngNum)) {
    return res.status(400).json({ error: 'Invalid latitude/longitude values' });
  }

  try {
    // Querying based on the Coordinate model
    const parksWithCoordinates = await prisma.coordinate.findMany({
      where: {
        latitude: {
          gte: minLatNum,
          lte: maxLatNum,
        },
        longitude: {
          gte: minLngNum,
          lte: maxLngNum,
        },
        // Ensure latitude and longitude are not null
        NOT: [
          { latitude: null },
          { longitude: null },
        ]
      },
      include: {
        park: true, // Include the parent Park data
      },
    });

    // Extracting the park data from the result
    const parks = parksWithCoordinates.map(coord => coord.park).filter(park => park != null);

    res.json({
      data: parks,
      surroundingBox: { minLat, minLng, maxLat, maxLng }
    });
  } catch (error) {
    console.error('Error fetching parks:', error.message, error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  console.log("App Attest Config:");
  console.log(`  - Bundle Identifier: ${BUNDLE_IDENTIFIER}`);
  console.log(`  - Team Identifier: ${TEAM_IDENTIFIER}`);
  console.log(`  - Allow Dev Environment Attestation: ${ALLOW_DEVELOPMENT_ENVIRONMENT_ATTESTATION}`);
  if (process.env.NODE_ENV !== 'production') {
    console.warn("WARNING: Server is running in an environment that might allow development attestations.");
    console.warn("Ensure APP_ATTEST_ALLOW_DEVELOPMENT_ENVIRONMENT is false and NODE_ENV is 'production' in your production environment.");
  }
});

// Cleanup function for expired challenges (simple interval)
setInterval(cleanupExpiredChallenges, 60 * 1000); // Run every minute 