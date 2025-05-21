const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const fetch = require('node-fetch'); // node-fetch v2 for CJS

const PARKS_DATA_URL = 'https://wisconsin-state-parks-finder.s3.us-east-1.amazonaws.com/parks.json';

async function main() {
  console.log(`Start seeding ...`);

  const response = await fetch(PARKS_DATA_URL);
  if (!response.ok) {
    console.error(`Failed to fetch park data: ${response.statusText}`);
    return;
  }
  const parksData = await response.json();

  for (const park of parksData) {
    try {
      const createdPark = await prisma.park.create({
        data: {
          name: park.name,
          description: park.description,
          activities: park.activities,
          facilities: park.facilities,
          rules: park.rules,
          isDogFriendly: park.isDogFriendly,
          isAccessible: park.isAccessible,
          image_from_listing: park.image_from_listing,
          downloaded_image_path: park.downloaded_image_path,
          info_url: park.info_url,
          recreation_url: park.recreation_url,
          coordinate: park.coordinate ? {
            create: {
              latitude: park.coordinate.latitude,
              longitude: park.coordinate.longitude,
            },
          } : undefined,
          hours: park.hours ? {
            create: {
              open: park.hours.open,
              close: park.hours.close,
              text_description: park.hours.text_description,
            },
          } : undefined,
          contact: park.contact ? {
            create: {
              phone: park.contact.phone,
              email: park.contact.email,
              website: park.contact.website,
            },
          } : undefined,
          entranceFee: park.entranceFee ? {
            create: {
              daily: park.entranceFee.daily,
              annual: park.entranceFee.annual,
              text_description: park.entranceFee.text_description,
            },
          } : undefined,
          parking: park.parking ? {
            create: {
              totalSpaces: park.parking.totalSpaces,
              isFree: park.parking.isFree,
            },
          } : undefined,
          seasonalInfo: park.seasonalInfo ? {
            create: {
              bestTimeToVisit: park.seasonalInfo.bestTimeToVisit,
              seasonalClosures: park.seasonalInfo.seasonalClosures,
            },
          } : undefined,
        },
      });
      console.log(`Created park with id: ${createdPark.id}`);
    } catch (e) {
      console.error(`Error creating park ${park.name} (ID: ${park.id}):`, e);
    }
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 