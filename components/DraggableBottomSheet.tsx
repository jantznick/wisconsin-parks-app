import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from 'react-native-reanimated';
import { useTheme } from '../contexts/ThemeContext';
import { DraggableBottomSheetProps } from '../interfaces/DraggableBottomSheet.interfaces';
import { getColor } from '../utils/colors';
import ParkDetailsSheet from './ParkDetailsSheet';

const MIN_SHEET_HEIGHT = 200;
const INITIAL_SHEET_HEIGHT = 400;
const MAX_SHEET_HEIGHT = 700;

export default function DraggableBottomSheet({ park, onClose }: DraggableBottomSheetProps) {
  const height = useSharedValue(INITIAL_SHEET_HEIGHT);
  const context = useSharedValue({ height: MIN_SHEET_HEIGHT });
  const { effectiveTheme } = useTheme();

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { height: height.value };
    })
    .onUpdate((event) => {
      // Calculate new height based on drag
      const newHeight = context.value.height - event.translationY;
      
      // Constrain the height between MIN and MAX
      if (newHeight >= MIN_SHEET_HEIGHT && newHeight <= MAX_SHEET_HEIGHT) {
        height.value = newHeight;
      }
    })
    .onEnd(() => {
      // Snap to either MIN or MAX height
      if (height.value > (MIN_SHEET_HEIGHT + MAX_SHEET_HEIGHT) / 2) {
        height.value = withSpring(MAX_SHEET_HEIGHT);
      } else {
        height.value = withSpring(MIN_SHEET_HEIGHT);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  // Define styles dynamically based on theme
  const themedStyles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: effectiveTheme === 'dark' ? getColor('charcoal-800') : 'white',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      shadowColor: effectiveTheme === 'dark' ? getColor('charcoal-50') : '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: effectiveTheme === 'dark' ? 0.3 : 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    handle: {
      width: 40,
      height: 4,
      backgroundColor: effectiveTheme === 'dark' ? getColor('charcoal-600') : '#E5E5E5',
      borderRadius: 2,
      alignSelf: 'center',
      marginTop: 8,
      marginBottom: 8,
    },
  });

  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            themedStyles.container,
            animatedStyle,
          ]}
        >
          <View style={themedStyles.handle} />
          <ParkDetailsSheet park={park} onClose={onClose} />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
} 