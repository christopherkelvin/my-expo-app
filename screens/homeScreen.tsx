import { StackNavigationProp } from '@react-navigation/stack';
import { HomeImages } from 'components/HomeImages';
import { HomeProfile } from 'components/HomeProfile';
import { HomeQuickNavigator } from 'components/HomeQuickNavigator';
import { HorizontalLine } from 'components/HorizontalLine';
import { RobotStatus } from 'components/RobotStatus';
import { WaveSvg } from 'components/WaveSvg';
import { AdvertisementData } from 'constants/advertisements.data';
import colors from 'constants/colors';
import { UseUserName } from 'hooks/useDetails';
import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const userName: string = UseUserName();
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ backgroundColor: colors.secondary, height: windowHeight }}>
      <WaveSvg />
      <HomeProfile userName={userName} navigation={navigation} /> {/* Pass navigation prop */}
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
