import { getActivityName } from '@/utils/activities';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Platform,
	Pressable,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { Region } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import WisconsinMap from '../../components/WisconsinMap';
import { useActivities } from '../../contexts/ActivitiesContext';
import { useFeatureFlags } from '../../contexts/FeatureFlagsContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Park } from '../../interfaces/Park.interface';
import { getColor } from '../../utils/colors';

// App Attest and related imports
import * as Crypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';
import stringify from 'json-stable-stringify';
import * as AppAttest from 'react-native-ios-appattest';

const KEY_ID_STORAGE_KEY = 'appAttestKeyId';

// Define a type for map boundaries
interface MapBounds {
	minLat: number;
	minLng: number;
	maxLat: number;
	maxLng: number;
}

// API URL - consider moving to a config file
const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL if different

// Debounce function
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	const debounced = (...args: Parameters<F>) => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(() => func(...args), waitFor);
	};

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
}

// Helper function to compare arrays of parks by their IDs
const areParkArraysEqual = (arr1?: Park[], arr2?: Park[]): boolean => {
	if (arr1 === arr2) return true; 
	if (!arr1 || !arr2) return false; 
	if (arr1.length !== arr2.length) return false; 
	
	const ids1 = new Set(arr1.map(p => p.id));
	const ids2 = new Set(arr2.map(p => p.id));
	if (ids1.size !== ids2.size) return false; 
	for (const id of ids1) {
		if (!ids2.has(id)) return false; 
	}
	return true; 
};

// Helper to compute SHA256 and return Base64
async function sha256base64(message: string): Promise<string> {
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        message,
        { encoding: Crypto.CryptoEncoding.BASE64 }
    );
    return digest;
}

export default function ExploreScreen() {
	const insets = useSafeAreaInsets();
	const { effectiveTheme } = useTheme();
	const { activities, loading: activitiesLoading, error: activitiesError } = useActivities();
	const { featureFlags } = useFeatureFlags();

	// App Attest State
	const [appAttestKeyId, setAppAttestKeyId] = useState<string | null>(null);
	const [isAttestationInProgress, setIsAttestationInProgress] = useState<boolean>(false);
	const [attestationError, setAttestationError] = useState<string | null>(null);

	// State for dynamically fetched parks based on map viewport
	const [mapViewportParks, setMapViewportParks] = useState<Park[]>([]);
	const [isMapParksLoading, setIsMapParksLoading] = useState<boolean>(false);
	const [mapParksError, setMapParksError] = useState<string | null>(null);
	const [currentMapBounds, setCurrentMapBounds] = useState<MapBounds | null>(null);

	const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
	const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
	const [feeFilter, setFeeFilter] = useState<'any' | 'free' | 'paid'>('any');
	const [dogFriendlyOnly, setDogFriendlyOnly] = useState<boolean>(false);
	const [accessibleOnly, setAccessibleOnly] = useState<boolean>(false);
	const [activitiesExpanded, setActivitiesExpanded] = useState(false);
	const [showAllActivitiesButton, setShowAllActivitiesButton] = useState(false); 
	const [facilitiesExpanded, setFacilitiesExpanded] = useState(false);
	const [feeExpanded, setFeeExpanded] = useState(false);
	const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);

	const activeCategoryFiltersCount = selectedCategories.length;
	const activeFacilityFiltersCount = selectedFacilities.length;
	const activeFeeFilterCount = feeFilter !== 'any' ? 1 : 0;
	const activeAmenityFiltersCount = (dogFriendlyOnly ? 1 : 0) + (accessibleOnly ? 1 : 0);

	const categories = useMemo(() => [...new Set(mapViewportParks.flatMap(park => park.activities || []))].filter(Boolean).sort((a,b) => a - b), [mapViewportParks]);
	const facilities = useMemo(() => [...new Set(mapViewportParks.flatMap(park => park.facilities || []))].filter(Boolean).sort(), [mapViewportParks]);

	const FEE_OPTIONS = [
		{key: 'any', label: 'All Fees'},
		{key: 'free', label: 'Free Entry'},
		{key: 'paid', label: 'Has Fee'}
	];

	const previousFilteredParksRef = useRef<Park[]>([]);

	const handleInitialAttestation = useCallback(async () => {
		if (Platform.OS !== 'ios') {
			setAttestationError('App Attest is only supported on iOS.');
			return null;
		}
		setIsAttestationInProgress(true);
		setAttestationError(null);
		try {
			const supported = await AppAttest.attestationSupported();
			if (!supported) {
				throw new Error('App Attest not supported on this device/OS version.');
			}

			console.log('App Attest supported, generating keys...');
			const newKeyId = await AppAttest.generateKeys();
			console.log('Generated App Attest Key ID:', newKeyId);

			// Fetch challenge from server
			console.log('Fetching challenge from server...');
			const challengeResponse = await fetch(`${API_BASE_URL}/attest/challenge`, { method: 'POST' });
			if (!challengeResponse.ok) {
				throw new Error(`Failed to fetch challenge: ${challengeResponse.status}`);
			}
			const { challenge: serverChallenge } = await challengeResponse.json();
			console.log('Received server challenge:', serverChallenge);

			const challengeHashBase64 = await sha256base64(serverChallenge);
			console.log('Challenge hash (Base64) for attestKeys:', challengeHashBase64);

			console.log('Attesting keys with Apple...');
			const attestationBase64 = await AppAttest.attestKeys(newKeyId, challengeHashBase64);
			console.log('Received attestation object (Base64)');

			// Send attestation to server for verification
			console.log('Sending attestation to server for verification...');
			const verifyResponse = await fetch(`${API_BASE_URL}/attest/verify`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: stringify({
					keyId: newKeyId,
					attestation: attestationBase64,
					challenge: serverChallenge, // Original server challenge
				}),
			});

			if (!verifyResponse.ok) {
				const errorBody = await verifyResponse.text();
				console.error('Server verification failed:', errorBody);
				throw new Error(`Server verification failed: ${verifyResponse.status} - ${errorBody}`);
			}

			console.log('Server verified attestation successfully!');
			await SecureStore.setItemAsync(KEY_ID_STORAGE_KEY, newKeyId);
			setAppAttestKeyId(newKeyId);
			return newKeyId;
		} catch (error: any) {
			console.error('Initial attestation process failed:', error);
			setAttestationError(error.message || 'An unknown error occurred during attestation.');
			Alert.alert("Attestation Error", error.message || "Could not initialize app security features.");
            return null;
		} finally {
			setIsAttestationInProgress(false);
		}
	}, []);

	useEffect(() => {
		const loadKeyOrAttest = async () => {
			if (Platform.OS !== 'ios') return;
			const storedKeyId = await SecureStore.getItemAsync(KEY_ID_STORAGE_KEY);
			if (storedKeyId) {
				console.log('Found stored App Attest Key ID:', storedKeyId);
				setAppAttestKeyId(storedKeyId);
			} else {
				console.log('No stored Key ID found, starting initial attestation...');
				await handleInitialAttestation();
			}
		};
		loadKeyOrAttest();
	}, [handleInitialAttestation]);

	const fetchParksForRegion = useCallback(async (bounds: MapBounds) => {
		if (!bounds) return;

		if (Platform.OS !== 'ios') {
			console.warn("App Attest not applicable on this platform. Fetching parks without assertion.");
			// Fallback or different fetch logic for non-iOS if needed, or show error.
			// For now, let's just proceed with a basic fetch for dev purposes if API allows.
		} else if (!appAttestKeyId) {
			console.warn('App Attest Key ID not available. Parks fetch will be skipped or delayed.');
			setMapParksError('App security key not ready. Please wait or restart the app.');
            if (!isAttestationInProgress) {
                console.log("Attempting to re-initiate attestation from fetchParksForRegion as keyId is missing.");
                handleInitialAttestation(); // Attempt to get key if missing and not already trying
            }
			return;
		}

		setIsMapParksLoading(true);
		setMapParksError(null);
		console.log('Fetching parks for bounds:', bounds);

		try {
			const clientRequestChallenge = `client-parks-challenge-${Date.now()}-${Math.random()}`;
			const requestBodyForParksAPI = {
				minLat: bounds.minLat,
				minLng: bounds.minLng,
				maxLat: bounds.maxLat,
				maxLng: bounds.maxLng,
				challenge: clientRequestChallenge, 
			};

			const stringifiedBody = stringify(requestBodyForParksAPI);
			const clientDataHashBase64 = await sha256base64(stringifiedBody);

			let headers: HeadersInit = {
				'Content-Type': 'application/json',
			};

            if (Platform.OS === 'ios' && appAttestKeyId) {
                console.log('Generating assertion for parks request...');
                const assertionBase64 = await AppAttest.attestRequestData(
                    clientDataHashBase64,
                    appAttestKeyId
                );
                console.log('Assertion generated.');

                const appAttestHeaderValue = Buffer.from(
                    stringify({
                        keyId: appAttestKeyId,
                        assertion: assertionBase64,
                        challenge: clientRequestChallenge, // The challenge included in the hashed body
                        requestPayloadSHA256: clientDataHashBase64,
                    })
                ).toString('base64');

                headers['X-App-Attest-Assertion'] = appAttestHeaderValue;
            }

			const response = await fetch(`${API_BASE_URL}/parks`, {
				method: 'POST',
				headers: headers,
				body: stringifiedBody, // Already stringified for hashing
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ message: 'Failed to fetch parks and parse error' }));
				console.error('API Error during parks fetch:', response.status, errorData);
				throw new Error(errorData.error || `HTTP error ${response.status}`);
			}

			const result = await response.json();
			const fetchedParks = Array.isArray(result.data) ? result.data : [];
			console.log('Fetched parks:', fetchedParks.length);
			setMapViewportParks(fetchedParks);
		} catch (error: any) {
			console.error('Error fetching parks for region:', error);
			setMapParksError(error.message || 'An unknown error occurred');
			setMapViewportParks([]); 
		} finally {
			setIsMapParksLoading(false);
		}
	}, [appAttestKeyId, isAttestationInProgress, handleInitialAttestation]);

	const debouncedFetchParksForRegion = useMemo(
		() => debounce(fetchParksForRegion, 1000), 
		[fetchParksForRegion]
	);
	
	const handleRegionChangeComplete = (region: Region) => {
		const bounds: MapBounds = {
			minLat: region.latitude - region.latitudeDelta / 2,
			maxLat: region.latitude + region.latitudeDelta / 2,
			minLng: region.longitude - region.longitudeDelta / 2,
			maxLng: region.longitude + region.longitudeDelta / 2,
		};
		setCurrentMapBounds(bounds); 
		debouncedFetchParksForRegion(bounds);
	};

	const filteredParksData = useMemo(() => {
		let parksToFilter: Park[] = mapViewportParks || []; 

		if (selectedCategories.length > 0) {
			parksToFilter = parksToFilter.filter((park: Park) =>
				selectedCategories.some(category => park.activities?.includes(category))
			);
		}

		if (selectedFacilities.length > 0) {
			parksToFilter = parksToFilter.filter((park: Park) =>
				selectedFacilities.every(facility => park.facilities?.includes(facility))
			);
		}

		if (feeFilter === 'free') {
			parksToFilter = parksToFilter.filter((park: Park) => !park.entranceFee || park.entranceFee.daily === 0 || park.entranceFee.daily === null);
		} else if (feeFilter === 'paid') {
			parksToFilter = parksToFilter.filter((park: Park) => park.entranceFee && typeof park.entranceFee.daily === 'number' && park.entranceFee.daily > 0);
		}

		if (dogFriendlyOnly) {
			parksToFilter = parksToFilter.filter((park: Park) => park.isDogFriendly === true);
		}

		if (accessibleOnly) {
			parksToFilter = parksToFilter.filter((park: Park) => park.isAccessible === true);
		}

		if (areParkArraysEqual(previousFilteredParksRef.current, parksToFilter)) {
			return previousFilteredParksRef.current!;
		}
		previousFilteredParksRef.current = parksToFilter;
		return parksToFilter;
	}, [mapViewportParks, selectedCategories, selectedFacilities, feeFilter, dogFriendlyOnly, accessibleOnly]);

	const getCategoryCount = (category: number) => {
		return filteredParksData.filter((park: Park) => park.activities?.includes(category)).length;
	};

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

	const isInitialLoading = activitiesLoading || (Platform.OS === 'ios' && isAttestationInProgress && !appAttestKeyId);

	if (isInitialLoading) {
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" />
				<Text>Loading initial data{Platform.OS === 'ios' && isAttestationInProgress && !appAttestKeyId ? ' (Securing app...)': '...'}</Text>
			</View>
		);
	}

	if (activitiesError || (Platform.OS === 'ios' && attestationError && !appAttestKeyId)) {
		return (
			<View className="flex-1 justify-center items-center p-4">
				<Text className="text-red-500 text-center">
                    Error: {activitiesError?.message || attestationError}
                    {Platform.OS === 'ios' && attestationError && " App security features could not be initialized. Some functionalities might be limited or insecure."}
                </Text>
			</View>
		);
	}

	// UI to inform user if attestation failed but activities loaded (edge case)
	// This is a bit redundant given the above, but can be a specific banner.
	const AttestationStatusBanner = () => {
		if (Platform.OS === 'ios' && attestationError && !appAttestKeyId && !isAttestationInProgress) {
			return (
				<View className="p-2 bg-red-100 border-l-4 border-red-500 mb-2">
					<Text className="text-red-700">Warning: App security features failed to initialize. Data requests may not be secure.</Text>
				</View>
			);
		}
		return null;
	};

	return (
		<View className="flex-1 bg-charcoal-50 dark:bg-charcoal-950">
			<CustomHeader title="Explore" subtitle="Find Your Next Adventure" />
			<View className="flex-1" style={{ paddingBottom: insets.bottom + 75 }}>
				<ScrollView className="flex-1">
                	<AttestationStatusBanner />
					<View className="p-6">
						{/* Filters Section */}
                        {/* ... existing filter UI ... */}
                        <View className="flex-row justify-between items-center mb-3">
							<Text className="text-2xl font-bold text-persian-800 dark:text-persian-300">Filters</Text>
							{areAnyFiltersActive && (
								<Pressable onPress={clearAllFilters}>
									<Text className="text-persian-800 dark:text-persian-300 font-medium">Clear All Filters</Text>
								</Pressable>
							)}
						</View>

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
									{categories.length > 5 && ( 
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

						{/* Parks in View Section */}
						<View className="bg-white dark:bg-charcoal-800 rounded-xl p-4 shadow-lg border-l-4 border-sandy-600 dark:border-sandy-400">
							<Text className="text-xl font-semibold text-sandy-600 dark:text-sandy-400">Parks in View</Text>
							<Text className="text-sandy-700 dark:text-sandy-300 mt-1 mb-3 font-medium">
								{isMapParksLoading ? 'Loading parks...' : `Showing ${filteredParksData.length} parks based on map and filters.`}
							</Text>
							{mapParksError && <Text className="text-red-500 mb-2">Error: {mapParksError}</Text>}
                            {Platform.OS === 'ios' && !appAttestKeyId && !isAttestationInProgress && 
                                <Text className="text-orange-500 mb-2">
                                    App security features are initializing. Park data may be delayed.
                                </Text>
                            }
							<View style={{ height: 300, width: '100%', marginBottom: 16 }}>
								<WisconsinMap
									parks={filteredParksData}
									onRegionChangeComplete={handleRegionChangeComplete} 
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
