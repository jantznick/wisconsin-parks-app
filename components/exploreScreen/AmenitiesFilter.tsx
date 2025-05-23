import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { getColor } from '../../utils/colors';

interface AmenitiesFilterProps {
  dogFriendlyOnly: boolean;
  setDogFriendlyOnly: (value: boolean) => void;
  accessibleOnly: boolean;
  setAccessibleOnly: (value: boolean) => void;
  effectiveTheme: 'light' | 'dark';
  activeAmenityFiltersCount: number;
  featureFlags: any; // Consider defining a more specific type for featureFlags
}

export default function AmenitiesFilter({
  dogFriendlyOnly,
  setDogFriendlyOnly,
  accessibleOnly,
  setAccessibleOnly,
  effectiveTheme,
  activeAmenityFiltersCount,
  featureFlags,
}: AmenitiesFilterProps) {
  const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);

  return (
    <View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400 overflow-hidden">
      <Pressable
        onPress={() => setAmenitiesExpanded(!amenitiesExpanded)}
        className="p-4 flex-row justify-between items-center"
      >
        <Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400">
          Other Amenities {activeAmenityFiltersCount > 0 ? `(${activeAmenityFiltersCount})` : ''}
        </Text>
        <Ionicons name={amenitiesExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'sandy-300' : 'sandy-600')} />
      </Pressable>
      {amenitiesExpanded && (
        <View className="px-4 pb-4 pt-2">
          <View className="flex-col space-y-3">
            {/* Dog Friendly Toggle */}
            {featureFlags?.explorePage?.filterBy?.other?.dogFriendly && (
              <Pressable
                className={`flex-row items-center justify-between p-3 rounded-lg shadow-sm ${dogFriendlyOnly ? 'bg-sandy-600 dark:bg-sandy-500' : 'bg-sandy-100 dark:bg-charcoal-700'}`}
                onPress={() => setDogFriendlyOnly(!dogFriendlyOnly)}
              >
                <View className="flex-row items-center">
                  <Ionicons name="paw" size={22} color={dogFriendlyOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-300' : 'sandy-700')} />
                  <Text className={`ml-3 text-base font-medium ${dogFriendlyOnly ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'}`}>Dog Friendly</Text>
                </View>
                <Ionicons name={dogFriendlyOnly ? "checkbox" : "square-outline"} size={24} color={dogFriendlyOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-400' : 'sandy-600')} />
              </Pressable>
            )}

            {/* Accessible Toggle */}
            {featureFlags?.explorePage?.filterBy?.other?.accessible && (
              <Pressable
                className={`flex-row items-center justify-between p-3 rounded-lg shadow-sm ${accessibleOnly ? 'bg-sandy-600 dark:bg-sandy-500' : 'bg-sandy-100 dark:bg-charcoal-700'}`}
                onPress={() => setAccessibleOnly(!accessibleOnly)}
              >
                <View className="flex-row items-center">
                  <Ionicons name="accessibility" size={22} color={accessibleOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-300' : 'sandy-700')} />
                  <Text className={`ml-3 text-base font-medium ${accessibleOnly ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'}`}>Accessible</Text>
                </View>
                <Ionicons name={accessibleOnly ? "checkbox" : "square-outline"} size={24} color={accessibleOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-400' : 'sandy-600')} />
              </Pressable>
            )}
          </View>
        </View>
      )}
    </View>
  );
} 