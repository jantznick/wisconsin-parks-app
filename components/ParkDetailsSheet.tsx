import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { useFavorites } from '../contexts/FavoritesContext';
import { ParkDetailsSheetProps } from '../interfaces/ParkDetailsSheet.interfaces';
import { getActivityName } from '../utils/activities';
import { shareContent } from '../utils/share';
import AnimatedPressable from './AnimatedPressable';
import SharedParkHeader from './SharedParkHeader';

export default function ParkDetailsSheet({ park, onClose }: ParkDetailsSheetProps) {
	const router = useRouter();
	const { isFavorite, toggleFavorite } = useFavorites();

	if (!park) {
		return null;
	}

	const handleViewFullDetails = () => {
		router.push(`/park/${park.id}`);
	};

	const handleShare = async () => {
		if (!park) return;
		await shareContent({
			message: `Check out ${park.name}! Find out more here: ${park.contact.website}`,
			title: `Share ${park.name}`,
			url: park.contact.website
		});
	};

	const openDirections = () => {
		if (park.coordinate?.latitude && park.coordinate?.longitude) {
			const url = `https://www.google.com/maps/dir/?api=1&destination=${park.coordinate.latitude},${park.coordinate.longitude}`;
			Linking.openURL(url);
		} else {
			Alert.alert("Cannot get directions", "Park location is not available.");
		}
	};

	return (
		<View className="bg-charcoal-50 dark:bg-charcoal-900 flex-1">
			<SharedParkHeader
				park={park}
				leftIconName="close"
				onLeftIconPress={onClose}
				onFavoritePress={() => toggleFavorite(park.id)}
				isFavorite={isFavorite(park.id)}
				onSharePress={handleShare}
				showTitle={false}
			/>
			<ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
				<View className="p-4">
					<Text className="text-3xl font-bold mb-1 text-charcoal-900 dark:text-charcoal-100">{park.name}</Text>

					<View className="flex-row justify-around mb-6">
						<AnimatedPressable
							onPress={handleViewFullDetails}
							className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full shadow-md active:opacity-80"
						>
							<Ionicons name="information-circle-outline" size={24} color="white" />
						</AnimatedPressable>
						<AnimatedPressable
							onPress={openDirections}
							className="bg-emerald-600 dark:bg-emerald-500 p-3 rounded-full shadow-md active:opacity-80"
						>
							<Ionicons name="navigate-outline" size={24} color="white" />
						</AnimatedPressable>
					</View>

					<View className="mb-4 p-4 bg-white dark:bg-charcoal-800 rounded-lg shadow">
						<Text className="text-xl font-semibold text-charcoal-800 dark:text-charcoal-200 mb-2">About</Text>
						<Text className="text-charcoal-700 dark:text-charcoal-300 leading-relaxed">{park.description}</Text>
					</View>

					<View className="mb-4 p-4 bg-white dark:bg-charcoal-800 rounded-lg shadow">
						<Text className="text-xl font-semibold text-charcoal-800 dark:text-charcoal-200 mb-2">Activities</Text>
						<View className="flex-row flex-wrap gap-2">
							{park.activities.map((activity, index) => (
								<View key={index} className="bg-burnt-100 dark:bg-charcoal-700 px-3 py-1.5 rounded-full shadow-sm">
									<Text className="text-burnt-700 dark:text-burnt-300 font-medium text-sm">{getActivityName(activity)}</Text>
								</View>
							))}
						</View>
					</View>

					<View className="mb-4 p-4 bg-white dark:bg-charcoal-800 rounded-lg shadow">
						<Text className="text-xl font-semibold text-charcoal-800 dark:text-charcoal-200 mb-2">Contact</Text>
						<Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.phone}</Text>
						<Pressable onPress={() => Linking.openURL(`mailto:${park.contact.email}`)}>
							<Text className="text-persian-700 dark:text-persian-400 underline font-medium">{park.contact.email}</Text>
						</Pressable>
						<Pressable onPress={() => Linking.openURL(park.contact.website)}>
							<Text className="text-persian-700 dark:text-persian-400 underline font-medium">{park.contact.website}</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</View>
	);
} 