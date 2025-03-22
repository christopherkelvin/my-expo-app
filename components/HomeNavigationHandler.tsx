import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from 'screens/homeScreen';
import { SettingScreen } from 'screens/settingScreen';

const Stack = createStackNavigator();

export function HomeNavigationHandler() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}
//  screenOptions={{ headerShown: false }}
