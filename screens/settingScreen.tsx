import { SettingsContent } from 'components/SettingsContent';
import { useUserDetails } from 'hooks/useDetails';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import avator from '../assets/profile.jpg';

export const SettingScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const userDetails = useUserDetails();

  return (
    <View>
      <View className="flex items-center justify-center">
        <Image
          source={avator}
          className="rounded-full"
          style={{ width: windowWidth * 0.3, height: windowWidth * 0.3, marginTop: 20 }}
        />
        <Text className="font-nunito-bold text-2xl">{userDetails[0]?.name}</Text>
        <Text className="text-primary">{userDetails[0]?.email}</Text>
        <TouchableOpacity
          className=" bg-primary"
          style={{ marginTop: 10, padding: 12, borderRadius: 20 }}>
          <Text className=" text-secondary">Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <SettingsContent />
    </View>
  );
};
