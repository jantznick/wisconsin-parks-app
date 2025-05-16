interface Coordinate {
  latitude: number | null;
  longitude: number | null;
}

interface Hours {
  open: string;
  close: string;
  text_description: string;
}

interface Contact {
  phone: string;
  email: string;
  website: string;
}

interface EntranceFee {
  daily: number | null;
  annual: number | null;
  text_description: string;
}

interface Parking {
  totalSpaces: number | null;
  isFree: boolean | null;
}

interface SeasonalInfo {
  bestTimeToVisit: string;
  seasonalClosures: string[];
}

export interface Park {
  id: string;
  name: string;
  coordinate: Coordinate;
  description: string;
  activities: number[];
  hours: Hours;
  contact: Contact;
  facilities: any[];
  entranceFee: EntranceFee;
  parking: Parking;
  rules: string[];
  seasonalInfo: SeasonalInfo;
  isDogFriendly: boolean;
  isAccessible: boolean;
  image_from_listing: string;
  downloaded_image_path: string;
  info_url: string;
  recreation_url: string;
  resourceLocationId?: string;
  mapId?: string;
}