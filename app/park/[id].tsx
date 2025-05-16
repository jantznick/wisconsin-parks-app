import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { ActivityIndicator, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AnimatedPressable from '../../components/AnimatedPressable';
import ParkMarker from '../../components/ParkMarker';
import SharedParkHeader from '../../components/SharedParkHeader';
import ReservationsCard from '../../components/park_details/ReservationsCard';
import WeatherSection from '../../components/park_details/WeatherSection';
import { useActivities } from '../../contexts/ActivitiesContext';
import { useParks } from '../../contexts/ParksContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Park } from '../../interfaces/Park.interface';
import { getActivityName } from '../../utils/activities';
import { openDirections } from '../../utils/map';
import { shareContent } from '../../utils/share';

export default function ParkDetailsScreen() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	const mapRef = useRef<MapView>(null);
	const insets = useSafeAreaInsets();
	const { effectiveTheme } = useTheme();
	const { parks, loading: parksLoading, error: parksError } = useParks();
	const { activities, loading: activitiesLoading, error: activitiesError } = useActivities();

	const park: Park | undefined = parks.find(p => p.id === id);

	const parkCoordinateIsValid = !!(park &&
		typeof park.coordinate?.latitude === 'number' &&
		typeof park.coordinate?.longitude === 'number');

	const initialRegion: Region = parkCoordinateIsValid && park
		? {
			latitude: park.coordinate.latitude as number,
			longitude: park.coordinate.longitude as number,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		}
		: {
			latitude: 44.5,
			longitude: -89.5,
			latitudeDelta: 5,
			longitudeDelta: 5,
		};

	if (parksLoading || activitiesLoading) {
		return (
			<View className="flex-1 items-center justify-center bg-charcoal-50 dark:bg-charcoal-950">
				<ActivityIndicator size="large" />
				<Text className="text-xl text-charcoal-900 dark:text-charcoal-100">Loading park details...</Text>
			</View>
		);
	}

	if (parksError || activitiesError) {
		return (
			<View className="flex-1 items-center justify-center bg-charcoal-50 dark:bg-charcoal-950">
				<Text className="text-xl text-charcoal-900 dark:text-charcoal-100">
					Error loading data: {parksError?.message || activitiesError?.message}
				</Text>
			</View>
		);
	}

	if (!park) {
		return (
			<View className="flex-1 items-center justify-center bg-charcoal-50 dark:bg-charcoal-950">
				<Text className="text-xl text-charcoal-900 dark:text-charcoal-100">Park not found</Text>
			</View>
		);
	}

	const handleShare = async () => {
		if (!park) return;
		await shareContent({
			message: `Check out ${park.name}! Find out more here: ${park.contact.website}`,
			title: `Share ${park.name}`,
			url: park.contact.website
		});
	};

	const handleOpenDirections = () => {
		if (park && park.coordinate) {
			openDirections(park.coordinate.latitude, park.coordinate.longitude);
		}
	};

	return (
		<View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
			<SharedParkHeader
				park={park}
				leftIconName="arrow-back"
				onLeftIconPress={() => router.back()}
				onSharePress={handleShare}
				safeAreaTopInset={insets.top + 8}
			/>
			<ScrollView
				className="flex-1"
				contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
			>
				<View className="p-6">
					<ReservationsCard park={park} effectiveTheme={effectiveTheme} />

					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-saffron-700 dark:border-saffron-400">
						<View className="flex-row justify-between items-center mb-2">
							<Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400">Location</Text>
							<AnimatedPressable
								className={`bg-saffron-700 dark:bg-saffron-500 px-3 py-2 rounded-lg flex-row items-center shadow-sm ${!parkCoordinateIsValid ? 'opacity-50' : ''}`}
								disabled={!parkCoordinateIsValid}
								onPress={handleOpenDirections}
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
							>
								{parkCoordinateIsValid && (
									<ParkMarker park={park} />
								)}
							</MapView>
						</View>
					</View>

					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500">
						<View className="flex-row justify-between items-center mb-2">
							<Text className="text-xl font-semibold text-persian-700 dark:text-persian-400">About</Text>
						</View>
						<Text className="text-base text-charcoal-700 dark:text-charcoal-300 leading-relaxed">{park.description}</Text>
					</View>

					<WeatherSection park={park} parkCoordinateIsValid={parkCoordinateIsValid} effectiveTheme={effectiveTheme} />

					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400">
						<Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400 mb-2">Hours</Text>
						<Text className="text-charcoal-700 dark:text-charcoal-300">{park.hours.open} – {park.hours.close}</Text>
					</View>

					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400">
						<Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400 mb-3">Activities</Text>
						<View className="flex-row flex-wrap gap-2">
							{park.activities.map((activity, index) => (
								<View key={index} className="bg-burnt-100 dark:bg-charcoal-700 px-3 py-1.5 rounded-full shadow-sm">
									<Text className="text-burnt-700 dark:text-burnt-300 font-medium text-sm">
										{getActivityName(activity, activities)}
									</Text>
								</View>
							))}
						</View>
					</View>

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

					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500">
						<Text className="text-xl font-semibold text-persian-700 dark:text-persian-400 mb-2">Entrance Fees</Text>
						<Text className="text-charcoal-700 dark:text-charcoal-300">Daily: ${park.entranceFee.daily}</Text>
						<Text className="text-charcoal-700 dark:text-charcoal-300">Annual: ${park.entranceFee.annual}</Text>
					</View>

					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400">
						<Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400 mb-2">Contact</Text>
						<Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.phone}</Text>
						<Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.email}</Text>
						<Pressable onPress={() => Linking.openURL(park.contact.website)}>
							<Text className="text-persian-700 dark:text-persian-400 underline font-medium">{park.contact.website}</Text>
						</Pressable>
					</View>

					<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400">
						<Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400 mb-2">Rules</Text>
						{park.rules.map((rule, index) => (
							<Text key={index} className="text-charcoal-700 dark:text-charcoal-300 mb-1">• {rule}</Text>
						))}
					</View>

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