import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { Park } from '../data/parks';
import ParkDetailsSheet from './ParkDetailsSheet';

const SHEET_HEIGHT = 400;
const MIN_SHEET_HEIGHT = 200;
const MAX_SHEET_HEIGHT = 600;

interface DraggableBottomSheetProps {
  park: Park;
  onClose: () => void;
}

export default function DraggableBottomSheet({ park, onClose }: DraggableBottomSheetProps) {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      // Calculate new height based on drag
      const newHeight = context.value.y + event.translationY;
      
      // Constrain the height between MIN and MAX
      if (newHeight > -MAX_SHEET_HEIGHT && newHeight < -MIN_SHEET_HEIGHT) {
        translateY.value = newHeight;
      }
    })
    .onEnd(() => {
      // Snap to either MIN or MAX height
      if (translateY.value < -(MIN_SHEET_HEIGHT + MAX_SHEET_HEIGHT) / 2) {
        translateY.value = withSpring(-MAX_SHEET_HEIGHT);
      } else {
        translateY.value = withSpring(-MIN_SHEET_HEIGHT);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      height: interpolate(
        -translateY.value,
        [MIN_SHEET_HEIGHT, MAX_SHEET_HEIGHT],
        [MIN_SHEET_HEIGHT, MAX_SHEET_HEIGHT],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            styles.container,
            animatedStyle,
          ]}
        >
          <View style={styles.handle} />
          <ParkDetailsSheet park={park} onClose={onClose} />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
}); 