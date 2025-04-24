import { FakeHistory } from 'constants/fakeHistory.data';
import { Text, View, FlatList, Dimensions } from 'react-native';

import { HistoryComponent } from './HistoryComponent';
export const History = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View className=" align-center flex w-full flex-col justify-center">
      <Text className=" text-center font-nunito-bold text-lg text-secondary">Historia</Text>
      <View className=" mt-10">
        <FlatList
          data={FakeHistory}
          renderItem={({ item }) => (
            <HistoryComponent
              disease={item.disease}
              date={item.date}
              time={item.time}
              treated={item.treated}
            />
          )}
          style={{
            height: 0.8 * windowHeight,
          }}
        />
      </View>
    </View>
  );
};
