import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';
import { useFavorites } from '../contexts/FavoritesContext';
import { Park } from '../data/parks';

interface ParkMarkerProps {
  park: Park;
  onPress?: () => void;
}

export default function ParkMarker({ park, onPress }: ParkMarkerProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(park.id);

  const handleFavoritePress = () => {
    console.log('Favorite button pressed for park:', park.id);
    toggleFavorite(park.id);
  };

  const renderCallout = () => (
    <TouchableHighlight
      activeOpacity={1} 
      onPress={(e) => {
        // e.stopPropagation();
        console.log('Callout pressed');
      }}
    >
      <View className="w-[200px] p-3 bg-white rounded-lg shadow-md">
        <View className="flex-row justify-between items-center mb-1">
          <Text className="text-base font-bold text-charcoal-900 flex-1 mr-2">{park.name}</Text>
          <TouchableOpacity
            onPress={(e) => {
              // e.stopPropagation();
              console.log('Heart button pressed');
              handleFavoritePress();
            }}
            className="p-2 -m-2"
            activeOpacity={0.7}
          >
            <Ionicons
              name={favorite ? "heart" : "heart-outline"}
              size={24}
              color={favorite ? "#FF3B30" : "#8E8E93"}
            />
          </TouchableOpacity>
        </View>
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
    </TouchableHighlight>
  );

  return (
    <Marker
      coordinate={park.coordinate}
      title={park.name}
      description={park.description}
      onPress={onPress}
    >
      <View className="bg-white p-2 rounded-full border-2 border-blue-500 shadow-md">
        <Text className="text-xl">🌲</Text>
      </View>
      <Callout tooltip>
        {renderCallout()}
      </Callout>
    </Marker>
  );
} 