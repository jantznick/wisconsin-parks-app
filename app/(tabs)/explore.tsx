import React, { useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import WisconsinMap from '../../components/WisconsinMap';
import ActivitiesFilter from '../../components/exploreScreen/ActivitiesFilter';
import AmenitiesFilter from '../../components/exploreScreen/AmenitiesFilter';
import FacilitiesFilter from '../../components/exploreScreen/FacilitiesFilter';
import FeeFilter from '../../components/exploreScreen/FeeFilter';
import { useActivities } from '../../contexts/ActivitiesContext';
import { useFeatureFlags } from '../../contexts/FeatureFlagsContext';
import { useParks } from '../../contexts/ParksContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Park } from '../../interfaces/Park.interface';

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

	// Calculate active filter counts for display on headers
	const activeCategoryFiltersCount = selectedCategories.length;
	const activeFacilityFiltersCount = selectedFacilities.length;
	const activeFeeFilterCount = feeFilter !== 'any' ? 1 : 0;
	const activeAmenityFiltersCount = (dogFriendlyOnly ? 1 : 0) + (accessibleOnly ? 1 : 0);

	// Get unique activities & facilities from all parks
	const categories = useMemo(() => [...new Set(INITIAL_PARKS.flatMap(park => park.activities || []))].filter(Boolean).sort((a,b) => a - b), [INITIAL_PARKS]);
	const facilities = useMemo(() => [...new Set(INITIAL_PARKS.flatMap(park => park.facilities || []))].filter(Boolean).sort(), [INITIAL_PARKS]);

	const FEE_OPTIONS = [
		{key: 'any' as 'any' | 'free' | 'paid', label: 'All Fees'},
		{key: 'free' as 'any' | 'free' | 'paid', label: 'Free Entry'},
		{key: 'paid' as 'any' | 'free' | 'paid', label: 'Has Fee'}
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
							<ActivitiesFilter
								activities={activities} // Pass the full activities array for names
								allActivityIds={categories} // Pass the unique category IDs
								selectedCategories={selectedCategories}
								toggleCategory={toggleCategory}
								clearSelectedCategories={clearSelectedCategories}
								getCategoryCount={getCategoryCount}
								effectiveTheme={effectiveTheme}
								activeCategoryFiltersCount={activeCategoryFiltersCount}
							/>
						)}

						{/* Facilities Section */}
						{featureFlags?.explorePage?.filterBy?.facilities && (
							<FacilitiesFilter
								facilities={facilities}
								selectedFacilities={selectedFacilities}
								toggleFacility={toggleFacility}
								clearSelectedFacilities={clearSelectedFacilities}
								getFacilityCount={getFacilityCount}
								effectiveTheme={effectiveTheme}
								activeFacilityFiltersCount={activeFacilityFiltersCount}
							/>
						)}

						{/* Entrance Fee Section */}
						<FeeFilter
							feeFilter={feeFilter}
							handleFeeFilterChange={handleFeeFilterChange}
							effectiveTheme={effectiveTheme}
							activeFeeFilterCount={activeFeeFilterCount}
							FEE_OPTIONS={FEE_OPTIONS}
						/>

						{/* Amenities Section (Dog Friendly, Accessible) */}
						{(featureFlags?.explorePage?.filterBy?.other?.dogFriendly || featureFlags?.explorePage?.filterBy?.other?.accessible) && (
							<AmenitiesFilter
								dogFriendlyOnly={dogFriendlyOnly}
								setDogFriendlyOnly={setDogFriendlyOnly}
								accessibleOnly={accessibleOnly}
								setAccessibleOnly={setAccessibleOnly}
								effectiveTheme={effectiveTheme}
								activeAmenityFiltersCount={activeAmenityFiltersCount}
								featureFlags={featureFlags}
							/>
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
