import { Ionicons } from '@expo/vector-icons'; // Assuming you use Ionicons
import { BottomTabBarProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import { TabBarIconProps } from '../interfaces/CustomTabBar.interfaces';
import tailwindConfig from '../tailwind.config.js'; // Import Tailwind config

// Helper to get color from Tailwind config
const getColor = (colorName: string) => {
  // @ts-ignore
  const [theme, shade] = colorName.split('-');
  // @ts-ignore
  return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

// Helper to get tab bar icon
const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const { width } = Dimensions.get('window');
// Constants for TabBar layout
const TAB_BAR_MARGIN_HORIZONTAL = 20; // Margin on the left and right of the pill
const PILL_HORIZONTAL_PADDING = 6; // Padding inside the pill, before first and after last icon
const ICON_CONTAINER_HEIGHT = 40; // Height of the touchable area for each icon
const PILL_VERTICAL_PADDING = 6; // Padding above and below icons inside the pill
const TAB_BAR_BOTTOM_OFFSET = 8; // Space from safe area bottom to the TabBar

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const numTabs = state.routes.length;
  const { effectiveTheme } = useTheme();

  // Calculate individual tab width inside the pill
  const tabWidth = (width - (TAB_BAR_MARGIN_HORIZONTAL * 2) - (PILL_HORIZONTAL_PADDING * 2)) / numTabs;
  
  const animatedIndicatorStyle = useAnimatedStyle(() => {
    // The X position of the indicator is its index times its width, plus the initial padding within the pill.
    const targetX = (state.index * tabWidth) + PILL_HORIZONTAL_PADDING;
    return {
      transform: [{ translateX: withTiming(targetX, { duration: 250 }) }],
    };
  });

  // Total height of the pill itself
  const pillHeight = ICON_CONTAINER_HEIGHT + (PILL_VERTICAL_PADDING * 2);

  return (
    <View 
      className="absolute bg-transparent" // This view is for positioning the pill
      style={{ 
        bottom: insets.bottom + TAB_BAR_BOTTOM_OFFSET,
        left: TAB_BAR_MARGIN_HORIZONTAL, 
        right: TAB_BAR_MARGIN_HORIZONTAL,
        height: pillHeight, // Set height for the positioning container as well
      }}
    >
      <View 
        className="flex-row bg-white dark:bg-charcoal-800 rounded-full shadow-lg items-center"
        style={{
          paddingHorizontal: PILL_HORIZONTAL_PADDING,
          height: '100%', // Pill takes full height of its container
        }}
      >
        <Animated.View
          className="absolute bg-persian-800 dark:bg-persian-600 rounded-full" // This is the sliding indicator
          style={[
            animatedIndicatorStyle,
            {
              top: PILL_VERTICAL_PADDING, // Position indicator considering pill's vertical padding
              height: ICON_CONTAINER_HEIGHT, // Indicator height matches icon area
              width: tabWidth,
            },
          ] as StyleProp<ViewStyle>}
        />
        {state.routes.map((route, index: number) => {
          const { options } = descriptors[route.key] as { options: BottomTabNavigationOptions };
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params as any);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let iconName: keyof typeof Ionicons.glyphMap = 'alert-circle-outline';
          if (route.name === 'index') {
            iconName = isFocused ? 'home' : 'home-outline';
          } else if (route.name === 'explore') {
            iconName = isFocused ? 'compass' : 'compass-outline';
          }
          
          const activeColor = effectiveTheme === 'dark' ? getColor('charcoal-50') : 'white';
          const inactiveColor = effectiveTheme === 'dark' ? getColor('charcoal-400') : getColor('charcoal-600');
          const iconColor = isFocused ? activeColor : inactiveColor;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              className="flex-1 items-center justify-center"
              style={{ height: ICON_CONTAINER_HEIGHT, zIndex: 1, marginVertical: PILL_VERTICAL_PADDING }}
            >
              <TabBarIcon name={iconName} size={22} color={iconColor} /> {/* Slightly smaller icon */}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
} 