import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFavorites } from '../../contexts/FavoritesContext';
import { PARKS } from '../../data/parks';

export default function ParkDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const mapRef = useRef<MapView>(null);
  const insets = useSafeAreaInsets();

  const park = PARKS.find(p => p.id === id);

  if (!park) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl text-charcoal-900">Park not found</Text>
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

  return (
    <View className="flex-1 bg-charcoal-50">
      {/* Header - Using insets.top for padding */}
      <View className="bg-persian-800 px-6 pb-3" style={{ paddingTop: insets.top + 8 }}>
        <View className="absolute left-4" style={{ top: insets.top + 8}}>
          <Pressable onPress={() => router.back()} className="p-2">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <View className="items-center justify-center">
          <Text className="text-2xl font-bold text-white">{park.name}</Text>
          <Text className="text-base text-persian-200 mt-1">State Park</Text>
        </View>
      </View>

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        {/* Map Panel */}
        <View className="p-6 pb-0">
          <View className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-saffron-700">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-saffron-700">Location</Text>
              <Pressable
                onPress={openDirections}
                className="bg-saffron-700 px-3 py-2 rounded-lg flex-row items-center shadow-sm"
              >
                <Ionicons name="navigate" size={16} color="white" />
                <Text className="text-white font-medium ml-2 text-sm">Directions</Text>
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
              >
                <Marker coordinate={park.coordinate} title={park.name}>
                  <View className="bg-white p-2 rounded-full border-2 border-saffron-600 shadow-md">
                    <Text className="text-xl">🌲</Text>
                  </View>
                </Marker>
              </MapView>
            </View>
          </View>
        </View>

        {/* Content Sections */}
        <View className="p-6">
          {/* About */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-persian-700">About</Text>
              <Pressable onPress={() => toggleFavorite(park.id)} className="p-2">
                <Ionicons
                  name={favorite ? "heart" : "heart-outline"}
                  size={28}
                  color={favorite ? "#e76f51"
                  : "#638193"}
                />
              </Pressable>
            </View>
            <Text className="text-base text-charcoal-700 leading-relaxed">{park.description}</Text>
          </View>

          {/* Hours */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600">
            <Text className="text-xl font-semibold text-sandy-600 mb-2">Hours</Text>
            <Text className="text-charcoal-700">{park.hours.open} – {park.hours.close}</Text>
          </View>

          {/* Activities */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600">
            <Text className="text-xl font-semibold text-burnt-600 mb-3">Activities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.activities.map((activity, index) => (
                <View key={index} className="bg-burnt-100 px-3 py-1.5 rounded-full shadow-sm">
                  <Text className="text-burnt-700 font-medium text-sm">{activity}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Facilities */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-saffron-700">
            <Text className="text-xl font-semibold text-saffron-700 mb-3">Facilities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.facilities.map((facility, index) => (
                <View key={index} className="bg-saffron-100 px-3 py-1.5 rounded-full shadow-sm">
                  <Text className="text-saffron-700 font-medium text-sm">{facility}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Fees */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700">
            <Text className="text-xl font-semibold text-persian-700 mb-2">Entrance Fees</Text>
            <Text className="text-charcoal-700">Daily: ${park.entranceFee.daily}</Text>
            <Text className="text-charcoal-700">Annual: ${park.entranceFee.annual}</Text>
          </View>

          {/* Contact */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600">
            <Text className="text-xl font-semibold text-sandy-600 mb-2">Contact</Text>
            <Text className="text-charcoal-700">{park.contact.phone}</Text>
            <Text className="text-charcoal-700">{park.contact.email}</Text>
            <Pressable onPress={() => Linking.openURL(park.contact.website)}>
                <Text className="text-persian-700 underline font-medium">{park.contact.website}</Text>
            </Pressable>
          </View>

          {/* Rules */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600">
            <Text className="text-xl font-semibold text-burnt-600 mb-2">Rules</Text>
            {park.rules.map((rule, index) => (
              <Text key={index} className="text-charcoal-700 mb-1">• {rule}</Text>
            ))}
          </View>

          {/* Seasonal Info */}
          <View className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-saffron-700">
            <Text className="text-xl font-semibold text-saffron-700 mb-2">Seasonal Information</Text>
            <Text className="text-charcoal-700">Best Time to Visit: {park.seasonalInfo.bestTimeToVisit}</Text>
            {park.seasonalInfo.seasonalClosures.map((closure, index) => (
              <Text key={index} className="text-charcoal-700">• {closure}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 