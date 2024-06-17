import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@src/screens/home';
import Settings from '@src/screens/settings';
import { Ionicons } from '@expo/vector-icons';

export const BottomTabs = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: true,
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="Home Tab"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cloudy"
              size={28}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={28}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
