import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

type Theme = 'light' | 'dark' | 'system';
type EffectiveTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  effectiveTheme: EffectiveTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = '@app-theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemAppearanceScheme = useSystemColorScheme(); 
  const { colorScheme: nativeWindColorScheme, setColorScheme: setNativeWindColorScheme } = useNativeWindColorScheme();

  const [theme, setThemeState] = useState<Theme>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<EffectiveTheme>(systemAppearanceScheme || 'light');

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
        if (savedTheme) {
          setThemeState(savedTheme);
        } else {
          setThemeState('system');
        }
      } catch (error) {
        console.error('Failed to load theme from storage', error);
        setThemeState('system');
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    let currentEffectiveTheme: EffectiveTheme;
    if (theme === 'system') {
      currentEffectiveTheme = systemAppearanceScheme || 'light';
    } else {
      currentEffectiveTheme = theme;
    }
    setEffectiveTheme(currentEffectiveTheme);

    // Sync with NativeWind if its internal state differs
    if (nativeWindColorScheme !== currentEffectiveTheme) {
      setNativeWindColorScheme(currentEffectiveTheme);
    }
  }, [theme, systemAppearanceScheme, nativeWindColorScheme, setNativeWindColorScheme]);

  const handleSetTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Failed to save theme to storage', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 