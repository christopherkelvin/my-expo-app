import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from 'components/BottomTab';
import { HomeNavigationHandler } from 'components/HomeNavigationHandler';
import colors from 'constants/colors';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import './global.css';
import { AdvisorScreen } from 'screens/advisorScreen';
import { HistoryScreen } from 'screens/historyScreen';
import { LoginScreen } from 'screens/loginScreen';
export default function App() {
  const Tab = createBottomTabNavigator();
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
        <View>
          <LoginScreen />
        </View>
      )}

      <StatusBar backgroundColor={colors.main} barStyle="light-content" />
    </NavigationContainer>
  );
}
