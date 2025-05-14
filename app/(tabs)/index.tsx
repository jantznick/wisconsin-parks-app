import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader'; // Import the new header
import FavoritesList from '../../components/FavoritesList';
import { useTheme } from '../../contexts/ThemeContext';
import { PARKS } from '../../data/parks';
import tailwindConfig from '../../tailwind.config.js'; // Import Tailwind config

// Helper to get color from Tailwind config (simplified)
// In a real scenario, you might have a more robust way or directly use palette names if props allow
const getColor = (colorName: string) => {
  const [theme, shade] = colorName.split('-');
  // @ts-ignore
  return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { effectiveTheme } = useTheme(); // theme, setTheme are now in CustomHeader

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
      className="px-4 py-3 border-b border-charcoal-200 dark:border-charcoal-700"
      onPress={() => router.push(`/park/${item.id}`)}
    >
      <Text className="text-charcoal-800 dark:text-charcoal-100 text-base font-semibold">{item.name}</Text>
    </TouchableOpacity>
  );

  // Define colors based on theme for props that don't accept Tailwind classes directly
  const placeholderColor = effectiveTheme === 'dark' ? getColor('charcoal-300') : getColor('charcoal-400');
  const searchIconColor = effectiveTheme === 'dark' ? getColor('charcoal-300') : getColor('charcoal-500');
  // headerIconColor is now in CustomHeader

  return (
    <View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
      {/* Use CustomHeader */}
      <CustomHeader title="Wisconsin Parks" subtitle="Your favorite parks" />

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: insets.bottom + 75 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-6">
          {/* Search Bar Card */}
          <View 
            className={`bg-white dark:bg-charcoal-800 p-3 shadow-lg border-l-4 border-persian-700 dark:border-persian-500 ${isDropdownVisible ? 'rounded-t-xl' : 'rounded-xl mb-6'}`}
          >
            <View className="flex-row items-center bg-charcoal-100 dark:bg-charcoal-700 rounded-lg px-3 py-2.5">
              <Ionicons name="search" size={20} color={searchIconColor} /> {/* Use themed color */}
              <TextInput
                placeholder="Search for a park..."
                placeholderTextColor={placeholderColor} // Use themed color
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="flex-1 ml-2 text-charcoal-800 dark:text-charcoal-100 text-base"
              />
            </View>
          </View>

          {/* Search Results Dropdown */}
          {isDropdownVisible && (
            <View className="bg-white dark:bg-charcoal-800 rounded-b-xl shadow-md mb-6 max-h-64 overflow-hidden">
              {filteredParks.length > 0 ? (
                <FlatList
                  data={filteredParks}
                  renderItem={renderSearchResultItem}
                  keyExtractor={(item) => item.id}
                  nestedScrollEnabled
                />
              ) : (
                <Text className="p-4 text-charcoal-600 dark:text-charcoal-400 text-center">No parks found matching your search.</Text>
              )}
            </View>
          )}

          {/* Featured Section */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400">
            <Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400">Featured Parks</Text>
            <Text className="text-persian-700 dark:text-persian-400 mt-1 font-medium">Explore our most popular destinations</Text>
          </View>

          {/* Favorites Section */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-burnt-600 dark:border-burnt-400">
            <Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400 mb-4">My Favorites</Text>
            <View className="min-h-[200]">
              <FavoritesList scrollEnabled={false} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
