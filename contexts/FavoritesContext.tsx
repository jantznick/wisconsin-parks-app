import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (parkId: string) => Promise<void>;
  isFavorite: (parkId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from storage on mount
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      } else {
        console.log('No stored favorites found');
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const toggleFavorite = async (parkId: string) => {
    try {
      
      const newFavorites = favorites.includes(parkId)
        ? favorites.filter(id => id !== parkId)
        : [...favorites, parkId];
            
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      
      setFavorites(newFavorites);
      console.log('State updated with new favorites');
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const isFavorite = (parkId: string) => {
    const result = favorites.includes(parkId);
    return result;
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
} 