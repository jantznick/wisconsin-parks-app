import React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { useFavorites } from '../contexts/FavoritesContext';
import { Park } from '../data/parks';

interface ParkMarkerProps {
	park: Park;
	onPress?: () => void;
}

export default function ParkMarker({ park, onPress }: ParkMarkerProps) {
	const { isFavorite, toggleFavorite } = useFavorites();
	const favorite = isFavorite(park.id);

	return (
		<Marker
			coordinate={park.coordinate}
			title={park.name}
			description={park.description}
			onPress={onPress}
		>
			<View className="bg-white p-2 rounded-full border-2 border-blue-500 shadow-md">
				<Text className="text-xl">🌲</Text>
			</View>
		</Marker>
	);
} 