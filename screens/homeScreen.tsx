import { HomeImages } from 'components/HomeImages';
import { HomeProfile } from 'components/HomeProfile';
import { HomeQuickNavigator } from 'components/HomeQuickNavigator';
import { HorizontalLine } from 'components/HorizontalLine';
import { RobotStatus } from 'components/RobotStatus';
import { AdvertisementData } from 'constants/advertisements.data';
import colors from 'constants/colors';
import { UseUserName } from 'hooks/useDetails';
import { View, FlatList, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
export const HomeScreen = () => {
  const userName: string = UseUserName();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{ backgroundColor: colors.secondary, height: windowHeight }}>
      <Svg
        height={100}
        width={windowWidth}
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: -10 }}>
        <Path
          fill="#026a75"
          d="M0,192L21.8,170.7C43.6,149,87,107,131,90.7C174.5,75,218,85,262,106.7C305.5,128,349,160,393,154.7C436.4,149,480,107,524,101.3C567.3,96,611,128,655,160C698.2,192,742,224,785,245.3C829.1,267,873,277,916,277.3C960,277,1004,267,1047,229.3C1090.9,192,1135,128,1178,112C1221.8,96,1265,128,1309,165.3C1352.7,203,1396,245,1418,266.7L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        />
      </Svg>
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
