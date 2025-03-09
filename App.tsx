import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { HomeProfile } from 'components/HomeProfile';
import { useFonts } from 'expo-font';
import { UseUserName } from 'hooks/useDetails';
import { View, StatusBar } from 'react-native';
import './global.css';
export default function App() {
  const userName: string = UseUserName();
  const color = '#026a75';
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="h-full bg-[#026a75]">
      <HomeProfile userName={userName} />
      <StatusBar backgroundColor={color} />
    </View>
  );
}
