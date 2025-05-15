import { Ionicons } from '@expo/vector-icons';

export interface ThemeOptionProps {
  title: string;
  currentThemeSelection: string | null | undefined;
  buttonRepresents: 'light' | 'dark' | 'system';
  onPress: () => void;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  effectiveTheme: string;
} 