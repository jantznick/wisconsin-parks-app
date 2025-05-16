import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from '../constants/config';
import { Activity } from '../interfaces/Activity.interface'; // Corrected path

const ACTIVITIES_DATA_URL = 'https://wisconsin-state-parks-finder.s3.us-east-1.amazonaws.com/activities.json';

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
  const [lastFetch, setLastFetch] = useState<number | null>(null);

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
      setLastFetch(Date.now());
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
      if (lastFetch && (Date.now() - lastFetch < DATA_REFRESH_INTERVAL)) {
        if (activities.length > 0) {
          setLoading(false);
          return;
        }
      }
      await fetchActivitiesData();
    };

    loadActivities();
  }, []); // Initial load

  const fetchActivities = async () => {
    await fetchActivitiesData();
  };

  return (
    <ActivitiesContext.Provider value={{ activities, loading, error, fetchActivities }}>
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