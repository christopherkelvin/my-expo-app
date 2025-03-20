import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/homeScreen';
import { SettingScreen } from 'screens/settingScreen';
const Stack = createStackNavigator();

export function HomeNavigationHandler() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={SettingScreen} />
    </Stack.Navigator>
  );
}
