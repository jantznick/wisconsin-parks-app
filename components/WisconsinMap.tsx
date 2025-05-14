import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { useSelectedPark } from '../contexts/SelectedParkContext';
import { Park } from '../data/parks';
import ParkMarker from './ParkMarker';

// Wisconsin's approximate center coordinates
const WISCONSIN_CENTER = {
  latitude: 44.5,
  longitude: -89.5,
};

// Default zoom level if user location is not available or denied
const DEFAULT_ZOOMED_IN_WISCONSIN_REGION: Region = {
  ...WISCONSIN_CENTER,
  latitudeDelta: 3, // More zoomed in than original 5
  longitudeDelta: 3,
};

// Zoom level for when user's location is available
const USER_LOCATION_ZOOM_DELTA = {
  latitudeDelta: 0.25, // Adjusted from 0.1
  longitudeDelta: 0.25, // Adjusted from 0.1
};

interface WisconsinMapProps {
  parks?: Park[];
}

export default function WisconsinMap({ parks = [] }: WisconsinMapProps) {
  const mapRef = useRef<MapView>(null);
  const { setSelectedPark } = useSelectedPark();
  const [currentMapRegion, setCurrentMapRegion] = useState<Region | undefined>(undefined); // Undefined initially
  const [locationPermissionStatus, setLocationPermissionStatus] = useState<Location.PermissionStatus | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermissionStatus(status);

      if (status !== 'granted') {
        console.warn('Location permission denied. Defaulting to Wisconsin center.');
        setCurrentMapRegion(DEFAULT_ZOOMED_IN_WISCONSIN_REGION);
        return;
      }

      try {
        // Set a timeout for location fetching
        const locationPromise = Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Location request timed out')), 10000)); // 10 seconds timeout

        const location = await Promise.race([locationPromise, timeoutPromise]) as Location.LocationObject;
        
        if (location && location.coords) {
          setCurrentMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            ...USER_LOCATION_ZOOM_DELTA,
          });
        } else {
          console.warn('Failed to get location or coords are null. Defaulting to Wisconsin center.');
          setCurrentMapRegion(DEFAULT_ZOOMED_IN_WISCONSIN_REGION);
        }
      } catch (error) {
        console.warn('Error fetching location or timeout:', error);
        setCurrentMapRegion(DEFAULT_ZOOMED_IN_WISCONSIN_REGION);
      }
    })();
  }, []);

  const handleMarkerPress = (park: Park) => {
    if (mapRef.current) {
      // Check for valid coordinates before animating
      if (typeof park.coordinate?.latitude !== 'number' || 
          typeof park.coordinate?.longitude !== 'number') {
        console.warn(`Park "${park.name}" has invalid coordinates, cannot animate to it.`);
        setSelectedPark(park); // Still select the park to show its details, even if we can't animate
        return;
      }

      // Use a more focused delta when animating to a marker
      const markerFocusDelta = USER_LOCATION_ZOOM_DELTA; 
      const newLatitude = park.coordinate.latitude + (markerFocusDelta.latitudeDelta * 0.25); // Adjust for marker visibility
      
      mapRef.current.animateToRegion({
        latitude: newLatitude,
        longitude: park.coordinate.longitude,
        ...markerFocusDelta
      }, 500);
    }
    setSelectedPark(park);
  };

  // Display a loading indicator or a message while region is being determined
  if (!currentMapRegion) {
    return (
      <View className="flex-1 items-center justify-center bg-charcoal-50 dark:bg-charcoal-900">
        <ActivityIndicator size="large" />
        <Text className="mt-2 text-charcoal-700 dark:text-charcoal-300">
          {locationPermissionStatus === null ? 'Requesting location permission...' : 'Getting your location...'}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        className="flex-1"
        initialRegion={currentMapRegion} // Use the dynamic region
        showsUserLocation // This will show the blue dot for user's location
        showsCompass
        showsScale
        showsMyLocationButton
      >
        {parks.map((park) => {
          // Check for valid coordinates before rendering ParkMarker
          if (typeof park.coordinate?.latitude !== 'number' || 
              typeof park.coordinate?.longitude !== 'number') {
            console.warn(`Park "${park.name}" (ID: ${park.id}) has missing or invalid coordinates. Not rendering marker.`);
            return null; // Do not render a marker if coordinates are invalid
          }
          return (
            <ParkMarker
              key={park.id}
              park={park}
              onPress={() => handleMarkerPress(park)}
            />
          );
        })}
      </MapView>
    </View>
  );
} 