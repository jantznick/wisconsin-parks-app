import WisconsinMap from '@/components/WisconsinMap';
import { Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View className="flex-1 bg-charcoal-50">
      <View className="h-40 bg-persian-800 items-center justify-center">
        <Text className="text-3xl font-bold text-white">Explore</Text>
        <Text className="text-lg text-persian-100 mt-2">Find Your Next Adventure</Text>
      </View>

      <View className="flex-1 p-6 pb-24">
        <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <Text className="text-xl font-semibold text-charcoal-900">Categories</Text>
          <View className="flex-row flex-wrap mt-2">
            <View className="bg-saffron-100 rounded-lg px-3 py-2 mr-2 mb-2">
              <Text className="text-saffron-800">Hiking</Text>
            </View>
            <View className="bg-sandy-100 rounded-lg px-3 py-2 mr-2 mb-2">
              <Text className="text-sandy-800">Camping</Text>
            </View>
            <View className="bg-burnt-100 rounded-lg px-3 py-2 mr-2 mb-2">
              <Text className="text-burnt-800">Fishing</Text>
            </View>
          </View>
        </View>

        <View className="flex-1 bg-white rounded-xl p-4 shadow-sm">
          <Text className="text-xl font-semibold text-charcoal-900">Nearby Parks</Text>
          <Text className="text-persian-700 mt-2 mb-4">Discover parks in your area</Text>
          <View className="flex-1">
            <WisconsinMap />
          </View>
        </View>
      </View>
    </View>
  );
}
