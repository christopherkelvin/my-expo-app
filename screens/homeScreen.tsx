import { StackNavigationProp } from '@react-navigation/stack';
import { HomeImages } from 'components/HomeImages';
import { HomeProfile } from 'components/HomeProfile';
import { HomeQuickNavigator } from 'components/HomeQuickNavigator';
import { HorizontalLine } from 'components/HorizontalLine';
import { RobotStatus } from 'components/RobotStatus';
import { WaveSvg } from 'components/WaveSvg';
import { AdvertisementData } from 'constants/advertisements.data';
import colors from 'constants/colors';
import { useUserDetails } from 'hooks/useDetails';
import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const windowHeight = Dimensions.get('window').height;
  const userDetails = useUserDetails();
  const flatListRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex >= AdvertisementData.length) {
          nextIndex = 0;
        }
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ backgroundColor: colors.secondary, height: windowHeight }}>
      <WaveSvg />
      <HomeProfile userName={userDetails[0]?.name} navigation={navigation} />
      <FlatList
        ref={flatListRef}
        data={AdvertisementData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => <HomeImages data={item} />}
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
      />
      <HorizontalLine />
      <HomeQuickNavigator navigation={navigation} />
      <HorizontalLine />
      <RobotStatus />
    </View>
  );
};
