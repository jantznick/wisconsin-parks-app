import * as Location from 'expo-location';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { useSelectedPark } from '../contexts/SelectedParkContext';
import { Park } from '../interfaces/Park.interface';
import { WisconsinMapProps } from '../interfaces/WisconsinMap.interfaces';
import ParkMarker from './ParkMarker';

// Wisconsin's approximate center coordinates
const WISCONSIN_CENTER = {
  latitude: 44.5,
  longitude: -89.5,
};

// Default zoom level if user location is not available or denied
const DEFAULT_ZOOMED_IN_WISCONSIN_REGION: Region = {
  ...WISCONSIN_CENTER,
  latitudeDelta: 3,
  longitudeDelta: 3,
};

// Zoom level for when user's location is available
const USER_LOCATION_ZOOM_DELTA = {
  latitudeDelta: 0.25,
  longitudeDelta: 0.25,
};

function WisconsinMapComponent({ parks = [], onRegionChangeComplete }: WisconsinMapProps) {
  const mapRef = useRef<MapView>(null);
  const { setSelectedPark } = useSelectedPark();
  const [currentMapRegion, setCurrentMapRegion] = useState<Region | undefined>(undefined);
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

  const handleMarkerPress = useCallback((park: Park) => {
    if (mapRef.current) {
      // Check for valid coordinates before animating
      if (typeof park.coordinate?.latitude !== 'number' || 
          typeof park.coordinate?.longitude !== 'number') {
        console.warn(`WisconsinMap: Park "${park.name}" has invalid coordinates, cannot animate to it.`);
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
  }, [setSelectedPark]);

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
        initialRegion={currentMapRegion}
        showsUserLocation
        showsCompass
        showsScale
        showsMyLocationButton
        onRegionChangeComplete={onRegionChangeComplete}
      >
        {parks.map((park) => {
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

const arePropsEqual = (prevProps: WisconsinMapProps, nextProps: WisconsinMapProps): boolean => {
  // If the array references are the same, they are equal
  if (prevProps.parks === nextProps.parks) {
    return true;
  }

  // If parks is not defined or null in one but not the other
  if (!prevProps.parks || !nextProps.parks) {
    return false;
  }

  // If lengths are different, they are not equal
  if (prevProps.parks.length !== nextProps.parks.length) {
    return false;
  }

  // Check if all park IDs are the same and in the same order
  // This assumes that if IDs and order are the same, the park objects are effectively the same for rendering purposes.
  // If other park properties could change and require a re-render, this comparison would need to be more detailed.
  for (let i = 0; i < prevProps.parks.length; i++) {
    if (prevProps.parks[i].id !== nextProps.parks[i].id) {
      return false;
    }
  }

  // If all checks pass, props are considered equal for rendering purposes
  return true;
};

export default memo(WisconsinMapComponent, arePropsEqual); 