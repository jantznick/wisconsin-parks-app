import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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

// Sample park data (we'll expand this later)
const PARKS = [
  {
    id: '1',
    name: 'Devil\'s Lake State Park',
    coordinate: {
      latitude: 43.4172,
      longitude: -89.7296,
    },
  },
  {
    id: '2',
    name: 'Peninsula State Park',
    coordinate: {
      latitude: 45.1667,
      longitude: -87.1667,
    },
  },
  {
    id: '3',
    name: 'Copper Falls State Park',
    coordinate: {
      latitude: 46.3667,
      longitude: -90.6333,
    },
  },
];

export default function WisconsinMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={INITIAL_REGION}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
      >
        {PARKS.map((park) => (
          <Marker
            key={park.id}
            coordinate={park.coordinate}
            title={park.name}
            description="Wisconsin State Park"
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
}); 