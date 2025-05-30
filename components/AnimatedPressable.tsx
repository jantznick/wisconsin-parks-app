import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import { AnimatedPressableProps } from '../interfaces/AnimatedPressable.interfaces';

const AnimatedPressable: React.FC<AnimatedPressableProps> = ({
  children,
  onPressIn,
  onPressOut,
  onPress,
  scaleTo = 0.96,
  animationType = 'spring',
  duration = 50,
  springConfig = { damping: 15, stiffness: 400, mass: 0.1 },
  containerStyle,
  ...rest 
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = (event: any) => {
    if (animationType === 'spring') {
      scale.value = withSpring(scaleTo, springConfig);
    } else {
      scale.value = withTiming(scaleTo, { duration });
    }
    if (onPressIn) {
      onPressIn(event);
    }
  };

  const handlePressOut = (event: any) => {
    if (animationType === 'spring') {
      scale.value = withSpring(1, springConfig);
    } else {
      scale.value = withTiming(1, { duration });
    }
    if (onPressOut) {
      onPressOut(event);
    }
  };

  return (
    // Animated.View will apply the scale transform.
    // The actual visual styling (background, padding, border-radius from className)
    // should be on the Pressable component itself, which is passed via ...rest.
    <Animated.View style={[animatedStyle, containerStyle]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        {...rest} // className and other Pressable props are applied here
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedPressable; 