-- CreateTable
CREATE TABLE "AppAttestChallenge" (
    "challenge" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppAttestChallenge_pkey" PRIMARY KEY ("challenge")
);

-- CreateTable
CREATE TABLE "AppAttestation" (
    "keyId" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "signCount" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppAttestation_pkey" PRIMARY KEY ("keyId")
);
