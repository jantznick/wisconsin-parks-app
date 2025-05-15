import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Linking, Modal, Pressable, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AnimatedPressable from '../../components/AnimatedPressable';
import ParkMarker from '../../components/ParkMarker';
import SharedParkHeader from '../../components/SharedParkHeader';
import { useFavorites } from '../../contexts/FavoritesContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Park } from '../../interfaces/Park.interface';
import { AnimatedForecastTileProps, DailyForecastSummary, ForecastPeriod } from '../../interfaces/ParkDetailsScreen.interfaces';
import tailwindConfig from '../../tailwind.config.js';
import { getActivityName } from '../../utils/activities';
import { getBasicWeatherIconName } from '../../utils/weather';

const PARKS: Park[] = require('../../data/parks.json');
// Helper to get color from Tailwind config
const getColor = (colorName: string) => {
	const [theme, shade] = colorName.split('-');
	// @ts-ignore
	return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

// Helper function to get day abbreviation
const getDayAbbreviation = (date: Date): string => {
	const today = new Date();
	const tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	if (date.toDateString() === today.toDateString()) return "Today";

	return date.toLocaleDateString(undefined, { weekday: 'short' }); // e.g., "Mon"
};

export default function ParkDetailsScreen() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	const { isFavorite, toggleFavorite } = useFavorites();
	const mapRef = useRef<MapView>(null);
	const insets = useSafeAreaInsets();
	const { effectiveTheme } = useTheme();

	const park: Park | undefined = PARKS.find(p => p.id === id);

	// Determine initial map region
	const parkCoordinateIsValid = park &&
		typeof park.coordinate?.latitude === 'number' &&
		typeof park.coordinate?.longitude === 'number';

	const initialRegion: Region = parkCoordinateIsValid
		? {
			latitude: park.coordinate.latitude as number, // Cast, check is done by parkCoordinateIsValid
			longitude: park.coordinate.longitude as number, // Cast, check is done by parkCoordinateIsValid
			latitudeDelta: 0.0922, // Standard delta
			longitudeDelta: 0.0421,
		}
		: { // Fallback to Wisconsin center or a predefined default
			latitude: 44.5,
			longitude: -89.5,
			latitudeDelta: 5,
			longitudeDelta: 5,
		};

	// Weather state
	const [weatherForecast, setWeatherForecast] = useState<ForecastPeriod | null>(null);
	const [loadingWeather, setLoadingWeather] = useState<boolean>(true);
	const [weatherError, setWeatherError] = useState<string | null>(null);
	const [dailySummaries, setDailySummaries] = useState<DailyForecastSummary[]>([]); // State for multi-day forecast

	// State for forecast details modal
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedDetailedForecast, setSelectedDetailedForecast] = useState<ForecastPeriod | null>(null);

	// Reservation Input State
	const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(undefined);
	const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(undefined);
	const [selectedEquipment, setSelectedEquipment] = useState<string>('');
	const [isStartDatePickerVisible, setIsStartDatePickerVisible] = useState<boolean>(false);
	const [isEndDatePickerVisible, setIsEndDatePickerVisible] = useState<boolean>(false);
	const [isEquipmentPickerVisible, setIsEquipmentPickerVisible] = useState<boolean>(false);

	const equipmentOptions = [
		"Tent",
		"Truck Camper",
		"Pop-Up",
		"Trailer/RV up to 20'",
		"Trailer/RV up to 25'",
		"Trailer/RV up to 30'",
		"Trailer/RV up to 35'",
		"Trailer/RV 35+'",
		"Other",
	];

	// Define AnimatedForecastTile component here
	const AnimatedForecastTile = ({ summary, index, onPressTile, currentTheme }: AnimatedForecastTileProps) => {
		const opacity = useSharedValue(0);
		const translateX = useSharedValue(20); // Initial offset for slide-in effect

		const animatedStyle = useAnimatedStyle(() => {
			return {
				opacity: opacity.value,
				transform: [{ translateX: translateX.value }],
			};
		});

		useEffect(() => {
			opacity.value = withDelay(index * 120, withTiming(1, { duration: 450 }));
			translateX.value = withDelay(index * 120, withTiming(0, { duration: 450 }));
		}, [index, opacity, translateX]);

		return (
			<Animated.View style={animatedStyle}>
				<Pressable
					className="items-center bg-charcoal-50 dark:bg-charcoal-700 rounded-lg p-3 w-28 shadow active:opacity-70"
					onPress={() => onPressTile(summary.representativePeriod)}
				>
					<Text className="font-semibold text-charcoal-800 dark:text-charcoal-100 text-sm">{summary.dayName}</Text>
					<Ionicons
						name={summary.iconName as any}
						size={36}
						color={getColor(currentTheme === 'dark' ? 'charcoal-200' : 'charcoal-700')}
						style={{ marginVertical: 4 }}
					/>
					<Text className="text-charcoal-900 dark:text-charcoal-50 font-bold text-base">
						{summary.highTemp !== null ? `${summary.highTemp}°` : '--'}
						<Text className="font-medium text-charcoal-600 dark:text-charcoal-300">{summary.lowTemp !== null ? ` / ${summary.lowTemp}°` : ' / --'}</Text>
					</Text>
				</Pressable>
			</Animated.View>
		);
	};

	useEffect(() => {
		if (park) {
			const fetchWeather = async () => {
				// Guard against missing coordinates for weather API call
				if (!parkCoordinateIsValid) { // Use the pre-calculated boolean
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
	}, [park]); // Re-run if park changes

	// Handler to open the forecast modal
	const handleOpenForecastModal = (period: ForecastPeriod) => {
		setSelectedDetailedForecast(period);
		setModalVisible(true);
	};

	const showStartDatePicker = () => setIsStartDatePickerVisible(true);
	const hideStartDatePicker = () => setIsStartDatePickerVisible(false);
	const showEndDatePicker = () => {
		if (!selectedStartDate) {
			Alert.alert("Select Check-in", "Please select a check-in date first.");
			return;
		}
		setIsEndDatePickerVisible(true);
	};
	const hideEndDatePicker = () => setIsEndDatePickerVisible(false);

	const handleConfirmStartDate = (date: Date) => {
		setSelectedStartDate(date);
		hideStartDatePicker();
		// If selectedEndDate is before or same as new startDate, reset endDate
		if (selectedEndDate && selectedEndDate <= date) {
			setSelectedEndDate(undefined);
		}
	};

	const handleConfirmEndDate = (date: Date) => {
		setSelectedEndDate(date);
		hideEndDatePicker();
	};

	const formatDateForDisplay = (date: Date | undefined): string => {
		if (!date) return "Select a date";
		return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
	};

	const formatDateForUrl = (date: Date): string => {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	if (!park) {
		return (
			<View className="flex-1 items-center justify-center bg-charcoal-50 dark:bg-charcoal-950">
				<Text className="text-xl text-charcoal-900 dark:text-charcoal-100">Park not found</Text>
			</View>
		);
	}

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

	const openDirections = () => {
		const url = `https://www.google.com/maps/dir/?api=1&destination=${park.coordinate.latitude},${park.coordinate.longitude}&travelmode=driving`;
		Linking.openURL(url);
	};

	const openReservationLink = () => {
		if (!selectedStartDate) {
			Alert.alert("Missing Information", "Please select a check-in date.");
			return;
		}
		if (!selectedEndDate) {
			Alert.alert("Missing Information", "Please select a check-out date.");
			return;
		}
		if (selectedEndDate <= selectedStartDate) {
			Alert.alert("Invalid Dates", "Check-out date must be after the check-in date.");
			return;
		}

		// --- Placeholder Equipment ID Mapping ---
		// YOU WILL NEED TO REPLACE THIS WITH ACTUAL IDs from the reservation system
		let equipmentId = -32768; // Default or "Tent"
		let subEquipmentId = -32767; // Default or "Tent"

		if (selectedEquipment === "Truck Camper") {
			equipmentId = -32766; // Example, replace with actual
			subEquipmentId = -32765; // Example, replace with actual
		} else if (selectedEquipment === "Pop-Up") {
			equipmentId = -32764; // Example, replace with actual
			subEquipmentId = -32763; // Example, replace with actual
		} else if (selectedEquipment.startsWith("Trailer/RV")) {
			// This is a simplified example. You'll need a more robust mapping for different RV sizes.
			equipmentId = -32762; // Example for general Trailer/RV
			subEquipmentId = -32761; // Example for general Trailer/RV
		}
		// Add more mappings for other equipmentOptions as needed

		const startDateStr = formatDateForUrl(selectedStartDate);
		const endDateStr = formatDateForUrl(selectedEndDate);

		const nights = Math.round((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24));
		if (nights <= 0) {
			Alert.alert("Invalid Dates", "Number of nights must be at least 1.");
			return;
		}

		const now = new Date();
		const searchTime = `${formatDateForUrl(now)}T${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;

		const params = new URLSearchParams({
			resourceLocationId: "-2147483648",
			mapId: "-2147483494",
			searchTabGroupId: "0",
			bookingCategoryId: "0",
			startDate: startDateStr,
			endDate: endDateStr,
			nights: nights.toString(),
			isReserving: "true",
			equipmentId: equipmentId.toString(),
			subEquipmentId: subEquipmentId.toString(),
			peopleCapacityCategoryCounts: "[[-32768,null,1,null]]", // Using example value
			searchTime: searchTime,
			flexibleSearch: "[false,false,null,1]", // Using example value
		});

		const reservationUrl = `https://wisconsin.goingtocamp.com/create-booking/results?${params.toString()}`;

		Linking.openURL(reservationUrl).catch(err => {
			console.error("Failed to open URL:", err);
			Alert.alert("Error", "Could not open the reservation website. Ensure you have selected a date and equipment type.");
		});
	};

	return (
		<View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
			<SharedParkHeader
				park={park}
				leftIconName="arrow-back"
				onLeftIconPress={() => router.back()}
				onSharePress={handleShare}
				safeAreaTopInset={insets.top + 8} // Pass the calculated safe area top inset
			// containerClassName can be omitted if no extra styling is needed for the root View of SharedParkHeader
			/>

			<ScrollView
				className="flex-1"
				contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
			>

				{/* Content Sections */}
				<View className="p-6">


					{/* Reservations Card */}
					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-emerald-600 dark:border-emerald-400">
						<Text className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">Plan Your Stay</Text>

						{/* Date Inputs Container */}
						<View className="flex-row justify-between mb-4">
							{/* Check-in Date Input */}
							<View className="flex-1 mr-2">
								<Text className="text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-1">Check-in</Text>
								<Pressable onPress={showStartDatePicker}>
									<View className="bg-charcoal-50 dark:bg-charcoal-700 p-3 rounded-md flex-row justify-between items-center">
										<Text className={`text-base ${selectedStartDate ? 'text-charcoal-800 dark:text-charcoal-100' : 'text-charcoal-400 dark:text-charcoal-500'}`}>
											{formatDateForDisplay(selectedStartDate)}
										</Text>
										<Ionicons name="calendar-outline" size={20} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-500')} />
									</View>
								</Pressable>
							</View>

							{/* Check-out Date Input */}
							<View className="flex-1 ml-2">
								<Text className="text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-1">Check-out</Text>
								<Pressable onPress={showEndDatePicker} disabled={!selectedStartDate}>
									<View className={`bg-charcoal-50 dark:bg-charcoal-700 p-3 rounded-md flex-row justify-between items-center ${!selectedStartDate ? 'opacity-50' : ''}`}>
										<Text className={`text-base ${selectedEndDate ? 'text-charcoal-800 dark:text-charcoal-100' : 'text-charcoal-400 dark:text-charcoal-500'}`}>
											{formatDateForDisplay(selectedEndDate)}
										</Text>
										<Ionicons name="calendar-outline" size={20} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-500')} />
									</View>
								</Pressable>
							</View>
						</View>

						<DateTimePickerModal
							isVisible={isStartDatePickerVisible}
							mode="date"
							onConfirm={handleConfirmStartDate}
							onCancel={hideStartDatePicker}
							minimumDate={new Date()}
						/>
						<DateTimePickerModal
							isVisible={isEndDatePickerVisible}
							mode="date"
							onConfirm={handleConfirmEndDate}
							onCancel={hideEndDatePicker}
							minimumDate={selectedStartDate ? new Date(new Date(selectedStartDate).setDate(selectedStartDate.getDate() + 1)) : new Date()}
						/>

						{/* Equipment Input */}
						<View className="mb-4">
							<Text className="text-sm font-medium text-charcoal-700 dark:text-charcoal-300 mb-1">Equipment</Text>
							<Pressable onPress={() => setIsEquipmentPickerVisible(true)}>
								<View className="bg-charcoal-50 dark:bg-charcoal-700 p-3 rounded-md flex-row justify-between items-center">
									<Text className={`text-base ${selectedEquipment ? 'text-charcoal-800 dark:text-charcoal-100' : 'text-charcoal-400 dark:text-charcoal-500'}`}>
										{selectedEquipment || "Select equipment type"}
									</Text>
									<Ionicons name="chevron-down" size={20} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-500')} />
								</View>
							</Pressable>
						</View>

						<AnimatedPressable
							onPress={openReservationLink}
							className="bg-emerald-600 dark:bg-emerald-500 px-4 py-3 rounded-lg flex-row items-center justify-center shadow-md active:opacity-80"
						>
							<Text className="text-white dark:text-emerald-50 font-semibold text-base">Open Reservation Link</Text>
							<Ionicons name="exit-outline" size={20} color="white" style={{ marginLeft: 8 }} />
						</AnimatedPressable>
					</View>

					{/* Map Panel */}
					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-saffron-700 dark:border-saffron-400">
						<View className="flex-row justify-between items-center mb-2">
							<Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400">Location</Text>
							<AnimatedPressable
								onPress={openDirections}
								className="bg-saffron-700 dark:bg-saffron-500 px-3 py-2 rounded-lg flex-row items-center shadow-sm"
							>
								<Ionicons name="navigate" size={16} color="white" />
								<Text className="text-white dark:text-saffron-100 font-medium ml-2 text-sm">Directions</Text>
							</AnimatedPressable>
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
								{/* Conditionally render ParkMarker directly */}
								{parkCoordinateIsValid && park && (
									<ParkMarker
										park={park}
									/>
								)}
							</MapView>
						</View>
					</View>


					{/* About */}
					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500">
						<View className="flex-row justify-between items-center mb-2">
							<Text className="text-xl font-semibold text-persian-700 dark:text-persian-400">About</Text>
							{/* Icons removed from here */}
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
									<Text className="text-burnt-700 dark:text-burnt-300 font-medium text-sm">{getActivityName(activity)}</Text>
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

					{/* Weather Section - Conditionally render if coordinates are valid */}
					{parkCoordinateIsValid && (
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
					)}

					{/* Extended Forecast Section - Conditionally render if coordinates are valid */}
					{parkCoordinateIsValid && dailySummaries.length > 0 && (
						<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-emerald-500 dark:border-emerald-400">
							<Text className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Upcoming Forecast</Text>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
								className="-mx-2" // Retain -mx-2 for the ScrollView
								contentContainerStyle={{ paddingHorizontal: 0 }} // No extra padding if items provide their own margin
							>
								{dailySummaries.map((summary, index) => (
									<View key={summary.date.toISOString()} className="mx-2"> {/* Wrapper for spacing and key */}
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

					{/* Detailed Forecast Modal - Already implicitly conditional on dailySummaries/selectedDetailedForecast */}
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
										<AnimatedPressable
											onPress={() => { setModalVisible(false); setSelectedDetailedForecast(null); }}
											className="p-1"
										>
											<Ionicons name="close-circle" size={28} color={getColor(effectiveTheme === 'dark' ? 'charcoal-400' : 'charcoal-600')} />
										</AnimatedPressable>
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
												<View className="flex-row items-center mb-1">
													<Ionicons name="umbrella-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
													<Text className="text-sm text-charcoal-700 dark:text-charcoal-300">
														Precipitation: {selectedDetailedForecast.probabilityOfPrecipitation.value}%
													</Text>
												</View>
											)}
											{selectedDetailedForecast.windSpeed && (
												<View className="flex-row items-center mb-1">
													<Ionicons name="flag-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
													<Text className="text-sm text-charcoal-700 dark:text-charcoal-300">
														Wind: {selectedDetailedForecast.windSpeed} {selectedDetailedForecast.windDirection || ''}
													</Text>
												</View>
											)}
											{selectedDetailedForecast.relativeHumidity && selectedDetailedForecast.relativeHumidity.value !== null && (
												<View className="flex-row items-center mb-1">
													<Ionicons name="water-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
													<Text className="text-sm text-charcoal-700 dark:text-charcoal-300">
														Humidity: {selectedDetailedForecast.relativeHumidity.value}%
													</Text>
												</View>
											)}
											{selectedDetailedForecast.dewpoint && selectedDetailedForecast.dewpoint.value !== null && (
												<View className="flex-row items-center mb-1">
													<Ionicons name="thermometer-outline" size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
													<Text className="text-sm text-charcoal-700 dark:text-charcoal-300">
														Dewpoint: {selectedDetailedForecast.dewpoint.value}°{selectedDetailedForecast.temperatureUnit}
													</Text>
												</View>
											)}
											{selectedDetailedForecast.temperatureTrend && (
												<View className="flex-row items-center">
													<Ionicons name={selectedDetailedForecast.temperatureTrend === 'falling' ? "arrow-down-outline" : "arrow-up-outline"} size={16} color={getColor(effectiveTheme === 'dark' ? 'charcoal-300' : 'charcoal-700')} style={{ marginRight: 6 }} />
													<Text className="text-sm text-charcoal-700 dark:text-charcoal-300">
														Temperature is {selectedDetailedForecast.temperatureTrend}
													</Text>
												</View>
											)}
										</View>
									</ScrollView>{/* End of ScrollView for modal content */}

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

					{/* Equipment Picker Modal */}
					{isEquipmentPickerVisible && (
						<Modal
							animationType="slide"
							transparent={true}
							visible={isEquipmentPickerVisible}
							onRequestClose={() => setIsEquipmentPickerVisible(false)}
						>
							<Pressable
								className="flex-1 justify-end bg-black/50" // Use Tailwind for backdrop
								onPress={() => setIsEquipmentPickerVisible(false)} // Close modal on backdrop press
							>
								<Pressable
									className="w-full bg-white dark:bg-charcoal-800 rounded-t-2xl pt-5 pb-safe" // Use Tailwind, pb-safe for bottom safe area
									onPress={() => { /* Prevent closing modal when pressing inside the content */ }}
								>
									<Text className="text-lg font-semibold text-center mb-2 text-charcoal-900 dark:text-charcoal-100 px-5">Select Equipment Type</Text>
									<View className="h-px bg-charcoal-200 dark:bg-charcoal-700 mb-3" />{/* Separator Line */}
									<ScrollView style={{ maxHeight: 300 }} contentContainerStyle={{ paddingBottom: 10 }}>
										{equipmentOptions.map((option, index) => (
											<TouchableOpacity
												key={index}
												onPress={() => {
													setSelectedEquipment(option);
													setIsEquipmentPickerVisible(false);
												}}
												className="px-5 py-3.5 flex-row items-center" // Increased padding for better touch
											>
												<Ionicons
													name={selectedEquipment === option ? "radio-button-on-outline" : "radio-button-off-outline"}
													size={22}
													color={getColor(effectiveTheme === 'dark' ? (selectedEquipment === option ? 'persian-400' : 'charcoal-400') : (selectedEquipment === option ? 'persian-600' : 'charcoal-500'))}
													style={{ marginRight: 12 }}
												/>
												<Text className="text-base text-charcoal-800 dark:text-charcoal-200 flex-1">{option}</Text>
											</TouchableOpacity>
										))}
									</ScrollView>
									<TouchableOpacity
										onPress={() => setIsEquipmentPickerVisible(false)}
										className="mt-3 mb-3 py-3 bg-charcoal-200 dark:bg-charcoal-700 rounded-lg mx-5 active:opacity-75"
									>
										<Text className="text-charcoal-800 dark:text-charcoal-100 text-center font-semibold text-base">Cancel</Text>
									</TouchableOpacity>
								</Pressable>
							</Pressable>
						</Modal>
					)}
				</View>
			</ScrollView>
		</View>
	);
} 