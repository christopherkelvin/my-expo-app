import { BriefHistory, RobotStatus } from 'components/RobotStatus';
import { HomeImages } from 'components/HomeImages';
import { HomeProfile } from 'components/HomeProfile';
import { HomeQuickNavigator } from 'components/HomeQuickNavigator';
import { HorizontalLine } from 'components/HorizontalLine';
import { AdvertisementData } from 'constants/advertisements.data';
import colors from 'constants/colors';
import { UseUserName } from 'hooks/useDetails';
import { View, FlatList, Dimensions } from 'react-native';
export const HomeScreen = () => {
  const userName: string = UseUserName();
  // const windowHeight = Dimensions.get('window').height;
  return (
    <View className="" style={{ backgroundColor: colors.secondary }}>
      <HomeProfile userName={userName} />
      <FlatList
        data={AdvertisementData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => <HomeImages data={item} />}
      />
      <HorizontalLine />
      <HomeQuickNavigator />
      <HorizontalLine />
      <RobotStatus />
    </View>
  );
};
