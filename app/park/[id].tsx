import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFavorites } from '../../contexts/FavoritesContext';
import { useTheme } from '../../contexts/ThemeContext';
import { PARKS } from '../../data/parks';
import tailwindConfig from '../../tailwind.config.js';

// Helper to get color from Tailwind config
const getColor = (colorName: string) => {
  const [theme, shade] = colorName.split('-');
  // @ts-ignore
  return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

export default function ParkDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const mapRef = useRef<MapView>(null);
  const insets = useSafeAreaInsets();
  const { effectiveTheme } = useTheme();

  const park = PARKS.find(p => p.id === id);

  if (!park) {
    return (
      <View className="flex-1 items-center justify-center bg-charcoal-50 dark:bg-charcoal-950">
        <Text className="text-xl text-charcoal-900 dark:text-charcoal-100">Park not found</Text>
      </View>
    );
  }

  const favorite = isFavorite(park.id);

  const initialRegion = {
    latitude: park.coordinate.latitude,
    longitude: park.coordinate.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${park.coordinate.latitude},${park.coordinate.longitude}&travelmode=driving`;
    Linking.openURL(url);
  };

  // Define colors for props not directly stylable with Tailwind dark: prefix
  const favoriteIconColor = favorite 
    ? getColor(effectiveTheme === 'dark' ? 'burnt-400' : 'burnt-600') 
    : getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600');
  
  const mapMarkerBorderColor = effectiveTheme === 'dark' ? getColor('saffron-400') : getColor('saffron-600');
  // Directions button might need specific color if not using Tailwind classes for all states

  return (
    <View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
      {/* Header */}
      <View className="bg-persian-800 dark:bg-charcoal-800 px-6 pb-3" style={{ paddingTop: insets.top + 8 }}>
        <View className="absolute left-4" style={{ top: insets.top + 8}}>
          <Pressable onPress={() => router.back()} className="p-2">
            <Ionicons name="arrow-back" size={24} color={getColor(effectiveTheme === 'dark' ? 'persian-100' : 'charcoal-50')} />
          </Pressable>
        </View>
        <View className="items-center justify-center">
          <Text className="text-2xl font-bold text-white dark:text-white">{park.name}</Text>
          <Text className="text-base text-persian-200 dark:text-charcoal-300 mt-1">State Park</Text>
        </View>
      </View>

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        {/* Map Panel */}
        <View className="p-6 pb-0">
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-saffron-700 dark:border-saffron-400">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400">Location</Text>
              <Pressable
                onPress={openDirections}
                className="bg-saffron-700 dark:bg-saffron-500 px-3 py-2 rounded-lg flex-row items-center shadow-sm"
              >
                <Ionicons name="navigate" size={16} color="white" /> 
                <Text className="text-white dark:text-saffron-100 font-medium ml-2 text-sm">Directions</Text>
              </Pressable>
            </View>
            <View className="h-48 rounded-md overflow-hidden">
              <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                showsUserLocation
                showsCompass
                showsScale
                showsMyLocationButton
                // mapStyle prop can be used for dark mode Google Maps if needed
              >
                <Marker coordinate={park.coordinate} title={park.name}>
                  <View className="bg-white dark:bg-charcoal-800 p-2 rounded-full border-2 shadow-md" style={{ borderColor: mapMarkerBorderColor }}>
                    <Text className="text-xl">🌲</Text>{/* Emoji, color won't change with theme */}
                  </View>
                </Marker>
              </MapView>
            </View>
          </View>
        </View>

        {/* Content Sections */}
        <View className="p-6">
          {/* About */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-persian-700 dark:text-persian-400">About</Text>
              <Pressable onPress={() => toggleFavorite(park.id)} className="p-2">
                <Ionicons name={favorite ? "heart" : "heart-outline"} size={28} color={favoriteIconColor} />
              </Pressable>
            </View>
            <Text className="text-base text-charcoal-700 dark:text-charcoal-300 leading-relaxed">{park.description}</Text>
          </View>

          {/* Hours */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400">
            <Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400 mb-2">Hours</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">{park.hours.open} – {park.hours.close}</Text>
          </View>

          {/* Activities */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400">
            <Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400 mb-3">Activities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.activities.map((activity, index) => (
                <View key={index} className="bg-burnt-100 dark:bg-charcoal-700 px-3 py-1.5 rounded-full shadow-sm">
                  <Text className="text-burnt-700 dark:text-burnt-300 font-medium text-sm">{activity}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Facilities */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-saffron-700 dark:border-saffron-400">
            <Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400 mb-3">Facilities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.facilities.map((facility, index) => (
                <View key={index} className="bg-saffron-100 dark:bg-charcoal-700 px-3 py-1.5 rounded-full shadow-sm">
                  <Text className="text-saffron-700 dark:text-saffron-300 font-medium text-sm">{facility}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Fees */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500">
            <Text className="text-xl font-semibold text-persian-700 dark:text-persian-400 mb-2">Entrance Fees</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">Daily: ${park.entranceFee.daily}</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">Annual: ${park.entranceFee.annual}</Text>
          </View>

          {/* Contact */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400">
            <Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400 mb-2">Contact</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.phone}</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.email}</Text>
            <Pressable onPress={() => Linking.openURL(park.contact.website)}>
                <Text className="text-persian-700 dark:text-persian-400 underline font-medium">{park.contact.website}</Text>
            </Pressable>
          </View>

          {/* Rules */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400">
            <Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400 mb-2">Rules</Text>
            {park.rules.map((rule, index) => (
              <Text key={index} className="text-charcoal-700 dark:text-charcoal-300 mb-1">• {rule}</Text>
            ))}
          </View>

          {/* Seasonal Info */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-saffron-700 dark:border-saffron-400">
            <Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400 mb-2">Seasonal Information</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">Best Time to Visit: {park.seasonalInfo.bestTimeToVisit}</Text>
            {park.seasonalInfo.seasonalClosures.map((closure, index) => (
              <Text key={index} className="text-charcoal-700 dark:text-charcoal-300">• {closure}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 