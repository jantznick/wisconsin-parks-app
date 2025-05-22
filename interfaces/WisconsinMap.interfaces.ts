import { Region } from 'react-native-maps';
import { Park } from './Park.interface';

export interface WisconsinMapProps {
  parks?: Park[];
  onRegionChangeComplete?: (region: Region) => void;
} 