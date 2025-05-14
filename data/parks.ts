export interface Park {
  id: string;
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  description: string;
  activities: string[];
  hours: {
    open: string;
    close: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  facilities: string[];
  entranceFee: {
    daily: number;
    annual: number;
  };
  parking: {
    totalSpaces: number;
    isFree: boolean;
  };
  rules: string[];
  seasonalInfo: {
    bestTimeToVisit: string;
    seasonalClosures: string[];
  };
  isDogFriendly: boolean;
  isAccessible: boolean;
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
    hours: {
      open: '6:00 AM',
      close: '11:00 PM',
    },
    contact: {
      phone: '(608) 356-8301',
      email: 'devilslake@wisconsin.gov',
      website: 'https://dnr.wisconsin.gov/topic/parks/devilslake',
    },
    facilities: ['Restrooms', 'Picnic Areas', 'Campground', 'Boat Launch', 'Concessions', 'Visitor Center'],
    entranceFee: {
      daily: 13,
      annual: 28,
    },
    parking: {
      totalSpaces: 500,
      isFree: false,
    },
    rules: [
      'Pets must be on leash',
      'No glass containers on beach',
      'Fishing license required',
      'No motorized boats',
    ],
    seasonalInfo: {
      bestTimeToVisit: 'May through October',
      seasonalClosures: ['Some facilities closed in winter'],
    },
    isDogFriendly: true,
    isAccessible: true,
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
    hours: {
      open: '6:00 AM',
      close: '11:00 PM',
    },
    contact: {
      phone: '(920) 868-3258',
      email: 'peninsula@wisconsin.gov',
      website: 'https://dnr.wisconsin.gov/topic/parks/peninsula',
    },
    facilities: ['Restrooms', 'Picnic Areas', 'Campground', 'Golf Course', 'Boat Launch', 'Nature Center'],
    entranceFee: {
      daily: 13,
      annual: 28,
    },
    parking: {
      totalSpaces: 300,
      isFree: false,
    },
    rules: [
      'Pets must be on leash',
      'No glass containers on beach',
      'Fishing license required',
      'Golf course rules apply',
    ],
    seasonalInfo: {
      bestTimeToVisit: 'June through September',
      seasonalClosures: ['Golf course closed in winter'],
    },
    isDogFriendly: true,
    isAccessible: false,
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
    hours: {
      open: '6:00 AM',
      close: '11:00 PM',
    },
    contact: {
      phone: '(715) 274-5123',
      email: 'copperfalls@wisconsin.gov',
      website: 'https://dnr.wisconsin.gov/topic/parks/copperfalls',
    },
    facilities: ['Restrooms', 'Picnic Areas', 'Campground', 'Nature Center', 'Observation Decks'],
    entranceFee: {
      daily: 13,
      annual: 28,
    },
    parking: {
      totalSpaces: 200,
      isFree: false,
    },
    rules: [
      'Pets must be on leash',
      'Stay on marked trails',
      'No swimming in falls area',
      'Fishing license required',
    ],
    seasonalInfo: {
      bestTimeToVisit: 'May through October',
      seasonalClosures: ['Some trails closed in winter'],
    },
    isDogFriendly: false,
    isAccessible: true,
  },
]; 