import { Image, View, Dimensions } from 'react-native';

interface AdvisorImagesProps {
  uri: string;
}

export const AdvisorImages = ({ uri }: AdvisorImagesProps) => {
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;

  return (
    <View className="items-center justify-center">
      <Image
        source={{ uri }}
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
