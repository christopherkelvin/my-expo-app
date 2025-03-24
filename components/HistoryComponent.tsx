import Feather from '@expo/vector-icons/Feather';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import image from '../assets/AdvertiseImages/Image1.jpg';
export const HistoryComponent = () => {
  return (
    <TouchableOpacity className="relative mx-4 mt-7 flex flex-row rounded-lg bg-main p-2">
      <Image source={image} className="h-28 w-28 rounded" />
      <View className=" ml-4 flex flex-col gap-2.5">
        <Text className="text-secondary">
          <Text className="font-nunito-bold">Assessed On :</Text> 31/03/2025{' '}
        </Text>
        <Text className="text-secondary">
          <Text className="font-nunito-bold">Time :</Text> 31-03-2025{' '}
        </Text>
        <Text className="text-secondary">
          <Text className="font-nunito-bold">Disease: Early Blight</Text>
        </Text>
        <Text className="text-red-600">
          <Text className="font-nunito-bold">Not Treated</Text>
        </Text>
      </View>
      <Feather
        name="alert-circle"
        size={34}
        color="red"
        className="absolute"
        style={{ top: 0, right: 0 }}
      />
    </TouchableOpacity>
  );
};
