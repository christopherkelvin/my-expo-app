import { HomeProfile } from 'components/HomeProfile';
import { UseUserName } from 'hooks/useDetails';
import { View, Text } from 'react-native';

export const HomeScreen = () => {
  const userName: string = UseUserName();
  return (
    <View className="h-full bg-[#026a75]">
      <HomeProfile userName={userName} />
      <Text>Hello</Text>
    </View>
  );
};
