import { UserDetails } from 'hooks/useDetails';
import { Text, View, Image, Dimensions } from 'react-native';

import avator from '../assets/profile.jpg';

export const SettingScreen = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View>
      {/* <WaveSvg /> */}
      <View className="flex items-center justify-center">
        <Image
          source={avator}
          className="rounded-full"
          style={{ width: windowWidth * 0.3, height: windowWidth * 0.3, marginTop: 20 }}
        />
        <Text className="mt-5 font-nunito-bold text-2xl">{UserDetails.name}</Text>
        <Text className="text-primary">Cryser@example.email</Text>
      </View>
    </View>
  );
};
