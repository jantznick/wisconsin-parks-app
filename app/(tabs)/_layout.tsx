import { Tabs } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';

function TabIcon({ color, focused, icon }: { color: string; focused: boolean; icon: string }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.1 : 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();
  }, [focused]);

  return (
    <Animated.View 
      style={{ 
        transform: [{ scale: scaleAnim }],
      }}
      className={`items-center justify-center w-14 h-14 rounded-full ${focused ? 'bg-persian-100' : ''}`}
    >
      <Text style={{ color }} className="text-xl">{icon}</Text>
    </Animated.View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
          borderRadius: 35,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderTopWidth: 0,
          paddingBottom: 0,
        },
        tabBarItemStyle: {
          height: 70,
          padding: 0,
        },
        tabBarActiveTintColor: '#2a9d8f', // persian-800
        tabBarInactiveTintColor: '#264653', // charcoal-900
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 8,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} icon="🏠" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} icon="🔍" />
          ),
        }}
      />
    </Tabs>
  );
}
