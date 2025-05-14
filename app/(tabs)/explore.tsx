import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WisconsinMap from '../../components/WisconsinMap';
import { useTheme } from '../../contexts/ThemeContext';
import { PARKS } from '../../data/parks';
import tailwindConfig from '../../tailwind.config.js'; // Import Tailwind config

// Helper to get color from Tailwind config (copied from HomeScreen)
const getColor = (colorName: string) => {
	const [theme, shade] = colorName.split('-');
	// @ts-ignore
	return tailwindConfig.theme.extend.colors[theme]?.[shade] || '#000000';
};

// Ensure PARKS is initialized
const INITIAL_PARKS = PARKS || [];

export default function ExploreScreen() {
	const insets = useSafeAreaInsets();
	const { theme, setTheme, effectiveTheme } = useTheme();
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	// Get unique activities from all parks
	const categories = [...new Set(INITIAL_PARKS.flatMap(park => park.activities || []))].filter(Boolean);

	// Filter parks based on selected categories
	const filteredParks = selectedCategories.length === 0
		? INITIAL_PARKS
		: INITIAL_PARKS.filter(park =>
			selectedCategories.some(category => park.activities?.includes(category))
		);

	// Calculate park counts for each category
	const getCategoryCount = (category: string) => {
		// For selected categories, show total number of currently filtered parks
		if (selectedCategories.includes(category)) {
			return filteredParks.length;
		}
		// For unselected categories, show how many of the currently filtered parks have this activity
		return filteredParks.filter(park => park.activities?.includes(category)).length;
	};

	const toggleCategory = (category: string) => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(c => c !== category)
				: [...prev, category]
		);
	};

	const clearAllCategories = () => {
		setSelectedCategories([]);
	};

	const toggleTheme = () => {
		if (theme === 'light') setTheme('dark');
		else if (theme === 'dark') setTheme('system');
		else setTheme('light');
	};

	// Define colors based on theme for props that don't accept Tailwind classes directly
	const headerIconColor = effectiveTheme === 'dark' ? getColor('persian-100') : getColor('charcoal-50'); // charcoal-50 is white

	return (
		<View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
			{/* Sticky Header with Theme Toggle */}
			<View className="bg-persian-800 dark:bg-charcoal-800 px-6 pb-3" style={{ paddingTop: insets.top + 8 }}>
				<View className="flex-row justify-between items-center">
					<View>
						<Text className="text-2xl font-bold text-white dark:text-white">Explore</Text>
						<Text className="text-base text-persian-200 dark:text-charcoal-300">Find Your Next Adventure</Text>
					</View>
					<TouchableOpacity onPress={toggleTheme} className="p-2">
						<Ionicons 
							name={theme === 'system' ? 'cog-outline' : (effectiveTheme === 'dark' ? 'moon' : 'sunny')} 
							size={24} 
							color={headerIconColor} // Use themed color
						/>
					</TouchableOpacity>
				</View>
			</View>

			{/* Content Wrapper with bottom padding */}
			<View className="flex-1" style={{ paddingBottom: insets.bottom + 75 }}>
				<ScrollView className="flex-1">
					<View className="p-6">
						{/* Categories Section */}
						<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg mb-6 border-l-4 border-saffron-700 dark:border-saffron-400">
							<View className="flex-row justify-between items-center mb-2">
								<Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400">Categories</Text>
								{selectedCategories.length > 0 && (
									<Pressable onPress={clearAllCategories}>
										<Text className="text-persian-800 dark:text-persian-300 font-medium">Clear All</Text>
									</Pressable>
								)}
							</View>
							<ScrollView 
								horizontal 
								showsHorizontalScrollIndicator={false}
								className="flex-row py-1"
							>
								{categories.map((category) => {
									const isSelected = selectedCategories.includes(category);
									return (
										<View
											key={category}
											className={`rounded-lg px-3 py-2 mr-2 shadow-sm ${isSelected
												? 'bg-saffron-700 dark:bg-saffron-500'
												: 'bg-sandy-100 dark:bg-charcoal-700'
											}`}
											onTouchEnd={() => toggleCategory(category)}
										>
											<View className="flex-row items-center">
												<Text
													className={`${isSelected
														? 'text-white dark:text-white'
														: 'text-sandy-700 dark:text-sandy-300'
													}`}
												>
													{category}
												</Text>
												<Text
													className={`ml-2 text-xs ${isSelected
														? 'text-saffron-100 dark:text-saffron-200'
														: 'text-sandy-600 dark:text-sandy-400'
													}`}
												>
													({getCategoryCount(category)})
												</Text>
											</View>
										</View>
									);
								})}
							</ScrollView>
						</View>

						{/* Nearby Parks Section */}
						<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-sandy-600 dark:border-sandy-400">
							<Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400">Nearby Parks</Text>
							<Text className="text-sandy-700 dark:text-sandy-300 mt-1 mb-3 font-medium">Discover parks in your area</Text>
							<View className="h-80 rounded-md overflow-hidden">
								<WisconsinMap parks={filteredParks} />
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
