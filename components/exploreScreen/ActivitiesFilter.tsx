import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Activity } from '../../interfaces/Activity.interface'; // Assuming this interface exists
import { getActivityName } from '../../utils/activities'; // Assuming this utility is correctly pathed
import { getColor } from '../../utils/colors';

interface ActivitiesFilterProps {
  activities: Activity[]; // Replace 'any' with your Activity type/interface if available
  allActivityIds: number[];
  selectedCategories: number[];
  toggleCategory: (category: number) => void;
  clearSelectedCategories: () => void;
  getCategoryCount: (category: number) => number;
  effectiveTheme: 'light' | 'dark';
  activeCategoryFiltersCount: number;
}

export default function ActivitiesFilter({
  activities,
  allActivityIds,
  selectedCategories,
  toggleCategory,
  clearSelectedCategories,
  getCategoryCount,
  effectiveTheme,
  activeCategoryFiltersCount,
}: ActivitiesFilterProps) {
  const [activitiesExpanded, setActivitiesExpanded] = useState(false);
  const [showAllActivitiesButton, setShowAllActivitiesButton] = useState(false);

  return (
    <View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-saffron-700 dark:border-saffron-400 overflow-hidden">
      <Pressable
        onPress={() => setActivitiesExpanded(!activitiesExpanded)}
        className="p-4 flex-row justify-between items-center"
      >
        <Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400">
          Activities {activeCategoryFiltersCount > 0 ? `(${activeCategoryFiltersCount})` : ''}
        </Text>
        <View className="flex-row items-center">
          {selectedCategories.length > 0 && activitiesExpanded && (
            <Pressable onPress={clearSelectedCategories} className="mr-3">
              <Text className="text-persian-800 dark:text-persian-300 font-medium text-sm">Clear</Text>
            </Pressable>
          )}
          <Ionicons name={activitiesExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'saffron-300' : 'saffron-700')} />
        </View>
      </Pressable>
      {activitiesExpanded && (
        <View className="px-4 pb-4 pt-0">
          {showAllActivitiesButton ? (
            <View className="flex-row flex-wrap py-1">
              {allActivityIds.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <View
                    key={category}
                    className={`rounded-lg px-3 py-2 mr-2 mb-2 shadow-sm ${isSelected
                      ? 'bg-saffron-700 dark:bg-saffron-500'
                      : 'bg-sandy-100 dark:bg-charcoal-700'
                    }`}
                    onTouchEnd={() => toggleCategory(category)}
                  >
                    <View className="flex-row items-center">
                      <Text
                        className={`${isSelected
                          ? 'text-white dark:text-white'
                          : 'text-sandy-700 dark:text-sandy-300'
                        }`}
                      >
                        {getActivityName(category, activities)}
                      </Text>
                      <Text
                        className={`ml-2 text-xs ${isSelected
                          ? 'text-saffron-100 dark:text-saffron-200'
                          : 'text-sandy-600 dark:text-sandy-400'
                        }`}
                      >
                        ({getCategoryCount(category)})
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row py-1"
            >
              {allActivityIds.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <View
                    key={category}
                    className={`rounded-lg px-3 py-2 mr-2 shadow-sm ${isSelected
                      ? 'bg-saffron-700 dark:bg-saffron-500'
                      : 'bg-sandy-100 dark:bg-charcoal-700'
                    }`}
                    onTouchEnd={() => toggleCategory(category)}
                  >
                    <View className="flex-row items-center">
                      <Text
                        className={`${isSelected
                          ? 'text-white dark:text-white'
                          : 'text-sandy-700 dark:text-sandy-300'
                        }`}
                      >
                        {getActivityName(category, activities)}
                      </Text>
                      <Text
                        className={`ml-2 text-xs ${isSelected
                          ? 'text-saffron-100 dark:text-saffron-200'
                          : 'text-sandy-600 dark:text-sandy-400'
                        }`}
                      >
                        ({getCategoryCount(category)})
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
          {/* Toggle button for showing all activities */}
          {allActivityIds.length > 5 && ( // Only show if there are enough items to warrant expanding
            <Pressable
              onPress={() => setShowAllActivitiesButton(!showAllActivitiesButton)}
              className="py-2 mt-2 flex-row items-center justify-center"
            >
              <Ionicons
                name={showAllActivitiesButton ? "chevron-up" : "chevron-down"}
                size={18}
                color={getColor(effectiveTheme === 'dark' ? 'saffron-300' : 'saffron-700')} />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
} 