import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ControlScreen } from 'screens/controlScreen';
import { HomeScreen } from 'screens/homeScreen';
import { SettingScreen } from 'screens/settingScreen';
import { StatusScreen } from 'screens/statusScreen';

import colors from '../constants/colors';
const Stack = createStackNavigator();

export function HomeNavigationHandler() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Control"
        component={ControlScreen}
        options={{
          title: 'Robot Controls',
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'Robot Status',
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}
