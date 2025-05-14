import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../contexts/ThemeContext';
import tailwindConfig from '../tailwind.config.js';

// Helper to get color from Tailwind config
const getColor = (colorName: string) => {
  const [theme, shade] = colorName.split('-');
  // @ts-ignore
  return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

interface CustomHeaderProps {
  title: string;
  subtitle: string;
}

export default function CustomHeader({ title, subtitle }: CustomHeaderProps) {
  const insets = useSafeAreaInsets();
  const { theme, setTheme, effectiveTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const headerIconColor = effectiveTheme === 'dark' ? getColor('persian-100') : getColor('charcoal-50');

  return (
    <View 
      className="bg-persian-800 dark:bg-charcoal-800 px-6 pb-3" 
      style={{ paddingTop: insets.top + 8 }}
    >
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-2xl font-bold text-white dark:text-white">{title}</Text>
          <Text className="text-base text-persian-200 dark:text-charcoal-300">{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={toggleTheme} className="p-2">
          <Ionicons 
            name={theme === 'system' ? 'cog-outline' : (effectiveTheme === 'dark' ? 'moon' : 'sunny')} 
            size={24} 
            color={headerIconColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
} 