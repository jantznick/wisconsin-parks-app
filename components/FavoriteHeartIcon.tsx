import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useFavorites } from '../contexts/FavoritesContext';
import { useTheme } from '../contexts/ThemeContext';
import { FavoriteHeartIconProps } from '../interfaces/FavoriteHeartIcon.interfaces';
import { getColor } from '../utils/colors';

export default function FavoriteHeartIcon({ parkId, parkName, size = 24 }: FavoriteHeartIconProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
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
    if (favorite) {
      await removeFavorite(parkId);
    } else {
      if (parkName) {
        await addFavorite(parkId, parkName);
      } else {
        console.warn('FavoriteHeartIcon: parkName is required to add a favorite but was not provided.');
      }
    }
  };

  const iconColor = favorite
    ? getColor(effectiveTheme === 'dark' ? 'burnt-400' : 'burnt-500')
    : getColor('charcoal-50');

  return (
    <Pressable onPress={handlePress} className="p-1">
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