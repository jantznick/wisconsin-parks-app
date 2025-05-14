import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import { useTheme } from '../contexts/ThemeContext';
import { Park } from '../data/parks';
import tailwindConfig from '../tailwind.config.js';

const getColor = (colorName: string) => {
	// @ts-ignore
	const [theme, shade] = colorName.split('-');
	// @ts-ignore
	return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

interface ParkMarkerProps {
	park: Park;
	onPress?: () => void;
}

export default function ParkMarker({ park, onPress }: ParkMarkerProps) {
	const { effectiveTheme } = useTheme();

	const markerBgColor = getColor(effectiveTheme === 'dark' ? 'persian-500' : 'persian-600');
	const markerBorderColor = getColor(effectiveTheme === 'dark' ? 'persian-400' : 'persian-700');
	const iconColor = getColor(effectiveTheme === 'dark' ? 'persian-100' : 'white');

	return (
		<Marker
			coordinate={park.coordinate}
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