import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
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
  parks: Park[];
}

export default function WisconsinMap({ parks = [] }: WisconsinMapProps) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsCompass
        showsScale
        showsMyLocationButton
      >
        {parks.map((park) => (
          <ParkMarker key={park.id} park={park} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 12,
  },
  map: {
    width: '100%',
    height: '100%',
  },
}); 