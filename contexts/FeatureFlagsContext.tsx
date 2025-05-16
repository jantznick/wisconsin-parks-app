import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const FEATURE_FLAGS_DATA_URL = 'https://wisconsin-state-parks-finder.s3.us-east-1.amazonaws.com/featureFlags.json';
const FEATURE_FLAGS_BETA_URL = 'https://wisconsin-state-parks-finder.s3.us-east-1.amazonaws.com/featureFlagsBeta.json';
const ASYNC_STORAGE_FEATURE_FLAGS_KEY = 'featureFlagsData';
const ASYNC_STORAGE_FEATURE_FLAGS_LAST_FETCH_KEY = 'featureFlagsLastFetchTime';
const FEATURE_FLAGS_REFRESH_INTERVAL = 7 * 24 * 60 * 60 * 1000; // Re-added: 7 days in milliseconds

// 1. Define the interface for the Feature Flags structure
export interface FeatureFlags {
  explorePage: {
    filterBy: {
      facilities: boolean;
      activities: boolean;
      entertainment: boolean;
      other: {
        dogFriendly: boolean;
        accessible: boolean;
      };
    };
  };
  parkDetailsPage: {
    reservations: boolean;
  };
}

// 2. Define the interface for the Context value
export interface FeatureFlagsContextType {
  featureFlags: FeatureFlags | null;
  loading: boolean;
  error: Error | null;
  fetchFeatureFlags: (beta?: boolean) => Promise<void>;
  lastFetchTime: number | null;
}

// 3. Create the Context
const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined);

// 4. Create the Provider component
interface FeatureFlagsProviderProps {
  children: ReactNode;
}

export const FeatureFlagsProvider: React.FC<FeatureFlagsProviderProps> = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState<number | null>(null);

  const fetchFeatureFlagsData = async (beta: boolean = false) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(beta ? FEATURE_FLAGS_BETA_URL : FEATURE_FLAGS_DATA_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: FeatureFlags = await response.json();
      const now = Date.now();
      setFeatureFlags(data);
      setLastFetchTime(now);
      await AsyncStorage.setItem(ASYNC_STORAGE_FEATURE_FLAGS_KEY, JSON.stringify(data));
      await AsyncStorage.setItem(ASYNC_STORAGE_FEATURE_FLAGS_LAST_FETCH_KEY, now.toString());
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('An unknown error occurred while fetching feature flags.'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadFeatureFlags = async () => {
      setLoading(true);
      try {
        const storedLastFetch = await AsyncStorage.getItem(ASYNC_STORAGE_FEATURE_FLAGS_LAST_FETCH_KEY);
        const storedFeatureFlagsData = await AsyncStorage.getItem(ASYNC_STORAGE_FEATURE_FLAGS_KEY);

        if (storedLastFetch && storedFeatureFlagsData) {
          const parsedLastFetchTime = parseInt(storedLastFetch, 10);
          // Check if cache is stale
          if (Date.now() - parsedLastFetchTime < FEATURE_FLAGS_REFRESH_INTERVAL) {
            setFeatureFlags(JSON.parse(storedFeatureFlagsData));
            setLastFetchTime(parsedLastFetchTime);
            setLoading(false);
            return;
          }
          // Cache is stale, proceed to fetch
        }
      } catch (e) {
        console.error('Error loading feature flags data from AsyncStorage:', e);
        // Proceed to fetch from network if cache load fails or cache doesn't exist
      }
      // Fetch if no cache, error loading from cache, or cache is stale
      await fetchFeatureFlagsData();
    };

    loadFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ featureFlags, loading, error, fetchFeatureFlags: fetchFeatureFlagsData, lastFetchTime }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

// 5. Create a custom hook to use the FeatureFlags context
export const useFeatureFlags = (): FeatureFlagsContextType => {
  const context = useContext(FeatureFlagsContext);
  if (context === undefined) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagsProvider');
  }
  return context;
}; 