import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useParks } from '../contexts/ParksContext';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeOptionProps } from '../interfaces/SettingsScreen.interfaces';
import { getColor } from '../utils/colors';

// Helper function to format the timestamp
const formatLastFetchTime = (timestamp: number | null): string => {
  if (timestamp === null) {
    return 'Not updated yet';
  }
  const date = new Date(timestamp);
  return `Last updated: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const ThemeOptionButton = ({ title, currentThemeSelection, buttonRepresents, onPress, iconName, effectiveTheme }: ThemeOptionProps) => {
  const isSelected = (buttonRepresents === 'system' && currentThemeSelection === null) || 
                     (buttonRepresents !== 'system' && currentThemeSelection === buttonRepresents);
  
  const bgColor = isSelected 
    ? (effectiveTheme === 'dark' ? 'bg-persian-600' : 'bg-persian-500') 
    : (effectiveTheme === 'dark' ? 'bg-charcoal-700' : 'bg-charcoal-100');
  const textColor = isSelected 
    ? (effectiveTheme === 'dark' ? 'text-white' : 'text-white') 
    : (effectiveTheme === 'dark' ? 'text-charcoal-200' : 'text-charcoal-700');
  const iconColor = isSelected 
    ? (getColor(effectiveTheme === 'dark' ? 'persian-100' : 'persian-50')) 
    : (getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-600'));

  return (
    <TouchableOpacity 
      onPress={onPress} 
      className={`flex-row items-center p-4 rounded-lg shadow-sm mb-3 ${bgColor}`}
    >
      <Ionicons name={iconName} size={24} color={iconColor} />
      <Text className={`ml-4 text-lg font-medium ${textColor}`}>{title}</Text>
      {isSelected && (
        <Ionicons name="checkmark-circle" size={24} color={getColor(effectiveTheme === 'dark' ? 'persian-50' : 'persian-100')} className="ml-auto" />
      )}
    </TouchableOpacity>
  );
};

export default function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { theme, setTheme, effectiveTheme } = useTheme();
  const { fetchParks, lastFetch, loading: parksLoading } = useParks();

  const headerCloseIconColor = effectiveTheme === 'dark' ? getColor('persian-100') : getColor('charcoal-50');

  const handleRefreshParks = async () => {
    await fetchParks();
    // Optionally, show a toast or alert: "Parks data refresh initiated."
  };

  return (
    <View 
      className="flex-1 bg-charcoal-50 dark:bg-charcoal-950"
    >
      {/* Header */}
      <View 
        className="flex-row items-center justify-between px-4 py-3 bg-persian-800 dark:bg-charcoal-800"
        style={{ paddingTop: insets.top }}
      >
        <Text className="text-xl font-bold text-white dark:text-white">Settings</Text>
        <Pressable onPress={() => router.back()} className="p-2">
          <Ionicons name="close" size={28} color={headerCloseIconColor} />
        </Pressable>
      </View>

      {/* Content */}
      <View className="p-6">
        <Text className="text-lg font-semibold text-charcoal-800 dark:text-charcoal-200 mb-4">Appearance</Text>
        
        <ThemeOptionButton 
          title="Light Mode"
          currentThemeSelection={theme}
          buttonRepresents="light"
          onPress={() => setTheme('light')}
          iconName="sunny-outline"
          effectiveTheme={effectiveTheme}
        />
        <ThemeOptionButton 
          title="Dark Mode"
          currentThemeSelection={theme}
          buttonRepresents="dark"
          onPress={() => setTheme('dark')}
          iconName="moon-outline"
          effectiveTheme={effectiveTheme}
        />
        <ThemeOptionButton 
          title="System Default"
          currentThemeSelection={theme}
          buttonRepresents="system"
          onPress={() => setTheme('system')}
          iconName="cog-outline"
          effectiveTheme={effectiveTheme}
        />
      </View>

      {/* Data Management Section */}
      <View className="p-6 border-t border-charcoal-200 dark:border-charcoal-700 mt-4">
        <Text className="text-lg font-semibold text-charcoal-800 dark:text-charcoal-200 mb-4">Data Management</Text>
        
        <TouchableOpacity 
          onPress={handleRefreshParks}
          disabled={parksLoading}
          className={`flex-row items-center justify-center p-4 rounded-lg shadow-sm mb-3 ${parksLoading ? (effectiveTheme === 'dark' ? 'bg-charcoal-600' : 'bg-charcoal-200') : (effectiveTheme === 'dark' ? 'bg-saffron-700' : 'bg-saffron-600')}`}
        >
          {parksLoading ? (
            <ActivityIndicator size="small" color={effectiveTheme === 'dark' ? getColor('saffron-300') : getColor('saffron-800')} className="mr-2"/>
          ) : (
            <Ionicons name="refresh-circle-outline" size={28} color={effectiveTheme === 'dark' ? 'white' : 'white'} className="mr-2"/>
          )}
          <Text className={`ml-3 text-lg font-medium ${effectiveTheme === 'dark' ? 'text-white' : 'text-white'}`}>
            {parksLoading ? 'Refreshing Parks Data...' : 'Refresh Parks Data'}
          </Text>
        </TouchableOpacity>

        <Text className="text-sm text-charcoal-600 dark:text-charcoal-400 text-center mt-2">
          {formatLastFetchTime(lastFetch)}
        </Text>
      </View>

    </View>
  );
} 