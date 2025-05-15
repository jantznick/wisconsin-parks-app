import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Modal,
	ScrollView, Text, View
} from 'react-native';
import { Park } from '../../interfaces/Park.interface';
import { DailyForecastSummary, ForecastPeriod } from '../../interfaces/ParkDetailsScreen.interfaces';
import { getColor } from '../../utils/colors';
import { getDayAbbreviation } from '../../utils/date';
import { getBasicWeatherIconName } from '../../utils/weather';
import AnimatedPressable from '../AnimatedPressable';
import AnimatedForecastTile from './AnimatedForecastTile';

interface WeatherSectionProps {
    park: Park | undefined;
    parkCoordinateIsValid: boolean;
    effectiveTheme: string | undefined;
}

const WeatherSection: React.FC<WeatherSectionProps> = ({ park, parkCoordinateIsValid, effectiveTheme }) => {
    const [weatherForecast, setWeatherForecast] = useState<ForecastPeriod | null>(null);
    const [loadingWeather, setLoadingWeather] = useState<boolean>(true);
    const [weatherError, setWeatherError] = useState<string | null>(null);
    const [dailySummaries, setDailySummaries] = useState<DailyForecastSummary[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDetailedForecast, setSelectedDetailedForecast] = useState<ForecastPeriod | null>(null);

    useEffect(() => {
        if (park) {
            const fetchWeather = async () => {
                if (!parkCoordinateIsValid) {
                    setLoadingWeather(false);
                    setWeatherError("Park location coordinates are not available to fetch weather.");
                    setWeatherForecast(null);
                    setDailySummaries([]);
                    return;
                }

                setLoadingWeather(true);
                setWeatherError(null);
                setWeatherForecast(null);
                setDailySummaries([]);
                try {
                    const pointsResponse = await fetch(
                        `https://api.weather.gov/points/${park.coordinate.latitude},${park.coordinate.longitude}`
                    );
                    if (!pointsResponse.ok) {
                        let errorDetail = `HTTP error ${pointsResponse.status}`;
                        try {
                            const errorData = await pointsResponse.json();
                            if (errorData && errorData.detail) errorDetail = errorData.detail;
                        } catch (e) { /* Ignore */ }
                        throw new Error(`Failed to fetch grid points: ${errorDetail}`);
                    }
                    const pointsData = await pointsResponse.json();
                    const forecastUrl = pointsData.properties?.forecast;
                    if (!forecastUrl) throw new Error("Forecast URL not found in points response.");

                    const forecastResponse = await fetch(forecastUrl);
                    if (!forecastResponse.ok) {
                        let errorDetail = `HTTP error ${forecastResponse.status}`;
                        try {
                            const errorData = await forecastResponse.json();
                            if (errorData && errorData.detail) errorDetail = errorData.detail;
                        } catch (e) { /* Ignore */ }
                        throw new Error(`Failed to fetch forecast: ${errorDetail}`);
                    }
                    const forecastData = await forecastResponse.json();

                    if (forecastData.properties?.periods && forecastData.properties.periods.length > 0) {
                        setWeatherForecast(forecastData.properties.periods[0]);
                        const periods: ForecastPeriod[] = forecastData.properties.periods;
                        const dailyDataHelper: { [key: string]: { dateObj: Date, dayPeriods: ForecastPeriod[], nightPeriods: ForecastPeriod[], allPeriods: ForecastPeriod[] } } = {};

                        periods.forEach((period) => {
                            const dateKey = new Date(period.startTime).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
                            if (!dailyDataHelper[dateKey]) {
                                dailyDataHelper[dateKey] = { dateObj: new Date(period.startTime), dayPeriods: [], nightPeriods: [], allPeriods: [] };
                            }
                            dailyDataHelper[dateKey].allPeriods.push(period);
                            if (period.isDaytime) dailyDataHelper[dateKey].dayPeriods.push(period);
                            else dailyDataHelper[dateKey].nightPeriods.push(period);
                        });

                        const summaries: DailyForecastSummary[] = Object.keys(dailyDataHelper)
                            .sort((a, b) => dailyDataHelper[a].dateObj.getTime() - dailyDataHelper[b].dateObj.getTime())
                            .map(dateKey => {
                                const dayInfo = dailyDataHelper[dateKey];
                                let highTemp: number | null = null;
                                let lowTemp: number | null = null;
                                let representativePeriodForModal: ForecastPeriod | null = null;

                                if (dayInfo.dayPeriods.length > 0) {
                                    representativePeriodForModal = dayInfo.dayPeriods[0];
                                    dayInfo.dayPeriods.forEach(p => { if (p.temperature > (highTemp ?? -Infinity)) highTemp = p.temperature; });
                                } else if (dayInfo.allPeriods.length > 0) {
                                    representativePeriodForModal = dayInfo.allPeriods[0];
                                }

                                if (dayInfo.allPeriods.length > 0) {
                                    const temps = dayInfo.allPeriods.map(p => p.temperature);
                                    highTemp = Math.max(...temps);
                                }

                                if (dayInfo.nightPeriods.length > 0) {
                                    dayInfo.nightPeriods.forEach(p => { if (p.temperature < (lowTemp ?? Infinity)) lowTemp = p.temperature; });
                                } else if (dayInfo.allPeriods.length > 0) {
                                     const temps = dayInfo.allPeriods.map(p => p.temperature);
                                     lowTemp = Math.min(...temps);
                                }

                                if (highTemp === null && lowTemp !== null) highTemp = lowTemp;
                                if (lowTemp === null && highTemp !== null) lowTemp = highTemp;

                                if (representativePeriodForModal) {
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
                        setDailySummaries(summaries);
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
    }, [park, parkCoordinateIsValid]);

    const handleOpenForecastModal = (period: ForecastPeriod) => {
        setSelectedDetailedForecast(period);
        setModalVisible(true);
    };

    if (!parkCoordinateIsValid && !loadingWeather) {
        return (
            <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-blue-500 dark:border-blue-400">
                 <Text className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Current Weather</Text>
                 <Text className="text-charcoal-700 dark:text-charcoal-300 py-4 text-center">Park location coordinates are not available to fetch weather.</Text>
            </View>
        );
    }

    return (
        <>
            {/* Weather Section Card */}
            <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-blue-500 dark:border-blue-400">
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
                        {weatherForecast.probabilityOfPrecipitation && weatherForecast.probabilityOfPrecipitation.value !== null && (
                            <Text className="text-sm text-charcoal-600 dark:text-charcoal-400 mt-1">
                                Precipitation: {weatherForecast.probabilityOfPrecipitation.value}%
                            </Text>
                        )}
                    </View>
                )}
                {!loadingWeather && !weatherForecast && !weatherError && parkCoordinateIsValid && (
                    <Text className="text-charcoal-700 dark:text-charcoal-300 py-4 text-center">Weather data not available.</Text>
                )}
            </View>

            {/* Extended Forecast Section */}
            {parkCoordinateIsValid && dailySummaries.length > 0 && !loadingWeather && (
                <View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-emerald-500 dark:border-emerald-400">
                    <Text className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Upcoming Forecast</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="-mx-2"
                        contentContainerStyle={{ paddingHorizontal: 0 }}
                    >
                        {dailySummaries.map((summary, index) => (
                            <View key={summary.date.toISOString()} className="mx-2">
                                <AnimatedForecastTile
                                    summary={summary}
                                    index={index}
                                    onPressTile={handleOpenForecastModal}
                                    currentTheme={effectiveTheme}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>
            )}

            {/* Detailed Forecast Modal */}
            {selectedDetailedForecast && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible(false); setSelectedDetailedForecast(null); }}
                >
                    <View className="flex-1 justify-center items-center bg-black/50 p-4">
                        <View className="bg-white dark:bg-charcoal-800 rounded-xl p-5 shadow-xl w-full max-w-md">
                            <View className="flex-row justify-between items-center mb-3">
                                <Text className="text-xl font-bold text-charcoal-900 dark:text-charcoal-100 flex-1 mr-2" numberOfLines={1}>{selectedDetailedForecast.name}</Text>
                                <AnimatedPressable
                                    onPress={() => { setModalVisible(false); setSelectedDetailedForecast(null); }}
                                    className="p-1"
                                >
                                    <Ionicons name="close-circle" size={28} color={getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600')} />
                                </AnimatedPressable>
                            </View>
                            <ScrollView style={{ maxHeight: '70%' }}>
                                <View className="items-center mb-3">
                                    <Ionicons
                                        name={getBasicWeatherIconName(selectedDetailedForecast.shortForecast) as keyof typeof Ionicons.glyphMap}
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
                                    {selectedDetailedForecast.probabilityOfPrecipitation?.value !== null && (
                                        <View className="flex-row items-center mb-1">
                                            <Ionicons name="umbrella-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
                                            <Text className="text-sm text-charcoal-700 dark:text-charcoal-300">Precipitation: {selectedDetailedForecast.probabilityOfPrecipitation?.value}%</Text>
                                        </View>
                                    )}
                                    {selectedDetailedForecast.windSpeed && (
                                        <View className="flex-row items-center mb-1">
                                            <Ionicons name="flag-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
                                            <Text className="text-sm text-charcoal-700 dark:text-charcoal-300">Wind: {selectedDetailedForecast.windSpeed} {selectedDetailedForecast.windDirection || ''}</Text>
                                        </View>
                                    )}
                                    {selectedDetailedForecast.relativeHumidity?.value !== null && (
                                        <View className="flex-row items-center mb-1">
                                            <Ionicons name="water-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
                                            <Text className="text-sm text-charcoal-700 dark:text-charcoal-300">Humidity: {selectedDetailedForecast.relativeHumidity?.value}%</Text>
                                        </View>
                                    )}
                                    {selectedDetailedForecast.dewpoint?.value !== null && (
                                        <View className="flex-row items-center mb-1">
                                            <Ionicons name="thermometer-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
                                            <Text className="text-sm text-charcoal-700 dark:text-charcoal-300">Dewpoint: {selectedDetailedForecast.dewpoint?.value}°{selectedDetailedForecast.temperatureUnit}</Text>
                                        </View>
                                    )}
                                    {selectedDetailedForecast.temperatureTrend && (
                                        <View className="flex-row items-center">
                                            <Ionicons name={selectedDetailedForecast.temperatureTrend === 'falling' ? "arrow-down-outline" : "arrow-up-outline"} size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
                                            <Text className="text-sm text-charcoal-700 dark:text-charcoal-300">Temperature is {selectedDetailedForecast.temperatureTrend}</Text>
                                        </View>
                                    )}
                                </View>
                            </ScrollView>
                            <AnimatedPressable
                                className="bg-persian-600 dark:bg-persian-500 py-3 rounded-lg mt-4 active:opacity-80"
                                onPress={() => { setModalVisible(false); setSelectedDetailedForecast(null); }}
                            >
                                <Text className="text-white text-center font-semibold">Close</Text>
                            </AnimatedPressable>
                        </View>
                    </View>
                </Modal>
            )}
        </>
    );
};

export default WeatherSection; 