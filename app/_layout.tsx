import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import DraggableBottomSheet from '../components/DraggableBottomSheet';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import { SelectedParkProvider, useSelectedPark } from '../contexts/SelectedParkContext';

import { useColorScheme } from '@/hooks/useColorScheme';

function RootLayoutNav() {
  const { selectedPark, setSelectedPark } = useSelectedPark();

  return (
    <ThemeProvider value={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="park/[id]" 
          options={{ 
            headerShown: false,
            presentation: 'modal',
          }} 
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />

      {selectedPark && (
        <DraggableBottomSheet
          park={selectedPark}
          onClose={() => setSelectedPark(null)}
        />
      )}
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <FavoritesProvider>
      <SelectedParkProvider>
        <RootLayoutNav />
      </SelectedParkProvider>
    </FavoritesProvider>
  );
}
