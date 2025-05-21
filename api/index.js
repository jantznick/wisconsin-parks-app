const express = require('express');
const { PrismaClient } = require('./generated/prisma');

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint to get parks within a latitude/longitude range
app.get('/parks', async (req, res) => {
  const { minLat, minLng, maxLat, maxLng } = req.query;

  // Validate query parameters
  if (!minLat || !minLng || !maxLat || !maxLng) {
    return res.status(400).json({ error: 'Missing required query parameters: minLat, minLng, maxLat, maxLng' });
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
    const parks = await prisma.park.findMany({
      where: {
        latitude: {
          gte: minLatNum,
          lte: maxLatNum,
        },
        longitude: {
          gte: minLngNum,
          lte: maxLngNum,
        },
      },
    });
    res.json(parks);

    res.json({
		data: parks,
		surroundingBox: { minLat, minLng, maxLat, maxLng }
	});
  } catch (error) {
    console.error('Error fetching parks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 