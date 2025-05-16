import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from '../constants/config';
import { Park } from '../interfaces/Park.interface';

const PARKS_DATA_URL = 'https://wisconsin-state-parks-finder.s3.us-east-1.amazonaws.com/parks.json';

interface ParksContextType {
  parks: Park[];
  loading: boolean;
  error: Error | null;
  fetchParks: () => Promise<void>;
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
      setLastFetch(Date.now());
      // Store in AsyncStorage or similar for persistence across app loads if needed
      // For now, we'll keep it in memory for the session
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
      // In a real app, you'd retrieve lastFetch from AsyncStorage here
      if (lastFetch && (Date.now() - lastFetch < DATA_REFRESH_INTERVAL)) {
        // Data is fresh enough, potentially load from cache or assume it's in `parks` state
        // For this implementation, if `parks` has data, we assume it's fine.
        // A more robust solution would involve persisting and retrieving `parks` data too.
        if (parks.length > 0) {
          setLoading(false);
          return;
        }
      }
      await fetchParksData();
    };

    loadParks();
  }, []); // Initial load

  // Function to be called to manually trigger fetch if needed, or by refresh logic
  const fetchParks = async () => {
    await fetchParksData();
  };

  return (
    <ParksContext.Provider value={{ parks, loading, error, fetchParks }}>
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