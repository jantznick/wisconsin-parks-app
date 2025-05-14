import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WisconsinMap from '../../components/WisconsinMap';
import { PARKS } from '../../data/parks';

// Ensure PARKS is initialized
const INITIAL_PARKS = PARKS || [];

export default function ExploreScreen() {
	const insets = useSafeAreaInsets();
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

	return (
		<View className="flex-1 bg-charcoal-50">
			{/* Sticky Header */}
			<View className="bg-persian-800 px-6 pb-3" style={{ paddingTop: insets.top + 8 }}>
				<Text className="text-2xl font-bold text-white">Explore</Text>
				<Text className="text-base text-persian-200">Find Your Next Adventure</Text>
			</View>

			{/* Content Wrapper with bottom padding */}
			<View className="flex-1" style={{ paddingBottom: insets.bottom + 75 }}>
				<ScrollView className="flex-1">
					<View className="p-6">
						{/* Categories Section */}
						<View className="bg-white rounded-xl p-4 shadow-lg mb-6 border-l-4 border-saffron-700">
							<View className="flex-row justify-between items-center mb-2">
								<Text className="text-xl font-semibold text-saffron-700">Categories</Text>
								{selectedCategories.length > 0 && (
									<Pressable onPress={clearAllCategories}>
										<Text className="text-persian-800 font-medium">Clear All</Text>
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
												? 'bg-saffron-700'
												: 'bg-sandy-100'
											}`}
											onTouchEnd={() => toggleCategory(category)}
										>
											<View className="flex-row items-center">
												<Text
													className={`${isSelected
														? 'text-white'
														: 'text-sandy-700'
													}`}
												>
													{category}
												</Text>
												<Text
													className={`ml-2 text-xs ${isSelected
														? 'text-saffron-100'
														: 'text-sandy-600'
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
						<View className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-sandy-600">
							<Text className="text-xl font-semibold text-sandy-600">Nearby Parks</Text>
							<Text className="text-sandy-700 mt-1 mb-3 font-medium">Discover parks in your area</Text>
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
