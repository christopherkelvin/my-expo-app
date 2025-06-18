import { SettingsContent } from 'components/SettingsContent';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import avator from '../assets/DefaultProfile.png';
import { useActiveUser } from 'hooks/useActiveUser';

type User = {
  email?: string;
};

export const SettingScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const user = useActiveUser() as User | null;

  return (
    <View>
      <View className="flex items-center justify-center mb-4">
        <Image
          source={avator}
          className="rounded-full"
          style={{ width: windowWidth * 0.3, height: windowWidth * 0.3, marginTop: 20 }}
        />
        {/* <Text className="font-nunito-bold text-2xl">name</Text> */}
        <Text className="text-primary">{user ? user.email : 'No email found'}</Text>
      </View>
      <SettingsContent />
    </View>
  );
};
