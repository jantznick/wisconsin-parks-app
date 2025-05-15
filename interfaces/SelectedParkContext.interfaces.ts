import { Park } from './Park.interface';

export interface SelectedParkContextType {
  selectedPark: Park | null;
  setSelectedPark: (park: Park | null) => void;
} 