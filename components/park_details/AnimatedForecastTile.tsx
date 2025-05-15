import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { AnimatedForecastTileProps } from '../../interfaces/ParkDetailsScreen.interfaces';
import { getColor } from '../../utils/colors';

const AnimatedForecastTile = ({ summary, index, onPressTile, currentTheme }: AnimatedForecastTileProps) => {
    const opacity = useSharedValue(0);
    const translateX = useSharedValue(20); // Initial offset for slide-in effect

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{ translateX: translateX.value }],
        };
    });

    useEffect(() => {
        opacity.value = withDelay(index * 120, withTiming(1, { duration: 450 }));
        translateX.value = withDelay(index * 120, withTiming(0, { duration: 450 }));
    }, [index, opacity, translateX]);

    return (
        <Animated.View style={animatedStyle}>
            <Pressable
                className="items-center bg-charcoal-50 dark:bg-charcoal-700 rounded-lg p-3 w-28 shadow active:opacity-70"
                onPress={() => onPressTile(summary.representativePeriod)}
            >
                <Text className="font-semibold text-charcoal-800 dark:text-charcoal-100 text-sm">{summary.dayName}</Text>
                <Ionicons
                    name={summary.iconName as keyof typeof Ionicons.glyphMap}
                    size={36}
                    color={getColor(currentTheme === 'dark' ? 'charcoal-200' : 'charcoal-700')}
                    style={{ marginVertical: 4 }}
                />
                <Text className="text-charcoal-900 dark:text-charcoal-50 font-bold text-base">
                    {summary.highTemp !== null ? `${summary.highTemp}°` : '--'}
                    <Text className="font-medium text-charcoal-600 dark:text-charcoal-300">{summary.lowTemp !== null ? ` / ${summary.lowTemp}°` : ' / --'}</Text>
                </Text>
            </Pressable>
        </Animated.View>
    );
};

export default AnimatedForecastTile; 