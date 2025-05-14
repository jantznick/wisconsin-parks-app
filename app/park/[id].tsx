import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Linking, Modal, Pressable, ScrollView, Share, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFavorites } from '../../contexts/FavoritesContext';
import { useTheme } from '../../contexts/ThemeContext';
import { PARKS } from '../../data/parks';
import tailwindConfig from '../../tailwind.config.js';

// Helper to get color from Tailwind config
const getColor = (colorName: string) => {
  const [theme, shade] = colorName.split('-');
  // @ts-ignore
  return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

// Define an interface for a single forecast period from the NWS API
interface ForecastPeriod {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: string | null;
  probabilityOfPrecipitation: {
    unitCode: string;
    value: number | null;
  } | null;
  dewpoint: {
    unitCode: string;
    value: number | null;
  } | null;
  relativeHumidity: {
    unitCode: string;
    value: number | null;
  } | null;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

// Interface for the summarized daily forecast
interface DailyForecastSummary {
  dayName: string;
  date: Date;
  highTemp: number | null;
  lowTemp: number | null;
  iconName: string;
  representativePeriod: ForecastPeriod;
}

// Helper function to get day abbreviation
const getDayAbbreviation = (date: Date): string => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  
  return date.toLocaleDateString(undefined, { weekday: 'short' }); // e.g., "Mon"
};

// Helper function to get a basic weather icon name from short forecast string
const getBasicWeatherIconName = (shortForecast: string): string => {
  const forecast = shortForecast.toLowerCase();
  if (forecast.includes('sunny') || forecast.includes('clear')) return 'sunny-outline';
  if (forecast.includes('partly cloudy') || forecast.includes('mostly sunny')) return 'partly-sunny-outline';
  if (forecast.includes('cloudy') || forecast.includes('overcast')) return 'cloud-outline';
  if (forecast.includes('rain') || forecast.includes('showers')) return 'rainy-outline';
  if (forecast.includes('snow') || forecast.includes('flurries')) return 'snow-outline';
  if (forecast.includes('thunderstorm') || forecast.includes('t-storms')) return 'thunderstorm-outline';
  if (forecast.includes('windy') || forecast.includes('breezy')) return 'flag-outline'; // Using flag for wind as a general icon
  if (forecast.includes('fog')) return 'menu-outline'; // No direct fog icon, using menu as placeholder for low visibility
  return 'ellipse-outline'; // Default icon
};

export default function ParkDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const mapRef = useRef<MapView>(null);
  const insets = useSafeAreaInsets();
  const { effectiveTheme } = useTheme();

  const park = PARKS.find(p => p.id === id);

  // Weather state
  const [weatherForecast, setWeatherForecast] = useState<ForecastPeriod | null>(null);
  const [loadingWeather, setLoadingWeather] = useState<boolean>(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);
  const [dailySummaries, setDailySummaries] = useState<DailyForecastSummary[]>([]); // State for multi-day forecast

  // State for forecast details modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDetailedForecast, setSelectedDetailedForecast] = useState<ForecastPeriod | null>(null);

  useEffect(() => {
    if (park) {
      const fetchWeather = async () => {
        setLoadingWeather(true);
        setWeatherError(null);
        setWeatherForecast(null);
        setDailySummaries([]);
        try {
          // 1. Get the points URL
          const pointsResponse = await fetch(
            `https://api.weather.gov/points/${park.coordinate.latitude},${park.coordinate.longitude}`
          );
          if (!pointsResponse.ok) {
            // Try to get a more detailed error message from the API if available
            let errorDetail = `HTTP error ${pointsResponse.status}`;
            try {
                const errorData = await pointsResponse.json();
                if (errorData && errorData.detail) {
                    errorDetail = errorData.detail;
                }
            } catch (e) { /* Ignore if parsing errorData fails */ }
            throw new Error(`Failed to fetch grid points: ${errorDetail}`);
          }
          const pointsData = await pointsResponse.json();
          const forecastUrl = pointsData.properties?.forecast;

          if (!forecastUrl) {
            throw new Error("Forecast URL not found in points response.");
          }

          // 2. Get the forecast from the forecast URL
          const forecastResponse = await fetch(forecastUrl);
          if (!forecastResponse.ok) {
            let errorDetail = `HTTP error ${forecastResponse.status}`;
            try {
                const errorData = await forecastResponse.json();
                if (errorData && errorData.detail) {
                    errorDetail = errorData.detail;
                }
            } catch (e) { /* Ignore */ }
            throw new Error(`Failed to fetch forecast: ${errorDetail}`);
          }
          const forecastData = await forecastResponse.json();
          
          // Assuming we want the first forecast period (e.g., current or next few hours)
          if (forecastData.properties?.periods && forecastData.properties.periods.length > 0) {
            setWeatherForecast(forecastData.properties.periods[0]);

            // Process for multi-day forecast
            const periods: ForecastPeriod[] = forecastData.properties.periods;
            const dailyDataHelper: { 
              [key: string]: { 
                dateObj: Date, 
                dayPeriods: ForecastPeriod[], 
                nightPeriods: ForecastPeriod[],
                allPeriods: ForecastPeriod[] // To capture all temps for a day if needed
              } 
            } = {};

            periods.forEach((period) => {
              const dateKey = new Date(period.startTime).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
              if (!dailyDataHelper[dateKey]) {
                dailyDataHelper[dateKey] = { 
                  dateObj: new Date(period.startTime), 
                  dayPeriods: [], 
                  nightPeriods: [],
                  allPeriods: []
                };
              }
              dailyDataHelper[dateKey].allPeriods.push(period);
              if (period.isDaytime) {
                dailyDataHelper[dateKey].dayPeriods.push(period);
              } else {
                dailyDataHelper[dateKey].nightPeriods.push(period);
              }
            });

            const summaries: DailyForecastSummary[] = Object.keys(dailyDataHelper)
              .sort((a, b) => dailyDataHelper[a].dateObj.getTime() - dailyDataHelper[b].dateObj.getTime())
              .map(dateKey => {
                const dayInfo = dailyDataHelper[dateKey];
                let highTemp: number | null = null;
                let lowTemp: number | null = null;
                let iconName = '';
                let representativePeriodForModal: ForecastPeriod | null = null;

                // Prioritize daytime period for icon and primary forecast
                if (dayInfo.dayPeriods.length > 0) {
                  const primaryDayPeriod = dayInfo.dayPeriods[0]; // Use the first daytime period
                  highTemp = primaryDayPeriod.temperature;
                  representativePeriodForModal = primaryDayPeriod;

                  // Check if this daytime period's temperature is indeed the max for the day periods
                  dayInfo.dayPeriods.forEach(p => {
                    if (p.temperature > (highTemp ?? -Infinity)) highTemp = p.temperature;
                  });

                } else if (dayInfo.allPeriods.length > 0) { 
                  // If no explicit daytime period (e.g. forecast starts at night), use first available period for icon/forecast
                  const firstPeriod = dayInfo.allPeriods[0];
                  representativePeriodForModal = firstPeriod;
                }
                
                // Determine High from all periods of the day
                if (dayInfo.allPeriods.length > 0) {
                    const temps = dayInfo.allPeriods.map(p => p.temperature);
                    highTemp = Math.max(...temps);
                }


                // Determine Low: usually from night periods, or min of all periods for the day
                if (dayInfo.nightPeriods.length > 0) {
                  lowTemp = dayInfo.nightPeriods[0].temperature; // Use first night period's temp
                   dayInfo.nightPeriods.forEach(p => {
                    if (p.temperature < (lowTemp ?? Infinity)) lowTemp = p.temperature;
                  });
                }
                
                // If no night period, but day periods exist, low might be from a daytime period if it's lower
                // Or, if no night period, find min of all periods for that day.
                if (lowTemp === null && dayInfo.allPeriods.length > 0) {
                    const temps = dayInfo.allPeriods.map(p => p.temperature);
                    lowTemp = Math.min(...temps);
                }


                // Ensure we have at least an icon and forecast if possible
                if (!representativePeriodForModal && dayInfo.allPeriods.length > 0) {
                    representativePeriodForModal = dayInfo.allPeriods[0];
                }
                
                // If after all this, high is still null but low is not, high might be same as low (e.g. stable temp)
                if (highTemp === null && lowTemp !== null) highTemp = lowTemp;
                // If low is still null but high is not, low might be same as high
                if (lowTemp === null && highTemp !== null) lowTemp = highTemp;


                if (representativePeriodForModal) { // Only create summary if we have a representative period
                    return {
                        dayName: getDayAbbreviation(dayInfo.dateObj),
                        date: dayInfo.dateObj,
                        highTemp: highTemp,
                        lowTemp: lowTemp,
                        iconName: getBasicWeatherIconName(representativePeriodForModal.shortForecast),
                        representativePeriod: representativePeriodForModal,
                    };
                }
                return null;
              })
              .filter(summary => summary !== null) as DailyForecastSummary[];
            
            setDailySummaries(summaries.slice(0, 5)); // Limit to 5 days

          } else {
            throw new Error("No forecast periods found.");
          }
        } catch (error: any) {
          console.error("Weather fetch error:", error);
          setWeatherError(error.message || "An unknown error occurred while fetching weather.");
        } finally {
          setLoadingWeather(false);
        }
      };

      fetchWeather();
    }
  }, [park]); // Re-run if park changes

  // Handler to open the forecast modal
  const handleOpenForecastModal = (period: ForecastPeriod) => {
    setSelectedDetailedForecast(period);
    setModalVisible(true);
  };

  if (!park) {
    return (
      <View className="flex-1 items-center justify-center bg-charcoal-50 dark:bg-charcoal-950">
        <Text className="text-xl text-charcoal-900 dark:text-charcoal-100">Park not found</Text>
      </View>
    );
  }

  const favorite = isFavorite(park.id);

  const handleShare = async () => {
    if (!park) return;
    try {
      await Share.share({
        message: `Check out ${park.name}! Find out more here: ${park.contact.website}`,
        title: `Share ${park.name}`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const initialRegion = {
    latitude: park.coordinate.latitude,
    longitude: park.coordinate.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${park.coordinate.latitude},${park.coordinate.longitude}&travelmode=driving`;
    Linking.openURL(url);
  };

  // Define colors for props not directly stylable with Tailwind dark: prefix
  const favoriteIconColor = favorite 
    ? getColor(effectiveTheme === 'dark' ? 'burnt-400' : 'burnt-600') 
    : getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600');
  const shareIconColor = getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-600');
  
  const mapMarkerBorderColor = effectiveTheme === 'dark' ? getColor('saffron-400') : getColor('saffron-600');
  // Directions button might need specific color if not using Tailwind classes for all states

  return (
    <View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
      {/* Header */}
      <View className="bg-persian-800 dark:bg-charcoal-800 px-6 pb-3" style={{ paddingTop: insets.top + 8 }}>
        <View className="absolute left-4" style={{ top: insets.top + 8}}>
          <Pressable onPress={() => router.back()} className="p-2">
            <Ionicons name="arrow-back" size={24} color={getColor(effectiveTheme === 'dark' ? 'persian-100' : 'charcoal-50')} />
          </Pressable>
        </View>
        <View className="items-center justify-center">
          <Text className="text-2xl font-bold text-white dark:text-white">{park.name}</Text>
          <Text className="text-base text-persian-200 dark:text-charcoal-300 mt-1">State Park</Text>
        </View>
      </View>

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        {/* Map Panel */}
        <View className="p-6 pb-0">
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-saffron-700 dark:border-saffron-400">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400">Location</Text>
              <Pressable
                onPress={openDirections}
                className="bg-saffron-700 dark:bg-saffron-500 px-3 py-2 rounded-lg flex-row items-center shadow-sm"
              >
                <Ionicons name="navigate" size={16} color="white" /> 
                <Text className="text-white dark:text-saffron-100 font-medium ml-2 text-sm">Directions</Text>
              </Pressable>
            </View>
            <View className="h-48 rounded-md overflow-hidden">
              <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                showsUserLocation
                showsCompass
                showsScale
                showsMyLocationButton
                // mapStyle prop can be used for dark mode Google Maps if needed
              >
                <Marker coordinate={park.coordinate} title={park.name}>
                  <View className="bg-white dark:bg-charcoal-800 p-2 rounded-full border-2 shadow-md" style={{ borderColor: mapMarkerBorderColor }}>
                    <Text className="text-xl">🌲</Text>{/* Emoji, color won't change with theme */}
                  </View>
                </Marker>
              </MapView>
            </View>
          </View>
        </View>

        {/* Weather Section */}
        <View className="p-6">
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-blue-500 dark:border-blue-400">
            <Text className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Current Weather</Text>
            {loadingWeather && (
              <View className="flex-row items-center justify-center py-4">
                <ActivityIndicator size="large" color={getColor(effectiveTheme === 'dark' ? 'blue-400' : 'blue-600')} />
                <Text className="ml-2 text-charcoal-700 dark:text-charcoal-300">Loading weather...</Text>
              </View>
            )}
            {weatherError && (
              <View className="py-4 items-center">
                <Ionicons name="alert-circle-outline" size={30} color={getColor(effectiveTheme === 'dark' ? 'red-400' : 'red-600')} />
                <Text className="text-red-600 dark:text-red-400 mt-2 text-center">Error: {weatherError}</Text>
                <Text className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1 text-center">
                  The weather service might be temporarily unavailable or the location data is invalid.
                </Text>
              </View>
            )}
            {!loadingWeather && weatherForecast && (
              <View>
                <View className="flex-row items-center mb-2">
                  {/* We might need a way to map weatherForecast.icon to an actual image or icon component */}
                  {/* For now, just text. Consider using an Image component if you have weather icons */}
                  {/* <Image source={{ uri: weatherForecast.icon }} className="w-12 h-12 mr-3" /> */}
                  <Text className="text-4xl font-bold text-charcoal-900 dark:text-charcoal-100">
                    {weatherForecast.temperature}°{weatherForecast.temperatureUnit}
                  </Text>
                  <View className="ml-3 flex-1">
                    <Text className="text-lg font-medium text-charcoal-800 dark:text-charcoal-200">{weatherForecast.shortForecast}</Text>
                    <Text className="text-sm text-charcoal-600 dark:text-charcoal-400">
                      Wind: {weatherForecast.windSpeed} {weatherForecast.windDirection}
                    </Text>
                  </View>
                </View>
                <Text className="text-sm text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
                  {weatherForecast.detailedForecast}
                </Text>
                 {/* Display more details if needed, e.g., precipitation */}
                 {weatherForecast.probabilityOfPrecipitation && weatherForecast.probabilityOfPrecipitation.value !== null && (
                    <Text className="text-sm text-charcoal-600 dark:text-charcoal-400 mt-1">
                        Precipitation: {weatherForecast.probabilityOfPrecipitation.value}%
                    </Text>
                )}
              </View>
            )}
            {!loadingWeather && !weatherForecast && !weatherError && (
                <Text className="text-charcoal-700 dark:text-charcoal-300 py-4 text-center">Weather data not available.</Text>
            )}
          </View>
        </View>

        {/* Extended Forecast Section */}
        {dailySummaries.length > 0 && (
          <View className="p-6 pt-0 pb-0">
            <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-emerald-500 dark:border-emerald-400">
              <Text className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Upcoming Forecast</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-2">
                {dailySummaries.map((summary, index) => (
                  <Pressable
                    key={index} 
                    className="items-center bg-charcoal-50 dark:bg-charcoal-700 rounded-lg p-3 mx-2 w-28 shadow active:opacity-70"
                    onPress={() => handleOpenForecastModal(summary.representativePeriod)}
                  >
                    <Text className="font-semibold text-charcoal-800 dark:text-charcoal-100 text-sm">{summary.dayName}</Text>
                    <Ionicons 
                      name={summary.iconName as any}
                      size={36}
                      color={getColor(effectiveTheme === 'dark' ? 'charcoal-200' : 'charcoal-700')}
                      style={{ marginVertical: 4 }}
                    />
                    <Text className="text-charcoal-900 dark:text-charcoal-50 font-bold text-base">
                      {summary.highTemp !== null ? `${summary.highTemp}°` : '--'}
                      <Text className="font-medium text-charcoal-600 dark:text-charcoal-300">{summary.lowTemp !== null ? ` / ${summary.lowTemp}°` : ' / --'}</Text>
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </View>
        )}

        {/* Detailed Forecast Modal */}
        {selectedDetailedForecast && (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
              setSelectedDetailedForecast(null);
            }}
          >
            <View className="flex-1 justify-center items-center bg-black/50 p-4">
              <View className="bg-white dark:bg-charcoal-800 rounded-xl p-5 shadow-xl w-full max-w-md">
                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-xl font-bold text-charcoal-900 dark:text-charcoal-100 flex-1 mr-2" numberOfLines={1}>{selectedDetailedForecast.name}</Text>
                  <Pressable onPress={() => { setModalVisible(false); setSelectedDetailedForecast(null); }} className="p-1">
                    <Ionicons name="close-circle" size={28} color={getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600')} />
                  </Pressable>
                </View>

                <ScrollView style={{ maxHeight: '70%' }}>{/* ScrollView for modal content */}
                  <View className="items-center mb-3">
                    <Ionicons 
                      name={getBasicWeatherIconName(selectedDetailedForecast.shortForecast) as any}
                      size={60}
                      color={getColor(effectiveTheme === 'dark' ? 'persian-300' : 'persian-600')}
                    />
                    <Text className="text-3xl font-bold text-charcoal-900 dark:text-charcoal-100 mt-2">
                      {selectedDetailedForecast.temperature}°{selectedDetailedForecast.temperatureUnit}
                    </Text>
                    <Text className="text-sm text-charcoal-600 dark:text-charcoal-300 capitalize text-center">
                      {selectedDetailedForecast.shortForecast}
                    </Text>
                  </View>
                  
                  <Text className="text-base text-charcoal-800 dark:text-charcoal-200 leading-relaxed mb-3">
                    {selectedDetailedForecast.detailedForecast}
                  </Text>

                  <View className="border-t border-gray-200 dark:border-charcoal-700 pt-3">
                    {selectedDetailedForecast.probabilityOfPrecipitation && selectedDetailedForecast.probabilityOfPrecipitation.value !== null && (
                      <Text className="text-sm text-charcoal-700 dark:text-charcoal-300 mb-1">
                        <Ionicons name="umbrella-outline" size={16} style={{ marginRight: 4 }} /> 
                        Precipitation: {selectedDetailedForecast.probabilityOfPrecipitation.value}%
                      </Text>
                    )}
                    {selectedDetailedForecast.windSpeed && (
                      <Text className="text-sm text-charcoal-700 dark:text-charcoal-300 mb-1">
                        <Ionicons name="flag-outline" size={16} style={{ marginRight: 4 }} /> 
                        Wind: {selectedDetailedForecast.windSpeed} {selectedDetailedForecast.windDirection || ''}
                      </Text>
                    )}
                    {selectedDetailedForecast.relativeHumidity && selectedDetailedForecast.relativeHumidity.value !== null && (
                      <Text className="text-sm text-charcoal-700 dark:text-charcoal-300 mb-1">
                        <Ionicons name="water-outline" size={16} style={{ marginRight: 4 }} /> 
                        Humidity: {selectedDetailedForecast.relativeHumidity.value}%
                      </Text>
                    )}
                    {selectedDetailedForecast.dewpoint && selectedDetailedForecast.dewpoint.value !== null && (
                      <Text className="text-sm text-charcoal-700 dark:text-charcoal-300 mb-1">
                        <Ionicons name="thermometer-outline" size={16} style={{ marginRight: 4 }} />
                        Dewpoint: {selectedDetailedForecast.dewpoint.value}°{selectedDetailedForecast.temperatureUnit} 
                      </Text>
                    )}
                    {selectedDetailedForecast.temperatureTrend && (
                      <Text className="text-sm text-charcoal-700 dark:text-charcoal-300">
                        <Ionicons name={selectedDetailedForecast.temperatureTrend === 'falling' ? "arrow-down-outline" : "arrow-up-outline"} size={16} style={{ marginRight: 4 }} /> 
                        Temperature is {selectedDetailedForecast.temperatureTrend}
                      </Text>
                    )}
                  </View>
                </ScrollView>{/* End of ScrollView for modal content */}

                <Pressable 
                  className="bg-persian-600 dark:bg-persian-500 py-3 rounded-lg mt-4 active:opacity-80"
                  onPress={() => { setModalVisible(false); setSelectedDetailedForecast(null); }}
                >
                  <Text className="text-white text-center font-semibold">Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        )}

        {/* Content Sections */}
        <View className="p-6">
          {/* About */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xl font-semibold text-persian-700 dark:text-persian-400">About</Text>
              <View className="flex-row items-center">
                <Pressable onPress={handleShare} className="p-2 ml-2">
                  <Ionicons name="share-outline" size={26} color={shareIconColor} />
                </Pressable>
                <Pressable onPress={() => toggleFavorite(park.id)} className="p-2 ml-1">
                  <Ionicons name={favorite ? "heart" : "heart-outline"} size={28} color={favoriteIconColor} />
                </Pressable>
              </View>
            </View>
            <Text className="text-base text-charcoal-700 dark:text-charcoal-300 leading-relaxed">{park.description}</Text>
          </View>

          {/* Hours */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400">
            <Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400 mb-2">Hours</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">{park.hours.open} – {park.hours.close}</Text>
          </View>

          {/* Activities */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400">
            <Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400 mb-3">Activities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.activities.map((activity, index) => (
                <View key={index} className="bg-burnt-100 dark:bg-charcoal-700 px-3 py-1.5 rounded-full shadow-sm">
                  <Text className="text-burnt-700 dark:text-burnt-300 font-medium text-sm">{activity}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Facilities */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-saffron-700 dark:border-saffron-400">
            <Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400 mb-3">Facilities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.facilities.map((facility, index) => (
                <View key={index} className="bg-saffron-100 dark:bg-charcoal-700 px-3 py-1.5 rounded-full shadow-sm">
                  <Text className="text-saffron-700 dark:text-saffron-300 font-medium text-sm">{facility}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Fees */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500">
            <Text className="text-xl font-semibold text-persian-700 dark:text-persian-400 mb-2">Entrance Fees</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">Daily: ${park.entranceFee.daily}</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">Annual: ${park.entranceFee.annual}</Text>
          </View>

          {/* Contact */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400">
            <Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400 mb-2">Contact</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.phone}</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.email}</Text>
            <Pressable onPress={() => Linking.openURL(park.contact.website)}>
                <Text className="text-persian-700 dark:text-persian-400 underline font-medium">{park.contact.website}</Text>
            </Pressable>
          </View>

          {/* Rules */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400">
            <Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400 mb-2">Rules</Text>
            {park.rules.map((rule, index) => (
              <Text key={index} className="text-charcoal-700 dark:text-charcoal-300 mb-1">• {rule}</Text>
            ))}
          </View>

          {/* Seasonal Info */}
          <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-saffron-700 dark:border-saffron-400">
            <Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400 mb-2">Seasonal Information</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">Best Time to Visit: {park.seasonalInfo.bestTimeToVisit}</Text>
            {park.seasonalInfo.seasonalClosures.map((closure, index) => (
              <Text key={index} className="text-charcoal-700 dark:text-charcoal-300">• {closure}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 