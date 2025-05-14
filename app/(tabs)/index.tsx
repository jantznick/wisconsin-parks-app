import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-charcoal-50">
      <View className="h-40 bg-charcoal-900 items-center justify-center">
        <Text className="text-3xl font-bold text-saffron-700">Wisconsin Parks</Text>
        <Text className="text-lg text-charcoal-100 mt-2">Discover Nature's Beauty</Text>
      </View>
      
      <View className="p-6">
        <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <Text className="text-xl font-semibold text-charcoal-900">Featured Parks</Text>
          <Text className="text-persian-800 mt-2">Explore our most popular destinations</Text>
        </View>

        <View className="bg-white rounded-xl p-4 shadow-sm">
          <Text className="text-xl font-semibold text-charcoal-900">Recent Visits</Text>
          <Text className="text-sandy-600 mt-2">Your latest adventures</Text>
        </View>
      </View>
    </View>
  );
}
