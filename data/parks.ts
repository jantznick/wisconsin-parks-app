export interface Park {
  id: string;
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  description: string;
  activities: string[];
}

export const PARKS: Park[] = [
  {
    id: '1',
    name: 'Devil\'s Lake State Park',
    coordinate: {
      latitude: 43.4172,
      longitude: -89.7296,
    },
    description: 'Wisconsin\'s most visited state park, featuring a 360-acre lake surrounded by 500-foot quartzite bluffs.',
    activities: ['Hiking', 'Swimming', 'Rock Climbing', 'Camping'],
  },
  {
    id: '2',
    name: 'Peninsula State Park',
    coordinate: {
      latitude: 45.1667,
      longitude: -87.1667,
    },
    description: 'A 3,776-acre park on the Door County peninsula with 8 miles of Green Bay shoreline.',
    activities: ['Biking', 'Camping', 'Fishing', 'Golf'],
  },
  {
    id: '3',
    name: 'Copper Falls State Park',
    coordinate: {
      latitude: 46.3667,
      longitude: -90.6333,
    },
    description: 'Features the spectacular Copper Falls and Brownstone Falls on the Bad River.',
    activities: ['Hiking', 'Swimming', 'Picnicking', 'Camping'],
  },
]; 