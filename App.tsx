import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTab } from 'components/BottomTab';
import { HomeNavigationHandler } from 'components/HomeNavigationHandler';
import colors from 'constants/colors';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import './global.css';
import { AdvisorScreen } from 'screens/advisorScreen';
import { HistoryScreen } from 'screens/historyScreen';
import { LoginScreen } from 'screens/loginScreen';
import { RegisterScreen } from 'screens/registerScreen';
export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState<boolean>(true);
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  useEffect(() => {
    setUser(false);
  }, [user]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          tabBar={(props) => <BottomTab {...props} />}
          screenOptions={{ headerShown: false }}>
          <Tab.Screen name="home" component={HomeNavigationHandler} />
          <Tab.Screen name="advisor" component={AdvisorScreen} />
          <Tab.Screen name="history" component={HistoryScreen} />
          {/* <Tab.Screen name="profile" component={ProfileScreen} /> */}
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}

      <StatusBar backgroundColor={colors.main} barStyle="light-content" />
    </NavigationContainer>
  );
}
