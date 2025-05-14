import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavoritesList from '../../components/FavoritesList';
import WisconsinMap from '../../components/WisconsinMap';
import { PARKS } from '../../data/parks';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-charcoal-50">
      {/* Sticky Header */}
      <View className="bg-persian-800 px-6" style={{ paddingTop: insets.top + 16 }}>
        <Text className="text-2xl font-bold text-white">Wisconsin Parks</Text>
        <Text className="text-base text-persian-100">Your favorite parks</Text>
      </View>

      <ScrollView className="flex-1">
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
    </View>
  );
}
