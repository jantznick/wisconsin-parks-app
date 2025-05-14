import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavoritesList from '../../components/FavoritesList';
import { PARKS } from '../../data/parks';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredParks, setFilteredParks] = useState<typeof PARKS>([]);

  const isDropdownVisible = searchQuery.trim() !== '';

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredParks([]);
      return;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = PARKS.filter(park => 
      park.name.toLowerCase().includes(lowerCaseQuery) || 
      (park.description && park.description.toLowerCase().includes(lowerCaseQuery))
    );
    setFilteredParks(results);
  }, [searchQuery]);

  const renderSearchResultItem = ({ item }: { item: typeof PARKS[0] }) => (
    <TouchableOpacity 
      className="px-4 py-3 border-b border-charcoal-200"
      onPress={() => router.push(`/park/${item.id}`)}
    >
      <Text className="text-charcoal-800 text-base font-semibold">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-charcoal-50">
      {/* Sticky Header */}
      <View className="bg-persian-800 px-6 pb-3" style={{ paddingTop: insets.top + 8 }}>
        <Text className="text-2xl font-bold text-white">Wisconsin Parks</Text>
        <Text className="text-base text-persian-200">Your favorite parks</Text>
      </View>

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: insets.bottom + 75 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-6">
          {/* Search Bar Card */}
          <View 
            className={`bg-white p-3 shadow-lg border-l-4 border-persian-700 ${isDropdownVisible ? 'rounded-t-xl' : 'rounded-xl mb-6'}`}
          >
            <View className="flex-row items-center bg-charcoal-100 rounded-lg px-3 py-2.5">
              <Ionicons name="search" size={20} color="#7D96A5" />
              <TextInput
                placeholder="Search for a park..."
                placeholderTextColor="#97ABB7"
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="flex-1 ml-2 text-charcoal-800 text-base"
              />
            </View>
          </View>

          {/* Search Results Dropdown */}
          {isDropdownVisible && (
            <View className="bg-white rounded-b-xl shadow-md mb-6 max-h-64 overflow-hidden">
              {filteredParks.length > 0 ? (
                <FlatList
                  data={filteredParks}
                  renderItem={renderSearchResultItem}
                  keyExtractor={(item) => item.id}
                  nestedScrollEnabled
                />
              ) : (
                <Text className="p-4 text-charcoal-600 text-center">No parks found matching your search.</Text>
              )}
            </View>
          )}

          {/* Featured Section */}
          <View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600">
            <Text className="text-xl font-semibold text-sandy-600">Featured Parks</Text>
            <Text className="text-persian-700 mt-1 font-medium">Explore our most popular destinations</Text>
          </View>

          {/* Favorites Section */}
          <View className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-burnt-600">
            <Text className="text-xl font-semibold text-burnt-600 mb-4">My Favorites</Text>
            <View className="min-h-[200]">
              <FavoritesList />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
