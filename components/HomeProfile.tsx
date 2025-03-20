import Feather from '@expo/vector-icons/Feather';
import { UseTodayDate } from 'hooks/useTodayDate';
import { Text, View, Image } from 'react-native';

import avator from '../assets/profile.jpg';
import colors from '../constants/colors';
interface HomeProfileProps {
  userName: string;
}

export const HomeProfile = ({ userName }: HomeProfileProps) => {
  const useTodayDate: string = UseTodayDate();
  return (
    <View className="bg-primary mx-5 my-5 flex-row items-center justify-between rounded-3xl p-2">
      <Image
        source={avator}
        className="border-secondary h-14 w-14 overflow-hidden rounded-full border"
      />
      <View className="flex flex-col items-center ">
        <Text className="text-secondary font-nunito-bold">Hello , {userName}</Text>
        <Text className="text-secondary">{useTodayDate}</Text>
      </View>
      <Feather name="settings" size={26} color={colors.secondary} className="pr-5 " />
    </View>
  );
};
