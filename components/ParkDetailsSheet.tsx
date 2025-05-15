import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ParkDetailsSheetProps } from '../interfaces/ParkDetailsSheet.interfaces';
import { getActivityName } from '../utils/activities';
import { shareContent } from '../utils/share';
import AnimatedPressable from './AnimatedPressable';
import SharedParkHeader from './SharedParkHeader';

export default function ParkDetailsSheet({ park, onClose }: ParkDetailsSheetProps) {
  const router = useRouter();

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
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Hours</Text>
          <Text className="text-charcoal-700 dark:text-charcoal-300">{park.hours.open} - {park.hours.close}</Text>
        </View>

        {/* Activities */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Activities</Text>
          <View className="flex-row flex-wrap gap-2">
            {park.activities.map((activity, index) => (
              <View key={index} className="bg-persian-100 dark:bg-persian-800 px-3 py-1 rounded-full">
                <Text className="text-persian-800 dark:text-persian-200">{getActivityName(activity)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Facilities */}
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

        {/* Fees */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Entrance Fees</Text>
          <Text className="text-charcoal-700 dark:text-charcoal-300">Daily: ${park.entranceFee.daily}</Text>
          <Text className="text-charcoal-700 dark:text-charcoal-300">Annual: ${park.entranceFee.annual}</Text>
        </View>

        {/* Contact */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Contact</Text>
          <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.phone}</Text>
          <Text className="text-charcoal-700 dark:text-charcoal-300">{park.contact.email}</Text>
          <Text className="text-persian-700 dark:text-persian-300">{park.contact.website}</Text>
        </View>

        {/* Rules */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Rules</Text>
          {park.rules.map((rule, index) => (
            <Text key={index} className="text-charcoal-700 dark:text-charcoal-300 mb-1">• {rule}</Text>
          ))}
        </View>

        {/* Seasonal Info */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-charcoal-900 dark:text-charcoal-100 mb-2">Seasonal Information</Text>
          <Text className="text-charcoal-700 dark:text-charcoal-300">Best Time to Visit: {park.seasonalInfo.bestTimeToVisit}</Text>
          {park.seasonalInfo.seasonalClosures.map((closure, index) => (
            <Text key={index} className="text-charcoal-700 dark:text-charcoal-300">• {closure}</Text>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="p-4 border-t border-gray-200 dark:border-charcoal-700">
        <AnimatedPressable
          onPress={handleViewFullDetails}
          className="bg-persian-800 dark:bg-persian-600 py-3 rounded-xl"
        >
          <Text className="text-white dark:text-persian-100 text-center font-semibold">View Full Details</Text>
        </AnimatedPressable>
      </View>
    </View>
  );
} 