import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import DraggableBottomSheet from '../components/DraggableBottomSheet';
import { ActivitiesProvider } from '../contexts/ActivitiesContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import { ParksProvider } from '../contexts/ParksContext';
import { SelectedParkProvider, useSelectedPark } from '../contexts/SelectedParkContext';
import { ThemeProvider as CustomThemeProvider, useTheme } from '../contexts/ThemeContext';


// This component will be rendered by CustomThemeProvider, so it can use useTheme()
function AppNavigation() {
  const { effectiveTheme } = useTheme(); // Get our app's effective theme
  const { selectedPark, setSelectedPark } = useSelectedPark();

  return (
    <NavigationThemeProvider value={effectiveTheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen 
          name="park/[id]" 
          options={{ 
            headerShown: false,
            presentation: 'modal',
          }} 
        />
        <Stack.Screen 
          name="settings"
          options={{ 
            headerShown: false
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
    </NavigationThemeProvider>
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
    <ParksProvider>
      <ActivitiesProvider>
        <FavoritesProvider>
          <SelectedParkProvider>
            <CustomThemeProvider>
              <AppNavigation />
            </CustomThemeProvider>
          </SelectedParkProvider>
        </FavoritesProvider>
      </ActivitiesProvider>
    </ParksProvider>
  );
}
