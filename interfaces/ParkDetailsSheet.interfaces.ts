import { Park } from './Park.interface';

export interface ParkDetailsSheetProps {
  park: Park;
  onClose: () => void;
} 