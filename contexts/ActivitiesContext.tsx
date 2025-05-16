import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ACTIVITIES_REFRESH_INTERVAL } from '../constants/config';
import { Activity } from '../interfaces/Activity.interface';

const ACTIVITIES_DATA_URL = 'https://wisconsin-state-parks-finder.s3.us-east-1.amazonaws.com/activities.json';
const ASYNC_STORAGE_ACTIVITIES_KEY = 'activitiesData';
const ASYNC_STORAGE_ACTIVITIES_LAST_FETCH_KEY = 'activitiesLastFetchTime';

interface ActivitiesContextType {
  activities: Activity[];
  loading: boolean;
  error: Error | null;
  fetchActivities: () => Promise<void>;
}

const ActivitiesContext = createContext<ActivitiesContextType | undefined>(undefined);

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchActivitiesData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(ACTIVITIES_DATA_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setActivities(data);
      const now = Date.now();
      await AsyncStorage.setItem(ASYNC_STORAGE_ACTIVITIES_KEY, JSON.stringify(data));
      await AsyncStorage.setItem(ASYNC_STORAGE_ACTIVITIES_LAST_FETCH_KEY, now.toString());
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
    const loadActivities = async () => {
      try {
        const storedLastFetch = await AsyncStorage.getItem(ASYNC_STORAGE_ACTIVITIES_LAST_FETCH_KEY);
        const storedActivitiesData = await AsyncStorage.getItem(ASYNC_STORAGE_ACTIVITIES_KEY);

        if (storedLastFetch && storedActivitiesData) {
          const lastFetchTime = parseInt(storedLastFetch, 10);
          if (Date.now() - lastFetchTime < ACTIVITIES_REFRESH_INTERVAL) {
            setActivities(JSON.parse(storedActivitiesData));
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.error('Error loading activities data from AsyncStorage:', e);
      }
      await fetchActivitiesData();
    };

    loadActivities();
  }, []); // Initial load

  return (
    <ActivitiesContext.Provider value={{ activities, loading, error, fetchActivities: fetchActivitiesData }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = (): ActivitiesContextType => {
  const context = useContext(ActivitiesContext);
  if (context === undefined) {
    throw new Error('useActivities must be used within an ActivitiesProvider');
  }
  return context;
}; 