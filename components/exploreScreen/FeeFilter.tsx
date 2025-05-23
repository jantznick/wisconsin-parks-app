import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { getColor } from '../../utils/colors';

interface FeeFilterProps {
  feeFilter: 'any' | 'free' | 'paid';
  handleFeeFilterChange: (optionKey: 'any' | 'free' | 'paid') => void;
  effectiveTheme: 'light' | 'dark';
  activeFeeFilterCount: number;
  FEE_OPTIONS: Array<{key: 'any' | 'free' | 'paid', label: string}>;
}

export default function FeeFilter({
  feeFilter,
  handleFeeFilterChange,
  effectiveTheme,
  activeFeeFilterCount,
  FEE_OPTIONS
}: FeeFilterProps) {
  const [feeExpanded, setFeeExpanded] = useState(false);

  return (
    <View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500 overflow-hidden">
      <Pressable
        onPress={() => setFeeExpanded(!feeExpanded)}
        className="p-4 flex-row justify-between items-center"
      >
        <Text className="text-xl font-semibold text-persian-700 dark:text-persian-400">
          Entrance Fee {activeFeeFilterCount > 0 ? `(${activeFeeFilterCount})` : ''}
        </Text>
        <Ionicons name={feeExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'persian-300' : 'persian-700')} />
      </Pressable>
      {feeExpanded && (
        <View className="px-4 pb-4 pt-0">
          <View className="flex-row justify-around mt-1">
            {FEE_OPTIONS.map((option) => {
              const isSelected = feeFilter === option.key;
              return (
                <Pressable
                  key={option.key}
                  className={`rounded-lg px-4 py-2 shadow-sm flex-1 mx-1 items-center ${isSelected
                    ? 'bg-persian-700 dark:bg-persian-500'
                    : 'bg-sandy-100 dark:bg-charcoal-700'
                  }`}
                  onPress={() => handleFeeFilterChange(option.key as 'any' | 'free' | 'paid')}
                >
                  <Text className={`${isSelected ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'} font-medium`}>{option.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
} 