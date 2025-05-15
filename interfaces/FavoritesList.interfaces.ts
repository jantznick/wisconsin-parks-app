import { Park } from './Park.interface';

export interface FavoriteCardProps {
  park: Park;
  index: number;
  onPress: () => void;
  onShare: (park: Park) => void;
}

export interface FavoritesListProps {
  scrollEnabled?: boolean;
} 