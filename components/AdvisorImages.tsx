import { Image, View, Dimensions } from 'react-native';

import Image1 from '../assets/AdvertiseImages/Image1.jpg';

export const AdvisorImages = () => {
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;
  return (
    <View className="h-[0.2]">
      <Image
        source={Image1}
        style={{
          width: ScreenWidth,
          height: ScreenHeight,
          opacity: 0.7,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};
