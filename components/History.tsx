import { Text, View, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { HistoryComponent } from './HistoryComponent';
import { useHistory } from 'hooks/useHistory';

export const History = () => {
  const windowHeight = Dimensions.get('window').height;
  const { history, loading, error, refetch } = useHistory();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <View className="align-center flex w-full flex-col justify-center">
      <Text className="text-center font-nunito-bold text-lg text-secondary">Historia</Text>
      <View className="mt-10">
        {!loading ? (
          <FlatList
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <HistoryComponent
                disease={item.diagnosis}
                date={item.date}
                time={item.time}
                treated="Yes"
              />
            )}
            style={{
              gap: 0,
              height: 0.8 * windowHeight,
            }}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        ) : (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{
              height: 0.8 * windowHeight,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )}
      </View>
    </View>
  );
};
