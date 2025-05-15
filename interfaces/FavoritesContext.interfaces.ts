export interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (parkId: string) => Promise<void>;
  isFavorite: (parkId: string) => boolean;
} 