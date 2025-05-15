import { Park } from './Park.interface';

export interface SharedParkHeaderProps {
  park: Park | undefined; // Allow undefined for safety, though typically park should exist
  leftIconName: 'arrow-back' | 'close';
  onLeftIconPress: () => void;
  onSharePress: () => void;
  safeAreaTopInset?: number; // For status bar padding
  containerClassName?: string; // Allow passing extra classes to the main container
} 