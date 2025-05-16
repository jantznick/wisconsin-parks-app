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
  dismissFavoriteMessage: (message: string) => void;
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
        discrepancyMessagesThisRun.push(`Your favorite park: "${fav.name}" (ID: ${fav.id}) was removed from our database. If this was unexpected, please let us know!`);
      } else if (currentParkNameInParksList !== fav.name) {
        discrepancyMessagesThisRun.push(`The name of your favorite park "${fav.name}" (ID: ${fav.id}) has changed to "${currentParkNameInParksList}". We've updated it for you. If you notice any other discrepancies, please let us know!`);
        updatedFavoritesList[index] = { ...fav, name: currentParkNameInParksList };
        favoritesWereModified = true;
      }
    });

    if (favoritesWereModified) {
      setFavorites(updatedFavoritesList);
      AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavoritesList));
    }

    setFavoriteMessages(currentGlobalMessages => {
      let nextGlobalMessages = [...currentGlobalMessages];
      const reAddedMessagesThisRun: string[] = [];
      const parksActuallyReAdded = new Set<string>();

      const validAndFavoritedParkIds = new Set(
        updatedFavoritesList.filter(fav => currentParksMap.has(fav.id)).map(fav => fav.id)
      );

      nextGlobalMessages = nextGlobalMessages.filter(msg => {
        const match = msg.match(/Your favorite park: "(.*?)" \(ID: ([^)]+)\) was removed from our database\.?/);
        if (match && match[1] && match[2]) {
          const parkIdInMessage = match[2];
          if (validAndFavoritedParkIds.has(parkIdInMessage)) {
            parksActuallyReAdded.add(parkIdInMessage);
            return false;
          }
        }
        return true;
      });

      parksActuallyReAdded.forEach(parkId => {
        const parkName = currentParksMap.get(parkId) || "Unknown Park";
        reAddedMessagesThisRun.push(`Your favorite park: "${parkName}" (ID: ${parkId}) has been re-added to our database!`);
      });

      const allNewMessagesThisCycle = [...reAddedMessagesThisRun, ...discrepancyMessagesThisRun];

      if (allNewMessagesThisCycle.length > 0) {
        const messagesToAdd = allNewMessagesThisCycle.filter(
          newMsg => !nextGlobalMessages.includes(newMsg)
        );
        if (messagesToAdd.length > 0) {
          nextGlobalMessages = [...nextGlobalMessages, ...messagesToAdd];
        }
      }

      if (nextGlobalMessages.length !== currentGlobalMessages.length || 
          !nextGlobalMessages.every((msg, idx) => msg === currentGlobalMessages[idx])) {
        return nextGlobalMessages;
      }
      return currentGlobalMessages;
    });

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

  // Function to dismiss a single message by its content
  const dismissFavoriteMessage = (messageToDismiss: string) => {
    setFavoriteMessages(currentMessages => 
      currentMessages.filter(msg => msg !== messageToDismiss)
    );
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      toggleFavorite, 
      isFavorite, 
      favoriteMessages, 
      clearFavoriteMessages, 
      dismissFavoriteMessage
    }}>
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