import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useFavorites } from '../contexts/FavoritesContext';
import { PARKS } from '../data/parks';

export default function FavoritesList() {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();
  
  // Get the full park objects for favorite IDs
  const favoriteParks = PARKS.filter(park => favorites.includes(park.id));

  if (favoriteParks.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-lg font-bold text-charcoal-900 mb-2">No favorite parks yet</Text>
        <Text className="text-sm text-charcoal-600 text-center">Tap the heart icon on a park to add it to favorites</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1">
      {favoriteParks.map((park) => (
        <TouchableOpacity
          key={park.id}
          onPress={() => router.push(`/park/${park.id}`)}
          activeOpacity={0.7}
        >
          <View className="bg-white rounded-xl p-4 mb-3 flex-row shadow-sm">
            <View className="flex-1 mr-3">
              <Text className="text-lg font-bold text-charcoal-900 mb-1">{park.name}</Text>
              <Text className="text-sm text-charcoal-600 mb-2" numberOfLines={2}>
                {park.description}
              </Text>
              <View className="flex-row flex-wrap gap-1">
                {park.activities?.map((activity, index) => (
                  <View key={index} className="bg-blue-50 px-2 py-1 rounded-xl">
                    <Text className="text-xs text-blue-600">{activity}</Text>
                  </View>
                ))}
              </View>
            </View>
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                toggleFavorite(park.id);
              }}
              className="p-2 justify-center"
              activeOpacity={0.7}
            >
              <Ionicons
                name="heart"
                size={24}
                color="#FF3B30"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
} 