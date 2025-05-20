import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import FavoritesList from '../../components/FavoritesList';
import { useFeaturedParks } from '../../contexts/FeaturedParksContext';
import { useParks } from '../../contexts/ParksContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Park } from '../../interfaces/Park.interface';
import { getColor } from '../../utils/colors';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { effectiveTheme } = useTheme();
  const { parks: allParks, loading: parksLoading, error: parksError } = useParks();
  const { 
    featuredParkInfos, 
    loading: featuredParksInfoLoading, 
    error: featuredParksInfoError
  } = useFeaturedParks();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredParks, setFilteredParks] = useState<Park[]>([]);

  const mergedFeaturedParks = useMemo(() => {
    if (!featuredParkInfos || !allParks) return [];
    return featuredParkInfos.map(info => {
      const parkDetails = allParks.find(p => p.id === info.id);
      if (!parkDetails) return null; 
      return {
        ...parkDetails,
        imageUrl: info.imageUrl || parkDetails.imageUrl || parkDetails.image_from_listing,
        featuredBlurb: info.featuredBlurb,
      };
    }).filter(park => park !== null) as Park[]; 
  }, [featuredParkInfos, allParks]);

  const isDropdownVisible = searchQuery.trim() !== '';

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredParks([]);
      return;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = allParks.filter((park: Park) => 
      park.name.toLowerCase().includes(lowerCaseQuery) || 
      (park.description && park.description.toLowerCase().includes(lowerCaseQuery))
    );
    setFilteredParks(results);
  }, [searchQuery, allParks]);

  const renderSearchResultItem = ({ item }: { item: Park }) => (
    <TouchableOpacity 
      className="px-4 py-3 border-b border-charcoal-200 dark:border-charcoal-700"
      onPress={() => {
        router.push(`/park/${item.id}`);
        setSearchQuery('');
      }}
    >
      <Text className="text-charcoal-800 dark:text-charcoal-100 text-base font-semibold">{item.name}</Text>
    </TouchableOpacity>
  );

  const placeholderColor = effectiveTheme === 'dark' ? getColor('charcoal-300') : getColor('charcoal-400');
  const searchIconColor = effectiveTheme === 'dark' ? getColor('charcoal-300') : getColor('charcoal-500');

  if (parksLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (parksError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error: {parksError.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
      <CustomHeader title="Family Park Finder" subtitle="Parks & campgrounds for the whole family" />

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: insets.bottom + 75 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-6">
          <View 
            className={`bg-white dark:bg-charcoal-800 p-3 shadow-lg border-l-4 border-persian-700 dark:border-persian-500 ${isDropdownVisible ? 'rounded-t-xl' : 'rounded-xl mb-6'}`}
          >
            <View className="flex-row items-center bg-charcoal-100 dark:bg-charcoal-700 rounded-lg px-3 py-2.5">
              <Ionicons name="search" size={20} color={searchIconColor} />
              <TextInput
                placeholder="Search for a park..."
                placeholderTextColor={placeholderColor}
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="flex-1 ml-2 text-charcoal-800 dark:text-charcoal-100 text-base"
              />
              {searchQuery.length > 0 && (
                <Pressable onPress={() => setSearchQuery('')} className="p-1 ml-1">
                  <Ionicons name="close-circle" size={20} color={searchIconColor} />
                </Pressable>
              )}
            </View>
          </View>

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
            <Text className="text-persian-700 dark:text-persian-400 mt-1 font-medium mb-3">Explore our most popular destinations</Text>
            {parksLoading || featuredParksInfoLoading ? (
              <ActivityIndicator size="large" color={getColor('sandy-500')} />
            ) : featuredParksInfoError ? (
              <Text className="text-red-500 text-center">Error loading featured parks info.</Text>
            ) : mergedFeaturedParks.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-4 px-4">
                {mergedFeaturedParks.map(park => (
                  <TouchableOpacity 
                    key={park.id} 
                    className="mr-4 w-64 bg-charcoal-100 dark:bg-charcoal-700 rounded-lg overflow-hidden shadow-md" 
                    onPress={() => router.push(`/park/${park.id}`)}
                  >
                    <Image source={{ uri: park.imageUrl }} className="w-full h-32" />
                    <View className="p-3">
                      <Text className="text-lg font-semibold text-charcoal-800 dark:text-charcoal-100 mb-1">{park.name}</Text>
                      {park.featuredBlurb && (
                        <Text className="text-sm text-charcoal-600 dark:text-charcoal-300" numberOfLines={5}>{park.featuredBlurb}</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : (
              <Text className="text-charcoal-600 dark:text-charcoal-400 text-center py-4">No featured parks available at the moment.</Text>
            )}
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
