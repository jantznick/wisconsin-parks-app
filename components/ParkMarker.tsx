import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

interface ParkMarkerProps {
  park: {
    id: string;
    name: string;
    coordinate: {
      latitude: number;
      longitude: number;
    };
    description?: string;
    activities?: string[];
  };
}

export default function ParkMarker({ park }: ParkMarkerProps) {
  return (
    <Marker
      coordinate={park.coordinate}
      title={park.name}
    >
      <View style={styles.markerContainer}>
        <View style={styles.marker}>
          <Text style={styles.markerText}>🌲</Text>
        </View>
      </View>
      <Callout tooltip>
        <View style={styles.calloutContainer}>
          <Text style={styles.calloutTitle}>{park.name}</Text>
          <View style={styles.divider} />
          <Text style={styles.calloutDescription}>
            {park.description || 'Wisconsin State Park'}
          </Text>
          {park.activities && (
            <View style={styles.activitiesContainer}>
              {park.activities.map((activity, index) => (
                <View key={index} style={styles.activityTag}>
                  <Text style={styles.activityText}>{activity}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Callout>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    backgroundColor: '#2a9d8f', // persian-800
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  markerText: {
    fontSize: 16,
  },
  calloutContainer: {
    width: 200,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#264653', // charcoal-900
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#e9c46a', // saffron
    marginVertical: 8,
  },
  calloutDescription: {
    fontSize: 14,
    color: '#2a9d8f', // persian-800
    marginBottom: 8,
  },
  activitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  activityTag: {
    backgroundColor: '#f4a261', // sandy
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activityText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
}); 