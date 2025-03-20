import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from 'components/BottomTab';
import { useFonts } from 'expo-font';
import { View, StatusBar } from 'react-native';
import './global.css';
import { AdvisorScreen } from 'screens/advisorScreen';
import { HistoryScreen } from 'screens/historyScreen';
import { HomeScreen } from 'screens/homeScreen';
import { ProfileScreen } from 'screens/profileScreen';
import colors from 'constants/colors';
export default function App() {
  const Tab = createBottomTabNavigator();
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <View className="h-full">
        <Tab.Navigator
          tabBar={(props) => <BottomTab {...props} />}
          screenOptions={{ headerShown: false }}>
          <Tab.Screen name="home" component={HomeScreen} />
          <Tab.Screen name="advisor" component={AdvisorScreen} />
          <Tab.Screen name="history" component={HistoryScreen} />
          <Tab.Screen name="profile" component={ProfileScreen} />
        </Tab.Navigator>
      </View>
      <StatusBar backgroundColor={colors.main} barStyle="light-content" />
    </NavigationContainer>
  );
}
