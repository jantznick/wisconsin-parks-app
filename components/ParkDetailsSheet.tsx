import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useActivities } from '../contexts/ActivitiesContext';
import { ParkDetailsSheetProps } from '../interfaces/ParkDetailsSheet.interfaces';
import { getActivityName } from '../utils/activities';
import { openDirections } from '../utils/map';
import { shareContent } from '../utils/share';
import AnimatedPressable from './AnimatedPressable';
import SharedParkHeader from './SharedParkHeader';

export default function ParkDetailsSheet({ park, onClose }: ParkDetailsSheetProps) {
  const router = useRouter();
  const { activities, loading: activitiesLoading, error: activitiesError } = useActivities();

  const handleViewFullDetails = () => {
    router.push(`/park/${park.id}`);
  };

  const handleShare = async () => {
    if (!park) return;
    await shareContent({
      message: `Check out ${park.name}! Find out more here: ${park.contact.website}`,
      title: `Share ${park.name}`,
      url: park.contact.website
    });
  };

  const handleOpenDirections = () => {
    if (park && park.coordinate) {
      openDirections(park.coordinate.latitude, park.coordinate.longitude);
    }
  };

  return (
    <View className="flex-1 bg-white dark:bg-charcoal-900 rounded-t-3xl overflow-hidden">
      <SharedParkHeader 
        park={park}
        leftIconName="close"
        onLeftIconPress={onClose}
        onSharePress={handleShare}
      />

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        <Text className="text-base text-charcoal-700 dark:text-charcoal-300 mb-4">{park.description}</Text>

        {/* Hours */}
        { (park.hours.open || park.hours.close) && (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Hours</Text>
            <Text className="text-charcoal-700 dark:text-charcoal-300">{park.hours.open} - {park.hours.close}</Text>
          </View>
        )}

        {/* Activities */}
        { park.activities && park.activities.length > 0 && (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Activities</Text>
            {activitiesLoading && <ActivityIndicator />}
            {activitiesError && <Text>Error loading activities.</Text>}
            {!activitiesLoading && !activitiesError && activities && (
              <View className="flex-row flex-wrap gap-2">
                {park.activities.map((activityId, index) => (
                  <View key={index} className="bg-persian-100 dark:bg-persian-800 px-3 py-1 rounded-full">
                    <Text className="text-persian-800 dark:text-persian-200">
                      {getActivityName(activityId, activities)}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Facilities */}
        { park.facilities && park.facilities.length > 0 && (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Facilities</Text>
            <View className="flex-row flex-wrap gap-2">
              {park.facilities.map((facility, index) => (
                <View key={index} className="bg-saffron-100 dark:bg-saffron-800 px-3 py-1 rounded-full">
                  <Text className="text-saffron-800 dark:text-saffron-200">{facility}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Fees */}
        { (park.entranceFee.daily || park.entranceFee.annual) && (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Entrance Fees</Text>
            {park.entranceFee.daily && <Text className="text-charcoal-700 dark:text-charcoal-300">Daily: ${park.entranceFee.daily}</Text>}
            {park.entranceFee.annual && <Text className="text-charcoal-700 dark:text-charcoal-300">Annual: ${park.entranceFee.annual}</Text>}
          </View>
        )}

        {/* Contact */}
        { (park.contact.phone || park.contact.email || park.contact.website) && (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Contact</Text>
            {park.contact.phone && <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.phone}</Text>}
            {park.contact.email && <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.email}</Text>}
            {park.contact.website && <Text className="text-persian-700 dark:text-persian-300">{park.contact.website}</Text>}
          </View>
        )}

        {/* Rules */}
        { park.rules && park.rules.length > 0 && (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Rules</Text>
            {park.rules.map((rule, index) => (
              <Text key={index} className="text-charcoal-700 dark:text-charcoal-300 mb-1">• {rule}</Text>
            ))}
          </View>
        )}

        {/* Seasonal Info */}
        { (park.seasonalInfo.bestTimeToVisit || (park.seasonalInfo.seasonalClosures && park.seasonalInfo.seasonalClosures.length > 0)) && (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Seasonal Information</Text>
            {park.seasonalInfo.bestTimeToVisit && <Text className="text-charcoal-700 dark:text-charcoal-300">Best Time to Visit: {park.seasonalInfo.bestTimeToVisit}</Text>}
            {park.seasonalInfo.seasonalClosures && park.seasonalInfo.seasonalClosures.map((closure, index) => (
              <Text key={index} className="text-charcoal-700 dark:text-charcoal-300">• {closure}</Text>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View className="p-6 pt-3 border-t border-gray-200 dark:border-charcoal-700 w-full flex-row items-stretch justify-start">
        <AnimatedPressable
          onPress={handleOpenDirections}
          className="bg-saffron-600 dark:bg-saffron-700 p-3 rounded-xl items-center justify-center aspect-square flex-none"
        >
          <Ionicons name="navigate" size={24} color="white" />
        </AnimatedPressable>
		<View className="flex-1 ml-3">
			<AnimatedPressable
			  onPress={handleViewFullDetails}
			  className="bg-persian-800 dark:bg-persian-600 py-[15px] px-6 rounded-xl"
			>
			  <Text className="text-white dark:text-persian-100 text-center font-semibold">Full Details</Text>
			</AnimatedPressable>
		</View>
      </View>
    </View>
  );
} 