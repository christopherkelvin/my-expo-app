import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTab } from 'components/BottomTab';
import { HomeNavigationHandler } from 'components/HomeNavigationHandler';
import colors from 'constants/colors';
import { AuthProvider, AuthContext } from 'context/AuthContext';
import { useFonts } from 'expo-font';
import { useContext } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import './global.css';
import { AdvisorScreen } from 'screens/advisorScreen';
import { HistoryScreen } from 'screens/historyScreen';
import { LoginScreen } from 'screens/loginScreen';
import { RegisterScreen } from 'screens/registerScreen';
import { useEffect } from 'react';
import { initUserTable } from './services/AuthService'; 
import {deleteUserTable} from './services/UserService';


export default function App() {

   useEffect(() => {
     initUserTable();
   }, []);

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  );
}

function MainNavigator() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.main} />
      </View>
    );
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
