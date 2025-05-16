import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useActivities } from '../contexts/ActivitiesContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useParks } from '../contexts/ParksContext';
import { useTheme } from '../contexts/ThemeContext';
import { Activity } from '../interfaces/Activity.interface';
import { FavoriteCardProps, FavoritesListProps } from '../interfaces/FavoritesList.interfaces';
import { Park } from '../interfaces/Park.interface';
import { getActivityName } from '../utils/activities';
import { getColor } from '../utils/colors';
import { shareContent } from '../utils/share';
import AnimatedPressable from './AnimatedPressable';
import FavoriteHeartIcon from './FavoriteHeartIcon';

interface AnimatedFavoriteCardComponentProps extends FavoriteCardProps {
  activities: Activity[];
}

const AnimatedFavoriteCard = ({ park, index, onPress, onShare, activities }: AnimatedFavoriteCardComponentProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    opacity.value = withDelay(index * 100, withTiming(1, { duration: 400 }));
    translateY.value = withDelay(index * 100, withTiming(0, { duration: 400 }));
  }, [opacity, translateY, index]);

  const { effectiveTheme } = useTheme();
  const shareIconColor = getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600');

  return (
    <Animated.View style={[animatedStyle, { marginBottom: 12 }]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 flex-row shadow-sm">
          <View className="flex-1 mr-3">
            <Text className="text-lg font-bold text-charcoal-900 dark:text-charcoal-100 mb-1">{park.name}</Text>
            <Text className="text-sm text-charcoal-600 dark:text-charcoal-300 mb-2" numberOfLines={2}>
              {park.description}
            </Text>
            <View className="flex-row flex-wrap gap-1">
              {park.activities?.map((activityId, actIndex) => (
                <View key={actIndex} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-xl">
                  <Text className="text-xs text-blue-700 dark:text-blue-300">
                    {getActivityName(activityId, activities)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {/* Icons Column */}
          <View className="justify-start items-center w-12"> 
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                onShare(park);
              }}
              className="p-2 items-center"
              activeOpacity={0.7}
            >
              <Ionicons
                name="share-outline"
                size={24}
                color={shareIconColor}
              />
            </TouchableOpacity>
            <View className="p-2 items-center mt-1">
                <FavoriteHeartIcon parkId={park.id} size={24} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function FavoritesList({ scrollEnabled = true }: FavoritesListProps) {
  const { favorites } = useFavorites();
  const router = useRouter();
  const { effectiveTheme } = useTheme();
  const { parks: PARKS, loading: parksLoading, error: parksError } = useParks();
  const { activities, loading: activitiesLoading, error: activitiesError } = useActivities();
  
  const handleShare = async (parkToShare: Park) => {
    if (!parkToShare) return;
    await shareContent({
      message: `Check out ${parkToShare.name}! Find out more here: ${parkToShare.contact.website}`,
      title: `Share ${parkToShare.name}`,
      url: parkToShare.contact.website
    });
  };
  
  const favoriteParks = PARKS && PARKS.length > 0 ? PARKS.filter(park => favorites.includes(park.id)) : [];

  if (parksLoading || activitiesLoading) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <Text className="text-lg text-charcoal-600 dark:text-charcoal-400">Loading favorite parks...</Text>
      </View>
    );
  }

  if (parksError || activitiesError) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <Text className="text-lg text-red-600 dark:text-red-400">
          Error loading data: {parksError?.message || activitiesError?.message}
        </Text>
      </View>
    );
  }

  if (favoriteParks.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <Ionicons 
          name="sad-outline"
          size={64} 
          color={getColor(effectiveTheme === 'dark' ? 'charcoal-500' : 'charcoal-400')}
          style={{ marginBottom: 16 }} 
        />
        <Text className="text-xl font-bold text-charcoal-900 dark:text-charcoal-100 mb-2 text-center">
          No Favorite Parks Yet
        </Text>
        <Text className="text-base text-charcoal-600 dark:text-charcoal-400 text-center mb-6">
          Start exploring to find and add your favorite parks!
        </Text>
        <AnimatedPressable
          onPress={() => router.push('/(tabs)/explore')}
          className="bg-persian-700 dark:bg-persian-600 px-6 py-3 rounded-lg shadow-md"
        >
          <Text className="text-white dark:text-persian-100 text-lg font-semibold">
            Explore Parks
          </Text>
        </AnimatedPressable>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteParks}
      renderItem={({ item, index }) => (
        <AnimatedFavoriteCard 
          park={item} 
          index={index} 
          onPress={() => router.push(`/park/${item.id}`)} 
          onShare={handleShare}
          activities={activities}
        />
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 12 }}
      className="flex-1"
      scrollEnabled={scrollEnabled}
    />
  );
} 