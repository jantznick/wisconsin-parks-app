import React, { useRef } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelectedPark } from '../contexts/SelectedParkContext';
import { Park } from '../data/parks';
import ParkMarker from './ParkMarker';

// Wisconsin's approximate center coordinates
const WISCONSIN_CENTER = {
  latitude: 44.5,
  longitude: -89.5,
};

// Initial map region (zoomed to show most of Wisconsin)
const INITIAL_REGION = {
  ...WISCONSIN_CENTER,
  latitudeDelta: 5,
  longitudeDelta: 5,
};

interface WisconsinMapProps {
  parks?: Park[];
}

export default function WisconsinMap({ parks = [] }: WisconsinMapProps) {
  const mapRef = useRef<MapView>(null);
  const { setSelectedPark } = useSelectedPark();

  const handleMarkerPress = (park: Park) => {
    if (mapRef.current) {
      // Calculate the new latitude to position the marker 25% down from the top
      // We do this by adjusting the latitude based on the current delta
      const newLatitude = park.coordinate.latitude + (INITIAL_REGION.latitudeDelta * 0.25);
      
      mapRef.current.animateToRegion({
        latitude: newLatitude,
        longitude: park.coordinate.longitude,
        latitudeDelta: INITIAL_REGION.latitudeDelta,
        longitudeDelta: INITIAL_REGION.longitudeDelta,
      }, 500);
    }
    setSelectedPark(park);
  };

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        className="flex-1"
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsCompass
        showsScale
        showsMyLocationButton
      >
        {parks.map((park) => (
          <ParkMarker
            key={park.id}
            park={park}
            onPress={() => handleMarkerPress(park)}
          />
        ))}
      </MapView>
    </View>
  );
} 