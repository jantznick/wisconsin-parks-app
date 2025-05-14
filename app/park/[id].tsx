import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useFavorites } from '../../contexts/FavoritesContext';
import { PARKS } from '../../data/parks';

export default function ParkDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const mapRef = useRef<MapView>(null);

  const park = PARKS.find(p => p.id === id);

  if (!park) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl text-charcoal-900">Park not found</Text>
      </View>
    );
  }

  const favorite = isFavorite(park.id);

  // Set initial region to be centered on the park with a closer zoom
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
      {/* Header */}
      <View className="h-40 bg-persian-800 items-center justify-center">
        <View className="absolute top-12 left-4">
          <Pressable onPress={() => router.back()} className="p-2">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <Text className="text-3xl font-bold text-white">{park.name}</Text>
        <Text className="text-lg text-persian-100 mt-2">State Park</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Map Panel */}
        <View className="p-6 pb-0">
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-charcoal-900">Location</Text>
              <Pressable
                onPress={openDirections}
                className="bg-persian-800 px-4 py-2 rounded-lg flex-row items-center"
              >
                <Ionicons name="navigate" size={16} color="white" />
                <Text className="text-white font-medium ml-2">Get Directions</Text>
              </Pressable>
            </View>
            <View className="h-48 rounded-xl overflow-hidden">
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
                <Marker
                  coordinate={park.coordinate}
                  title={park.name}
                >
                  <View className="bg-white p-2 rounded-full border-2 border-blue-500 shadow-md">
                    <Text className="text-xl">🌲</Text>
                  </View>
                </Marker>
              </MapView>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="p-6">
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-xl font-semibold text-charcoal-900">About</Text>
              <Pressable 
                onPress={() => toggleFavorite(park.id)}
                className="p-2"
              >
                <Ionicons
                  name={favorite ? "heart" : "heart-outline"}
                  size={24}
                  color={favorite ? "#FF3B30" : "#264653"}
                />
              </Pressable>
            </View>
            <Text className="text-base text-charcoal-700">{park.description}</Text>
          </View>

          {/* Hours */}
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-xl font-semibold text-charcoal-900 mb-2">Hours</Text>
            <Text className="text-charcoal-700">{park.hours.open} - {park.hours.close}</Text>
          </View>

          {/* Activities */}
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-xl font-semibold text-charcoal-900 mb-2">Activities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.activities.map((activity, index) => (
                <View key={index} className="bg-persian-100 px-3 py-1 rounded-full">
                  <Text className="text-persian-800">{activity}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Facilities */}
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-xl font-semibold text-charcoal-900 mb-2">Facilities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.facilities.map((facility, index) => (
                <View key={index} className="bg-saffron-100 px-3 py-1 rounded-full">
                  <Text className="text-saffron-800">{facility}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Fees */}
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-xl font-semibold text-charcoal-900 mb-2">Entrance Fees</Text>
            <Text className="text-charcoal-700">Daily: ${park.entranceFee.daily}</Text>
            <Text className="text-charcoal-700">Annual: ${park.entranceFee.annual}</Text>
          </View>

          {/* Contact */}
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-xl font-semibold text-charcoal-900 mb-2">Contact</Text>
            <Text className="text-charcoal-700">{park.contact.phone}</Text>
            <Text className="text-charcoal-700">{park.contact.email}</Text>
            <Text className="text-persian-800">{park.contact.website}</Text>
          </View>

          {/* Rules */}
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-xl font-semibold text-charcoal-900 mb-2">Rules</Text>
            {park.rules.map((rule, index) => (
              <Text key={index} className="text-charcoal-700 mb-1">• {rule}</Text>
            ))}
          </View>

          {/* Seasonal Info */}
          <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <Text className="text-xl font-semibold text-charcoal-900 mb-2">Seasonal Information</Text>
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