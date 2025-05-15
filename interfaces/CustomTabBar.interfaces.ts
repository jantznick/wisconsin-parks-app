import { Ionicons } from '@expo/vector-icons';

export interface TabBarIconProps {
  name: keyof typeof Ionicons.glyphMap; // More specific type for icon names
  color: string;
  size: number;
} 