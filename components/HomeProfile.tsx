import Feather from '@expo/vector-icons/Feather';
import { UseTodayDate } from 'hooks/useTodayDate';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import avator from '../assets/DefaultProfile.png';
import colors from '../constants/colors';
interface HomeProfileProps {
  navigation: any;
}
export const HomeProfile = ({ navigation }: HomeProfileProps) => {
  const useTodayDate: string = UseTodayDate();
  return (
    <View className="mx-5 my-5 flex-row items-center justify-between rounded-3xl bg-primary/80 p-2">
      <Image
        source={avator}
        className="h-14 w-14 overflow-hidden rounded-full border border-secondary"
      />
      <View className="flex flex-col items-center ">
        <Text className="font-nunito-bold text-secondary">Habari 😊</Text>
        <Text className="text-secondary">{useTodayDate}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Feather name="settings" size={26} color={colors.secondary} className="pr-5" />
      </TouchableOpacity>
    </View>
  );
};
