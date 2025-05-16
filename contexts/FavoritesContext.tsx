import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { FavoriteItem, FavoritesContextType } from '../interfaces/FavoritesContext.interfaces';
// import { useParks } from './ParksContext'; // Reconciliation logic removed, so useParks might not be needed here directly.

const FAVORITES_STORAGE_KEY = 'userFavorites';

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);
  // const { parks, loading: parksLoading } = useParks(); // Not needed for direct reconciliation now

  useEffect(() => {
    const loadFavorites = async () => {
      setIsLoadingFavorites(true);
      try {
        const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
        if (storedFavorites !== null) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (e) {
        console.error('Failed to load favorites.', e);
        setFavorites([]); // Initialize with empty array on error
      }
      setIsLoadingFavorites(false);
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      // Only save if not loading, to prevent saving an empty list during initial load if AsyncStorage is slow
      if (!isLoadingFavorites) { 
        try {
          await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
        } catch (e) {
          console.error('Failed to save favorites.', e);
        }
      }
    };
    saveFavorites();
  }, [favorites, isLoadingFavorites]);

  // Reconciliation logic has been removed as per new requirements.
  // The display of changed/unavailable favorites will be handled in the UI components.

  const addFavorite = async (parkId: string, parkName: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.parkId === parkId)) return prevFavorites;
      return [...prevFavorites, { parkId, parkName }];
    });
  };

  const removeFavorite = async (parkId: string) => {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.parkId !== parkId));
  };

  const isFavorite = (parkId: string): boolean => {
    return favorites.some(fav => fav.parkId === parkId);
  };

  return (
    <FavoritesContext.Provider 
      value={{ favorites, addFavorite, removeFavorite, isFavorite, isLoadingFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}; 