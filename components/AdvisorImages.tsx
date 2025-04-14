import { Image, View, Dimensions } from 'react-native';

import Image1 from '../assets/AdvertiseImages/Image1.jpg';

export const AdvisorImages = () => {
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;
  return (
    <View className=" items-center justify-center">
      <Image
        source={Image1}
        style={{
          width: ScreenWidth * 0.9,
          height: ScreenHeight * 0.35,
          marginTop: 4,
          borderRadius: 20,
        }}
      />
    </View>
  );
};
