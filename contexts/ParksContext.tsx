import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from '../constants/config';
import { Park } from '../interfaces/Park.interface';

const PARKS_DATA_URL = 'https://wisconsin-state-parks-finder.s3.us-east-1.amazonaws.com/parks.json';

const ASYNC_STORAGE_PARKS_KEY = 'parksData';
const ASYNC_STORAGE_LAST_FETCH_KEY = 'lastFetchTime';

interface ParksContextType {
  parks: Park[];
  loading: boolean;
  error: Error | null;
  fetchParks: () => Promise<void>;
  lastFetch: number | null;
}

const ParksContext = createContext<ParksContextType | undefined>(undefined);

export const ParksProvider = ({ children }: { children: ReactNode }) => {
  const [parks, setParks] = useState<Park[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastFetch, setLastFetch] = useState<number | null>(null);

  const fetchParksData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(PARKS_DATA_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setParks(data);
      const now = Date.now();
      setLastFetch(now);
      // Store in AsyncStorage
      await AsyncStorage.setItem(ASYNC_STORAGE_PARKS_KEY, JSON.stringify(data));
      await AsyncStorage.setItem(ASYNC_STORAGE_LAST_FETCH_KEY, now.toString());
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('An unknown error occurred'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadParks = async () => {
      try {
        const storedLastFetch = await AsyncStorage.getItem(ASYNC_STORAGE_LAST_FETCH_KEY);
        const storedParksData = await AsyncStorage.getItem(ASYNC_STORAGE_PARKS_KEY);

        if (storedLastFetch && storedParksData) {
          const lastFetchTime = parseInt(storedLastFetch, 10);
          if (Date.now() - lastFetchTime < DATA_REFRESH_INTERVAL) {
            setParks(JSON.parse(storedParksData));
            setLastFetch(lastFetchTime);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.error('Error loading parks data from AsyncStorage:', e);
      }
      await fetchParksData();
    };

    loadParks();
  }, []); // Initial load

  return (
    <ParksContext.Provider value={{ parks, loading, error, fetchParks: fetchParksData, lastFetch }}>
      {children}
    </ParksContext.Provider>
  );
};

export const useParks = (): ParksContextType => {
  const context = useContext(ParksContext);
  if (context === undefined) {
    throw new Error('useParks must be used within a ParksProvider');
  }
  return context;
}; 