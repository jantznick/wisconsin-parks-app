import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useFavorites } from '../contexts/FavoritesContext';
import { Park } from '../data/parks';

interface ParkDetailsSheetProps {
  park: Park;
  onClose: () => void;
}

export default function ParkDetailsSheet({ park, onClose }: ParkDetailsSheetProps) {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(park.id);

  const handleViewFullDetails = () => {
    router.push(`/park/${park.id}`);
  };

  return (
    <View className="flex-1 bg-white rounded-t-3xl">
      {/* Header */}
      <View className="p-4 border-b border-gray-200">
        <View className="flex-row justify-between items-center">
          <Pressable onPress={onClose} className="p-2">
            <Ionicons name="close" size={24} color="#264653" />
          </Pressable>
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
        <Text className="text-2xl font-bold text-charcoal-900 mt-2">{park.name}</Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        <Text className="text-base text-charcoal-700 mb-4">{park.description}</Text>

        {/* Hours */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 mb-2">Hours</Text>
          <Text className="text-charcoal-700">{park.hours.open} - {park.hours.close}</Text>
        </View>

        {/* Activities */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 mb-2">Activities</Text>
          <View className="flex-row flex-wrap gap-2">
            {park.activities.map((activity, index) => (
              <View key={index} className="bg-persian-100 px-3 py-1 rounded-full">
                <Text className="text-persian-800">{activity}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Facilities */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 mb-2">Facilities</Text>
          <View className="flex-row flex-wrap gap-2">
            {park.facilities.map((facility, index) => (
              <View key={index} className="bg-saffron-100 px-3 py-1 rounded-full">
                <Text className="text-saffron-800">{facility}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Fees */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 mb-2">Entrance Fees</Text>
          <Text className="text-charcoal-700">Daily: ${park.entranceFee.daily}</Text>
          <Text className="text-charcoal-700">Annual: ${park.entranceFee.annual}</Text>
        </View>

        {/* Contact */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 mb-2">Contact</Text>
          <Text className="text-charcoal-700">{park.contact.phone}</Text>
          <Text className="text-charcoal-700">{park.contact.email}</Text>
          <Text className="text-persian-800">{park.contact.website}</Text>
        </View>

        {/* Rules */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 mb-2">Rules</Text>
          {park.rules.map((rule, index) => (
            <Text key={index} className="text-charcoal-700 mb-1">• {rule}</Text>
          ))}
        </View>

        {/* Seasonal Info */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 mb-2">Seasonal Information</Text>
          <Text className="text-charcoal-700">Best Time to Visit: {park.seasonalInfo.bestTimeToVisit}</Text>
          {park.seasonalInfo.seasonalClosures.map((closure, index) => (
            <Text key={index} className="text-charcoal-700">• {closure}</Text>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="p-4 border-t border-gray-200">
        <Pressable
          onPress={handleViewFullDetails}
          className="bg-persian-800 py-3 rounded-xl"
        >
          <Text className="text-white text-center font-semibold">View Full Details</Text>
        </Pressable>
      </View>
    </View>
  );
} 