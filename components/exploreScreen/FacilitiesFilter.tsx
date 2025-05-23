import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { getColor } from '../../utils/colors';

interface FacilitiesFilterProps {
  facilities: string[];
  selectedFacilities: string[];
  toggleFacility: (facility: string) => void;
  clearSelectedFacilities: () => void;
  getFacilityCount: (facility: string) => number;
  effectiveTheme: 'light' | 'dark';
  activeFacilityFiltersCount: number;
}

export default function FacilitiesFilter({
  facilities,
  selectedFacilities,
  toggleFacility,
  clearSelectedFacilities,
  getFacilityCount,
  effectiveTheme,
  activeFacilityFiltersCount,
}: FacilitiesFilterProps) {
  const [facilitiesExpanded, setFacilitiesExpanded] = useState(false);

  return (
    <View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400 overflow-hidden">
      <Pressable
        onPress={() => setFacilitiesExpanded(!facilitiesExpanded)}
        className="p-4 flex-row justify-between items-center"
      >
        <Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400">
          Facilities {activeFacilityFiltersCount > 0 ? `(${activeFacilityFiltersCount})` : ''}
        </Text>
        <View className="flex-row items-center">
          {selectedFacilities.length > 0 && facilitiesExpanded && (
            <Pressable onPress={clearSelectedFacilities} className="mr-3">
              <Text className="text-persian-800 dark:text-persian-300 font-medium text-sm">Clear</Text>
            </Pressable>
          )}
          <Ionicons name={facilitiesExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'burnt-300' : 'burnt-600')} />
        </View>
      </Pressable>
      {facilitiesExpanded && (
        <View className="px-4 pb-4 pt-0">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row py-1">
            {facilities.map((facility) => {
              const isSelected = selectedFacilities.includes(facility);
              return (
                <View
                  key={facility}
                  className={`rounded-lg px-3 py-2 mr-2 shadow-sm ${isSelected
                    ? 'bg-burnt-600 dark:bg-burnt-500'
                    : 'bg-sandy-100 dark:bg-charcoal-700'
                  }`}
                  onTouchEnd={() => toggleFacility(facility)}
                >
                  <View className="flex-row items-center">
                    <Text className={`${isSelected ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'}`}>{facility}</Text>
                    <Text className={`ml-2 text-xs ${isSelected ? 'text-burnt-100 dark:text-burnt-200' : 'text-sandy-600 dark:text-sandy-400'}`}>({getFacilityCount(facility)})</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
} 