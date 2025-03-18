import { HomeImages } from 'components/HomeImages';
import { HomeProfile } from 'components/HomeProfile';
import { HomeQuickNavigator } from 'components/HomeQuickNavigator';
import { AdvertisementData } from 'constants/advertisements.data';
import { UseUserName } from 'hooks/useDetails';
import { View, FlatList } from 'react-native';
export const HomeScreen = () => {
  const userName: string = UseUserName();
  return (
    <View className="h-full" style={{ backgroundColor: '#F4F7F9' }}>
      <HomeProfile userName={userName} />
      <FlatList
        data={AdvertisementData}
        horizontal
        pagingEnabled
        bounces={false}
        renderItem={({ item }) => <HomeImages data={item} />}
      />
      <HomeQuickNavigator />
    </View>
  );
};
