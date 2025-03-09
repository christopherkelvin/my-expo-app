import Feather from '@expo/vector-icons/Feather';
import { UseTodayDate } from 'hooks/useTodayDate';
import { Text, View, Image } from 'react-native';

import avator from '../assets/profile.jpg';
interface HomeProfileProps {
  userName: string;
}

export const HomeProfile = ({ userName }: HomeProfileProps) => {
  const useTodayDate: string = UseTodayDate();
  return (
    <View className="m-5 mt-0 flex-row items-center justify-between rounded-3xl bg-white p-2">
      <Image source={avator} className="h-14 w-14 overflow-hidden rounded-full" />
      <View className="flex flex-col items-center ">
        <Text className="font-nunito-bold">Hello , {userName}</Text>
        <Text>{useTodayDate}</Text>
      </View>
      <Feather name="settings" size={26} color="black" className="pr-5" />
    </View>
  );
};
