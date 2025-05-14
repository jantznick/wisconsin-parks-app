import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useFavorites } from '../contexts/FavoritesContext';
import { useTheme } from '../contexts/ThemeContext';
import tailwindConfig from '../tailwind.config.js'; // Assuming getColor might be needed or direct color values

// Helper to get color from Tailwind config (if not already universally available)
// This might be redundant if you have a global getColor, but included for component encapsulation
const getColor = (colorName: string) => {
  // @ts-ignore
  const [theme, shade] = colorName.split('-');
  // @ts-ignore
  return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

interface FavoriteHeartIconProps {
  parkId: string;
  size?: number;
  // We can add other style props if needed later
}

export default function FavoriteHeartIcon({ parkId, size = 24 }: FavoriteHeartIconProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { effectiveTheme } = useTheme();
  const favorite = isFavorite(parkId);

  const heartScale = useSharedValue(1);

  const animatedHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartScale.value }],
    };
  });

  useEffect(() => {
    heartScale.value = withSpring(favorite ? 1.25 : 1, {
      damping: 10,
      stiffness: 300,
      mass: 0.5,
    }, (finished) => {
      if (finished && favorite) {
        heartScale.value = withSpring(1);
      }
    });
  }, [favorite, heartScale]);

  const handlePress = async () => {
    await toggleFavorite(parkId);
    // Animation is handled by the useEffect watching 'favorite'
  };

  const iconColor = favorite
    ? getColor(effectiveTheme === 'dark' ? 'burnt-400' : 'burnt-500')
    : getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600');

  return (
    <Pressable onPress={handlePress} className="p-1"> {/* Added some padding for easier press */}
      <Animated.View style={[animatedHeartStyle]}>
        <Ionicons
          name={favorite ? "heart" : "heart-outline"}
          size={size}
          color={iconColor}
        />
      </Animated.View>
    </Pressable>
  );
} 