import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParks } from './ParksContext';

export interface FavoritePark {
  id: string;
  name: string;
}

export interface FavoritesContextType {
  favorites: FavoritePark[];
  toggleFavorite: (parkId: string, parkName: string) => Promise<void>;
  isFavorite: (parkId: string) => boolean;
  favoriteMessages: string[];
  clearFavoriteMessages: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const FAVORITES_STORAGE_KEY = 'favorites';

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoritePark[]>([]);
  const [favoriteMessages, setFavoriteMessages] = useState<string[]>([]);
  const { parks, loading: parksLoading } = useParks();

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    if (parksLoading || favorites.length === 0 || !parks || parks.length === 0) {
      return;
    }

    const currentParksMap = new Map(parks.map(p => [p.id, p.name]));
    const discrepancyMessagesThisRun: string[] = [];
    let updatedFavoritesList = [...favorites];
    let favoritesWereModified = false;

    favorites.forEach((fav, index) => {
      const currentParkNameInParksList = currentParksMap.get(fav.id);

      if (currentParkNameInParksList === undefined) {
        discrepancyMessagesThisRun.push(`Your favorite park: "${fav.name}" (ID: ${fav.id}) was removed from our database.`);
      } else if (currentParkNameInParksList !== fav.name) {
        discrepancyMessagesThisRun.push(`The name of your favorite park "${fav.name}" (ID: ${fav.id}) has changed to "${currentParkNameInParksList}". We've updated it for you.`);
        updatedFavoritesList[index] = { ...fav, name: currentParkNameInParksList };
        favoritesWereModified = true;
      }
    });

    if (discrepancyMessagesThisRun.length > 0) {
      setFavoriteMessages(currentGlobalMessages => {
        const messagesToAdd = discrepancyMessagesThisRun.filter(
          newMsg => !currentGlobalMessages.includes(newMsg)
        );
        if (messagesToAdd.length > 0) {
          return [...currentGlobalMessages, ...messagesToAdd];
        }
        return currentGlobalMessages;
      });
    }

    if (favoritesWereModified) {
      setFavorites(updatedFavoritesList);
      AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavoritesList));
    }

  }, [parks, favorites, parksLoading]);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavorites) {
        const parsedFavorites: FavoritePark[] = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites) && parsedFavorites.every(fav => fav && typeof fav.id === 'string' && typeof fav.name === 'string')) {
          setFavorites(parsedFavorites);
        } else {
          console.log('Stored favorites format is incorrect. Resetting favorites.');
          setFavorites([]);
          await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([]));
        }
      } else {
        console.log('No stored favorites found');
        setFavorites([]);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
      setFavorites([]);
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([]));
    }
  };

  const toggleFavorite = async (parkId: string, parkName: string) => {
    try {
      const isCurrentlyFavorite = favorites.some(fav => fav.id === parkId);
      let newFavorites: FavoritePark[];

      if (isCurrentlyFavorite) {
        newFavorites = favorites.filter(fav => fav.id !== parkId);
      } else {
        newFavorites = [...favorites, { id: parkId, name: parkName }];
      }
      
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      console.log('Favorites updated:', newFavorites);
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const isFavorite = (parkId: string) => {
    return favorites.some(fav => fav.id === parkId);
  };

  const clearFavoriteMessages = () => {
    setFavoriteMessages([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, favoriteMessages, clearFavoriteMessages }}>
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