import { getActivityName } from '@/utils/activities';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import WisconsinMap from '../../components/WisconsinMap';
import { useActivities } from '../../contexts/ActivitiesContext';
import { useFeatureFlags } from '../../contexts/FeatureFlagsContext';
import { useParks } from '../../contexts/ParksContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Park } from '../../interfaces/Park.interface';
import { getColor } from '../../utils/colors';

// Helper function to compare arrays of parks by their IDs
const areParkArraysEqual = (arr1?: Park[], arr2?: Park[]): boolean => {
	if (arr1 === arr2) return true; // Same reference
	if (!arr1 || !arr2) return false; // One is null/undefined
	if (arr1.length !== arr2.length) return false; // Different lengths
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i].id !== arr2[i].id) return false; // Different park IDs
	}
	return true; // Arrays are considered equal
};

export default function ExploreScreen() {
	const insets = useSafeAreaInsets();
	const { effectiveTheme } = useTheme();
	const { parks: INITIAL_PARKS, loading: parksLoading, error: parksError } = useParks();
	const { activities, loading: activitiesLoading, error: activitiesError } = useActivities();
	const { featureFlags } = useFeatureFlags();
	const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
	const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
	const [feeFilter, setFeeFilter] = useState<'any' | 'free' | 'paid'>('any');
	const [dogFriendlyOnly, setDogFriendlyOnly] = useState<boolean>(false);
	const [accessibleOnly, setAccessibleOnly] = useState<boolean>(false);
	// State for collapsible sections
	const [activitiesExpanded, setActivitiesExpanded] = useState(false);
	const [showAllActivitiesButton, setShowAllActivitiesButton] = useState(false); // New state for toggling all activities view
	const [facilitiesExpanded, setFacilitiesExpanded] = useState(false);
	const [feeExpanded, setFeeExpanded] = useState(false);
	const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);

	// Calculate active filter counts for display on headers
	const activeCategoryFiltersCount = selectedCategories.length;
	const activeFacilityFiltersCount = selectedFacilities.length;
	const activeFeeFilterCount = feeFilter !== 'any' ? 1 : 0;
	const activeAmenityFiltersCount = (dogFriendlyOnly ? 1 : 0) + (accessibleOnly ? 1 : 0);

	// Get unique activities & facilities from all parks
	const categories = useMemo(() => [...new Set(INITIAL_PARKS.flatMap(park => park.activities || []))].filter(Boolean).sort((a,b) => a - b), [INITIAL_PARKS]);
	const facilities = useMemo(() => [...new Set(INITIAL_PARKS.flatMap(park => park.facilities || []))].filter(Boolean).sort(), [INITIAL_PARKS]);

	const FEE_OPTIONS = [
		{key: 'any', label: 'All Fees'},
		{key: 'free', label: 'Free Entry'},
		{key: 'paid', label: 'Has Fee'}
	];

	const previousFilteredParksRef = useRef<Park[]>([]);

	// Enhanced filtering logic
	const filteredParksData = useMemo(() => {
		let parksToFilter: Park[] = INITIAL_PARKS || [];

		// Filter by selected categories (park must have at least one)
		if (selectedCategories.length > 0) {
			parksToFilter = parksToFilter.filter((park: Park) =>
				selectedCategories.some(category => park.activities?.includes(category))
			);
		}

		// Filter by selected facilities (park must have all selected)
		if (selectedFacilities.length > 0) {
			parksToFilter = parksToFilter.filter((park: Park) =>
				selectedFacilities.every(facility => park.facilities?.includes(facility))
			);
		}

		// Filter by entrance fee
		if (feeFilter === 'free') {
			parksToFilter = parksToFilter.filter((park: Park) => !park.entranceFee || park.entranceFee.daily === 0 || park.entranceFee.daily === null);
		} else if (feeFilter === 'paid') {
			parksToFilter = parksToFilter.filter((park: Park) => park.entranceFee && typeof park.entranceFee.daily === 'number' && park.entranceFee.daily > 0);
		}

		// Filter by dog-friendly
		if (dogFriendlyOnly) {
			parksToFilter = parksToFilter.filter((park: Park) => park.isDogFriendly === true);
		}

		// Filter by accessible
		if (accessibleOnly) {
			parksToFilter = parksToFilter.filter((park: Park) => park.isAccessible === true);
		}

		// Compare with the previous list and return the old reference if content is the same.
		if (areParkArraysEqual(previousFilteredParksRef.current, parksToFilter)) {
			return previousFilteredParksRef.current!; // Assert non-null as it's equal to parksToFilter which is an array
		}
		previousFilteredParksRef.current = parksToFilter;
		return parksToFilter;
	}, [INITIAL_PARKS, selectedCategories, selectedFacilities, feeFilter, dogFriendlyOnly, accessibleOnly]);

	// Calculate park counts for each category, considering other active filters
	const getCategoryCount = (category: number) => {
		return filteredParksData.filter((park: Park) => park.activities?.includes(category)).length;
	};

	// Calculate park counts for each facility, considering other active filters
	const getFacilityCount = (facility: string) => {
		return filteredParksData.filter((park: Park) => park.facilities?.includes(facility)).length;
	};

	const toggleCategory = (category: number) => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(c => c !== category)
				: [...prev, category]
		);
	};

	const toggleFacility = (facility: string) => {
		setSelectedFacilities(prev => 
			prev.includes(facility)
				? prev.filter(f => f !== facility)
				: [...prev, facility]
		);
	};

	const clearSelectedCategories = () => {
		setSelectedCategories([]);
	};

	const clearSelectedFacilities = () => {
		setSelectedFacilities([]);
	};

	const handleFeeFilterChange = (optionKey: 'any' | 'free' | 'paid') => {
		setFeeFilter(optionKey);
	};

	const clearAllFilters = () => {
		setSelectedCategories([]);
		setSelectedFacilities([]);
		setFeeFilter('any');
		setDogFriendlyOnly(false);
		setAccessibleOnly(false);
	};

	const areAnyFiltersActive = selectedCategories.length > 0 || selectedFacilities.length > 0 || feeFilter !== 'any' || dogFriendlyOnly || accessibleOnly;

	if (parksLoading || activitiesLoading) {
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" />
				<Text>Loading data...</Text>
			</View>
		);
	}

	if (parksError || activitiesError) {
		return (
			<View className="flex-1 justify-center items-center">
				<Text>Error loading data: {parksError?.message || activitiesError?.message}</Text>
			</View>
		);
	}

	return (
		<View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
			{/* Use CustomHeader */}
			<CustomHeader title="Explore" subtitle="Find Your Next Adventure" />

			{/* Content Wrapper with bottom padding */}
			<View className="flex-1" style={{ paddingBottom: insets.bottom + 75 }}>
				<ScrollView className="flex-1">
					<View className="p-6">
						{/* Filters Section Title / Clear All Button */}
						<View className="flex-row justify-between items-center mb-3">
							<Text className="text-2xl font-bold text-persian-800 dark:text-persian-300">Filters</Text>
							{areAnyFiltersActive && (
								<Pressable onPress={clearAllFilters}>
									<Text className="text-persian-800 dark:text-persian-300 font-medium">Clear All Filters</Text>
								</Pressable>
							)}
						</View>

						{/* Categories Section (now Activities) */}
						{featureFlags?.explorePage?.filterBy?.activities && (
						<View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-saffron-700 dark:border-saffron-400 overflow-hidden">
							<Pressable 
								onPress={() => setActivitiesExpanded(!activitiesExpanded)}
								className="p-4 flex-row justify-between items-center"
							>
								<Text className="text-xl font-semibold text-saffron-700 dark:text-saffron-400">
									Activities {activeCategoryFiltersCount > 0 ? `(${activeCategoryFiltersCount})` : ''}
								</Text>
								<View className="flex-row items-center">
									{selectedCategories.length > 0 && activitiesExpanded && (
										<Pressable onPress={clearSelectedCategories} className="mr-3">
											<Text className="text-persian-800 dark:text-persian-300 font-medium text-sm">Clear</Text>
										</Pressable>
									)}
									<Ionicons name={activitiesExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'saffron-300' : 'saffron-700')} />
								</View>
							</Pressable>
							{activitiesExpanded && (
								<View className="px-4 pb-4 pt-0">
									{showAllActivitiesButton ? (
										<View className="flex-row flex-wrap py-1">
											{categories.map((category) => {
												const isSelected = selectedCategories.includes(category);
												return (
													<View
														key={category}
														className={`rounded-lg px-3 py-2 mr-2 mb-2 shadow-sm ${isSelected
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
																{getActivityName(category, activities)}
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
										</View>
									) : (
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
																{getActivityName(category, activities)}
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
									)}
									{/* Toggle button for showing all activities */}
									{categories.length > 5 && ( // Only show if there are enough items to warrant expanding
										<Pressable 
											onPress={() => setShowAllActivitiesButton(!showAllActivitiesButton)} 
											className="py-2 mt-2 flex-row items-center justify-center"
										>
											<Ionicons 
												name={showAllActivitiesButton ? "chevron-up" : "chevron-down"} 
												size={18} 
												color={getColor(effectiveTheme === 'dark' ? 'saffron-300' : 'saffron-700')} />
										</Pressable>
									)}
								</View>
							)}
						</View>
						)}

						{/* Facilities Section */}
						{featureFlags?.explorePage?.filterBy?.facilities && (
						<View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-burnt-600 dark:border-burnt-400 overflow-hidden">
							<Pressable 
								onPress={() => setFacilitiesExpanded(!facilitiesExpanded)}
								className="p-4 flex-row justify-between items-center"
							>
								<Text className="text-xl font-semibold text-burnt-600 dark:text-burnt-400">
									Facilities {activeFacilityFiltersCount > 0 ? `(${activeFacilityFiltersCount})` : ''}
								</Text>
								<View className="flex-row items-center">
									{selectedFacilities.length > 0 && facilitiesExpanded && (
										<Pressable onPress={clearSelectedFacilities} className="mr-3">
											<Text className="text-persian-800 dark:text-persian-300 font-medium text-sm">Clear</Text>
										</Pressable>
									)}
									<Ionicons name={facilitiesExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'burnt-300' : 'burnt-600')} />
								</View>
							</Pressable>
							{facilitiesExpanded && (
								<View className="px-4 pb-4 pt-0">
									<ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row py-1">
										{facilities.map((facility) => {
											const isSelected = selectedFacilities.includes(facility);
											return (
												<View
													key={facility}
													className={`rounded-lg px-3 py-2 mr-2 shadow-sm ${isSelected
														? 'bg-burnt-600 dark:bg-burnt-500' 
														: 'bg-sandy-100 dark:bg-charcoal-700' 
													}`}
													onTouchEnd={() => toggleFacility(facility)}
												>
													<View className="flex-row items-center">
														<Text className={`${isSelected ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'}`}>{facility}</Text>
														<Text className={`ml-2 text-xs ${isSelected ? 'text-burnt-100 dark:text-burnt-200' : 'text-sandy-600 dark:text-sandy-400'}`}>({getFacilityCount(facility)})</Text>
													</View>
												</View>
											);
										})}
									</ScrollView>
								</View>
							)}
						</View>
						)}

						{/* Entrance Fee Section */}
						<View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-persian-700 dark:border-persian-500 overflow-hidden">
							<Pressable 
								onPress={() => setFeeExpanded(!feeExpanded)}
								className="p-4 flex-row justify-between items-center"
							>
								<Text className="text-xl font-semibold text-persian-700 dark:text-persian-400">
									Entrance Fee {activeFeeFilterCount > 0 ? `(${activeFeeFilterCount})` : ''}
								</Text>
								<Ionicons name={feeExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'persian-300' : 'persian-700')} />
							</Pressable>
							{feeExpanded && (
								<View className="px-4 pb-4 pt-0">
									<View className="flex-row justify-around mt-1">
										{FEE_OPTIONS.map((option) => {
											const isSelected = feeFilter === option.key;
											return (
												<Pressable
													key={option.key}
													className={`rounded-lg px-4 py-2 shadow-sm flex-1 mx-1 items-center ${isSelected
														? 'bg-persian-700 dark:bg-persian-500'
														: 'bg-sandy-100 dark:bg-charcoal-700'
													}`}
													onPress={() => handleFeeFilterChange(option.key as 'any' | 'free' | 'paid')}
												>
													<Text className={`${isSelected ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'} font-medium`}>{option.label}</Text>
												</Pressable>
											);
										})}
									</View>
								</View>
							)}
						</View>

						{/* Amenities Section (Dog Friendly, Accessible) */}
						{featureFlags?.explorePage?.filterBy?.other?.dogFriendly || featureFlags?.explorePage?.filterBy?.other?.accessible && (
						<View className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg mb-6 border-l-4 border-sandy-600 dark:border-sandy-400 overflow-hidden">
							<Pressable 
								onPress={() => setAmenitiesExpanded(!amenitiesExpanded)}
								className="p-4 flex-row justify-between items-center"
							>
								<Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400">
									Other Amenities {activeAmenityFiltersCount > 0 ? `(${activeAmenityFiltersCount})` : ''}
								</Text>
								<Ionicons name={amenitiesExpanded ? "chevron-up" : "chevron-down"} size={20} color={getColor(effectiveTheme === 'dark' ? 'sandy-300' : 'sandy-600')} />
							</Pressable>
							{amenitiesExpanded && (
								<View className="px-4 pb-4 pt-2">
									<View className="flex-col space-y-3">
										{/* Dog Friendly Toggle */}
										{featureFlags?.explorePage?.filterBy?.other?.dogFriendly && (
										<Pressable 
											className={`flex-row items-center justify-between p-3 rounded-lg shadow-sm ${dogFriendlyOnly ? 'bg-sandy-600 dark:bg-sandy-500' : 'bg-sandy-100 dark:bg-charcoal-700'}`}
											onPress={() => setDogFriendlyOnly(!dogFriendlyOnly)}
										>
											<View className="flex-row items-center">
												<Ionicons name="paw" size={22} color={dogFriendlyOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-300' : 'sandy-700')} />
												<Text className={`ml-3 text-base font-medium ${dogFriendlyOnly ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'}`}>Dog Friendly</Text>
											</View>
											<Ionicons name={dogFriendlyOnly ? "checkbox" : "square-outline"} size={24} color={dogFriendlyOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-400' : 'sandy-600')} />
										</Pressable>
										)}

										{/* Accessible Toggle */}
										{featureFlags?.explorePage?.filterBy?.other?.accessible && (
										<Pressable 
											className={`flex-row items-center justify-between p-3 rounded-lg shadow-sm ${accessibleOnly ? 'bg-sandy-600 dark:bg-sandy-500' : 'bg-sandy-100 dark:bg-charcoal-700'}`}
											onPress={() => setAccessibleOnly(!accessibleOnly)}
										>
											<View className="flex-row items-center">
												<Ionicons name="accessibility" size={22} color={accessibleOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-300' : 'sandy-700')} />
												<Text className={`ml-3 text-base font-medium ${accessibleOnly ? 'text-white dark:text-white' : 'text-sandy-700 dark:text-sandy-300'}`}>Accessible</Text>
											</View>
											<Ionicons name={accessibleOnly ? "checkbox" : "square-outline"} size={24} color={accessibleOnly ? 'white' : getColor(effectiveTheme === 'dark' ? 'sandy-400' : 'sandy-600')} />
										</Pressable>
										)}
									</View>
								</View>
							)}
						</View>
						)}

						{/* Nearby Parks Section */}
						<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-sandy-600 dark:border-sandy-400">
							<Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400">Nearby Parks</Text>
							<Text className="text-sandy-700 dark:text-sandy-300 mt-1 mb-3 font-medium">Discover parks in your area</Text>
							<View style={{ height: 300, width: '100%', marginBottom: 16 }}>
								<WisconsinMap parks={filteredParksData} />
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
