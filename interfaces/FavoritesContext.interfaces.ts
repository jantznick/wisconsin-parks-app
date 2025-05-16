export interface FavoriteItem {
  parkId: string;
  parkName: string; // Name at the time of favoriting
}

export interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (parkId: string, parkName: string) => Promise<void>;
  removeFavorite: (parkId: string) => Promise<void>;
  isFavorite: (parkId: string) => boolean;
  isLoadingFavorites: boolean;
} 