import { Park } from './Park.interface';

export interface SharedParkHeaderProps {
  park: Park | undefined;
  leftIconName: 'arrow-back' | 'close';
  onLeftIconPress: () => void;
  onSharePress: () => void;
  onFavoritePress?: (parkId: string) => void;
  isFavorite?: boolean;
  showTitle?: boolean;
  safeAreaTopInset?: number;
  containerClassName?: string;
} 