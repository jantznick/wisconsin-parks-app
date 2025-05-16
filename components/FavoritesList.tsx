import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useActivities } from '../contexts/ActivitiesContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useParks } from '../contexts/ParksContext';
import { useTheme } from '../contexts/ThemeContext';
import { Activity } from '../interfaces/Activity.interface';
import { FavoriteItem } from '../interfaces/FavoritesContext.interfaces';
import { FavoritesListProps } from '../interfaces/FavoritesList.interfaces';
import { Park } from '../interfaces/Park.interface';
import { getActivityName } from '../utils/activities';
import { getColor } from '../utils/colors';
import { shareContent } from '../utils/share';
import AnimatedPressable from './AnimatedPressable';
import FavoriteHeartIcon from './FavoriteHeartIcon';

type FavoriteStatus = 'available' | 'changed' | 'unavailable';

interface ExtendedFavoriteCardProps {
  favoriteItem: FavoriteItem;
  currentParkData?: Park | null;
  status: FavoriteStatus;
  index: number;
  activities: Activity[];
  onPress: () => void;
  onShare: (parkToShare: Park) => Promise<void>;
}

const AnimatedFavoriteCard = ({
  favoriteItem,
  currentParkData,
  status,
  index,
  activities,
  onPress,
  onShare,
}: ExtendedFavoriteCardProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  const { effectiveTheme } = useTheme();

  useEffect(() => {
    opacity.value = withDelay(index * 100, withTiming(1, { duration: 400 }));
    translateY.value = withDelay(index * 100, withTiming(0, { duration: 400 }));
  }, [opacity, translateY, index]);

  const shareIconColor = getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600');

  if (status === 'unavailable' || status === 'changed') {
    const message = status === 'unavailable'
      ? `Your favorited park "${favoriteItem.parkName}" was removed from our database. We're working to add it back, but for now it's unavailable. Please contact support for more info.`
      : `The park previously known as "${favoriteItem.parkName}" is now named "${currentParkData?.name || favoriteItem.parkName}". Your favorite has been updated.`;

    return (
      <Animated.View style={[{ opacity: opacity.value, transform: [{ translateY: translateY.value }], marginBottom: 12 }]}>
        <View className="bg-charcoal-200 dark:bg-charcoal-700 rounded-xl p-4 shadow-sm opacity-70">
          <Text className="text-charcoal-700 dark:text-charcoal-300 text-sm italic">
            {message}
          </Text>
        </View>
      </Animated.View>
    );
  }

  if (!currentParkData) {
    return (
        <Animated.View style={[{ opacity: opacity.value, transform: [{ translateY: translateY.value }], marginBottom: 12 }]}>
            <View className="bg-red-100 dark:bg-red-800 rounded-xl p-4 shadow-sm">
                <Text className="text-red-700 dark:text-red-300">Error: Favorited park data is inconsistent.</Text>
            </View>
        </Animated.View>
    );
  }

  return (
    <Animated.View style={[{ opacity: opacity.value, transform: [{ translateY: translateY.value }], marginBottom: 12 }]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 flex-row shadow-sm">
          <View className="flex-1 mr-3">
            <Text className="text-lg font-bold text-charcoal-900 dark:text-charcoal-100 mb-1">{currentParkData.name}</Text>
            <Text className="text-sm text-charcoal-600 dark:text-charcoal-300 mb-2" numberOfLines={2}>
              {currentParkData.description}
            </Text>
            <View className="flex-row flex-wrap gap-1">
              {currentParkData.activities?.map((activityId, actIndex) => (
                <View key={actIndex} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-xl">
                  <Text className="text-xs text-blue-700 dark:text-blue-300">
                    {getActivityName(activityId, activities)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View className="justify-start items-center w-12">
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                onShare(currentParkData); 
              }}
              className="p-2 items-center"
              activeOpacity={0.7}
            >
              <Ionicons name="share-outline" size={24} color={shareIconColor} />
            </TouchableOpacity>
            <View className="p-2 items-center mt-1">
              <FavoriteHeartIcon parkId={currentParkData.id} parkName={currentParkData.name} size={24} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function FavoritesList({ scrollEnabled = true }: FavoritesListProps) {
  const router = useRouter();
  const { effectiveTheme } = useTheme();
  const { favorites: favoriteItems, isLoadingFavorites } = useFavorites();
  const { parks, loading: parksLoading, error: parksError } = useParks();
  const { activities, loading: activitiesLoading, error: activitiesError } = useActivities();

  const handleShare = async (parkToShare: Park) => {
    if (!parkToShare) return;
    await shareContent({
      message: `Check out ${parkToShare.name}! Find out more here: ${parkToShare.contact.website}`,
      title: `Share ${parkToShare.name}`,
      url: parkToShare.contact.website,
    });
  };

  const processedFavorites = useMemo(() => {
    if (parksLoading || isLoadingFavorites || activitiesLoading) return [];
    if (!parks || !favoriteItems || !activities) return [];

    return favoriteItems.map(favItem => {
      const currentPark = parks.find(p => p.id === favItem.parkId);
      if (!currentPark) {
        return { favoriteItem: favItem, currentParkData: null, status: 'unavailable' as FavoriteStatus, activities };
      }
      if (currentPark.name !== favItem.parkName) {
        return { favoriteItem: favItem, currentParkData: currentPark, status: 'changed' as FavoriteStatus, activities };
      }
      return { favoriteItem: favItem, currentParkData: currentPark, status: 'available' as FavoriteStatus, activities };
    });
  }, [favoriteItems, parks, parksLoading, isLoadingFavorites, activities, activitiesLoading]);

  if (parksLoading || isLoadingFavorites || activitiesLoading) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <ActivityIndicator size="large" color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} />
        <Text className="text-lg text-charcoal-600 dark:text-charcoal-400 mt-3">Loading favorites...</Text>
      </View>
    );
  }

  if (parksError || activitiesError) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <Ionicons name="alert-circle-outline" size={48} color={getColor('red-500')} style={{ marginBottom: 16 }} />
        <Text className="text-lg text-red-600 dark:text-red-400 text-center">
          Error loading data: {parksError?.message || activitiesError?.message}
        </Text>
      </View>
    );
  }

  if (processedFavorites.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <Ionicons name="sad-outline" size={64} color={getColor(effectiveTheme === 'dark' ? 'charcoal-500' : 'charcoal-400')} style={{ marginBottom: 16 }} />
        <Text className="text-xl font-bold text-charcoal-900 dark:text-charcoal-100 mb-2 text-center">No Favorite Parks Yet</Text>
        <Text className="text-base text-charcoal-600 dark:text-charcoal-400 text-center mb-6">Start exploring to find and add your favorite parks!</Text>
        <AnimatedPressable onPress={() => router.push('/(tabs)/explore')} className="bg-persian-700 dark:bg-persian-600 px-6 py-3 rounded-lg shadow-md">
          <Text className="text-white dark:text-persian-100 text-lg font-semibold">Explore Parks</Text>
        </AnimatedPressable>
      </View>
    );
  }

  return (
    <FlatList
      data={processedFavorites}
      renderItem={({ item, index }) => (
        <AnimatedFavoriteCard
          favoriteItem={item.favoriteItem}
          currentParkData={item.currentParkData}
          status={item.status}
          index={index}
          activities={item.activities}
          onPress={() => {
            if (item.status === 'available' && item.currentParkData) {
              router.push(`/park/${item.currentParkData.id}`);
            }
          }}
          onShare={async () => {
            if (item.status === 'available' && item.currentParkData) {
              await handleShare(item.currentParkData);
            }
          }}
        />
      )}
      keyExtractor={(item) => item.favoriteItem.parkId}
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 80 }}
      className="flex-1"
      scrollEnabled={scrollEnabled}
    />
  );
} 