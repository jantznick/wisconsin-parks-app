import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { FeaturedParkInfo } from '../interfaces/FeaturedParkInfo.interface';

const FEATURED_PARKS_INFO_URL = 'https://raw.githubusercontent.com/jantznick/wisconsin-parks-app/refs/heads/main/data/featuredParks.json';

const ASYNC_STORAGE_FEATURED_PARKS_INFO_KEY = 'featuredParksInfoData';
const ASYNC_STORAGE_LAST_FEATURED_INFO_FETCH_KEY = 'lastFeaturedInfoFetchTime';

interface FeaturedParksContextType {
  featuredParkInfos: FeaturedParkInfo[];
  loading: boolean;
  error: Error | null;
  fetchFeaturedParkInfos: () => Promise<void>;
  lastFeaturedInfoFetch: number | null;
}

const FeaturedParksContext = createContext<FeaturedParksContextType | undefined>(undefined);

export const FeaturedParksProvider = ({ children }: { children: ReactNode }) => {
  const [featuredParkInfos, setFeaturedParkInfos] = useState<FeaturedParkInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastFeaturedInfoFetch, setLastFeaturedInfoFetch] = useState<number | null>(null);

  const fetchFeaturedParkInfosData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(FEATURED_PARKS_INFO_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: FeaturedParkInfo[] = await response.json();
      setFeaturedParkInfos(data);
      const now = Date.now();
      setLastFeaturedInfoFetch(now);
      await AsyncStorage.setItem(ASYNC_STORAGE_FEATURED_PARKS_INFO_KEY, JSON.stringify(data));
      await AsyncStorage.setItem(ASYNC_STORAGE_LAST_FEATURED_INFO_FETCH_KEY, now.toString());
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('An unknown error occurred while fetching featured park info'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadFeaturedParkInfos = async () => {
      try {
        const storedLastFetch = await AsyncStorage.getItem(ASYNC_STORAGE_LAST_FEATURED_INFO_FETCH_KEY);
        const storedFeaturedParkInfosData = await AsyncStorage.getItem(ASYNC_STORAGE_FEATURED_PARKS_INFO_KEY);

        if (storedLastFetch && storedFeaturedParkInfosData) {
          const lastFetchTime = parseInt(storedLastFetch, 10);
          if (Date.now() - lastFetchTime < 24 * 60 * 60 * 1000) {
            setFeaturedParkInfos(JSON.parse(storedFeaturedParkInfosData));
            setLastFeaturedInfoFetch(lastFetchTime);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.error('Error loading featured park infos from AsyncStorage:', e);
      }
      await fetchFeaturedParkInfosData();
    };

    loadFeaturedParkInfos();
  }, []);

  return (
    <FeaturedParksContext.Provider value={{ featuredParkInfos, loading, error, fetchFeaturedParkInfos: fetchFeaturedParkInfosData, lastFeaturedInfoFetch }}>
      {children}
    </FeaturedParksContext.Provider>
  );
};

export const useFeaturedParks = (): FeaturedParksContextType => {
  const context = useContext(FeaturedParksContext);
  if (context === undefined) {
    throw new Error('useFeaturedParks must be used within a FeaturedParksProvider');
  }
  return context;
}; 