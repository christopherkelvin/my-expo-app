import { Text, View } from 'react-native';

import { HistoryComponent } from './HistoryComponent';

export const History = () => {
  return (
    <View className=" align-center flex w-full flex-col justify-center">
      <Text className=" text-center font-nunito-bold text-lg text-secondary">Detail History</Text>
      <View className=" mt-10">
        <HistoryComponent />
      </View>
    </View>
  );
};
