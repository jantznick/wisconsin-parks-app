import { PressableProps, ViewStyle } from 'react-native';
import { withSpring } from 'react-native-reanimated';

export interface AnimatedPressableProps extends PressableProps {
  children: React.ReactNode;
  scaleTo?: number;
  animationType?: 'spring' | 'timing';
  duration?: number; // for timing animation
  springConfig?: Parameters<typeof withSpring>[1];
  // style prop for the outer Animated.View, if needed for layout, separate from Pressable's own styling
  containerStyle?: ViewStyle | ViewStyle[]; 
} 