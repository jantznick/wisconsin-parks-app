import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FavoritesList from '../../components/FavoritesList';
import WisconsinMap from '../../components/WisconsinMap';
import { PARKS } from '../../data/parks';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="h-40 bg-charcoal-900 items-center justify-center">
        <Text className="text-3xl font-bold text-saffron-700">Wisconsin Parks</Text>
        <Text className="text-lg text-charcoal-100 mt-2">Discover Nature's Beauty</Text>
      </View>
      
      <View className="p-6">
        {/* Map Section */}
        <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <Text className="text-xl font-semibold text-charcoal-900 mb-2">Explore Parks</Text>
          <View className="h-80 rounded-xl overflow-hidden">
            <WisconsinMap parks={PARKS} />
          </View>
        </View>

        {/* Featured Section */}
        <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <Text className="text-xl font-semibold text-charcoal-900">Featured Parks</Text>
          <Text className="text-persian-800 mt-2">Explore our most popular destinations</Text>
        </View>

        {/* Favorites Section */}
        <View className="bg-white rounded-xl p-4 shadow-sm">
          <Text className="text-xl font-semibold text-charcoal-900 mb-4">My Favorites</Text>
          <View className="min-h-[200]">
            <FavoritesList />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
