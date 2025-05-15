import { Alert, Linking } from 'react-native';

export const openDirections = (latitude: number | null | undefined, longitude: number | null | undefined): void => {
  if (latitude == null || longitude == null) {
    Alert.alert("Cannot get directions", "Park location is not available.");
    return;
  }
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
  Linking.openURL(url).catch(err => Alert.alert("Failed to open maps", err.message));
}; 