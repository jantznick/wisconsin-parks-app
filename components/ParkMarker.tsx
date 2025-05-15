import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import { useTheme } from '../contexts/ThemeContext';
import { ParkMarkerProps } from '../interfaces/ParkMarker.interfaces';
import { getColor } from '../utils/colors';

export default function ParkMarker({ park, onPress }: ParkMarkerProps) {
	const { effectiveTheme } = useTheme();

	const markerBgColor = getColor(effectiveTheme === 'dark' ? 'persian-500' : 'persian-600');
	const markerBorderColor = getColor(effectiveTheme === 'dark' ? 'persian-400' : 'persian-700');
	const iconColor = getColor(effectiveTheme === 'dark' ? 'persian-100' : 'white');

	// Return null if coordinates are not valid numbers
	if (typeof park.coordinate?.latitude !== 'number' || typeof park.coordinate?.longitude !== 'number') {
		console.warn(`ParkMarker: Park "${park.name}" has invalid coordinates. Not rendering marker.`);
		return null;
	}

	return (
		<Marker
			coordinate={park.coordinate as { latitude: number; longitude: number; }}
			title={park.name}
			description={park.description}
			onPress={onPress}
		>
			<View
				className="p-2 rounded-full shadow-md flex items-center justify-center"
				style={{
					backgroundColor: markerBgColor,
					borderColor: markerBorderColor,
					borderWidth: 2,
					width: 40,
					height: 40,
				}}
			>
				<Ionicons name="leaf" size={20} color={iconColor} />
			</View>
		</Marker>
	);
} 