import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from 'screens/homeScreen';
import { SettingScreen } from 'screens/settingScreen';

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
    </Stack.Navigator>
  );
}
