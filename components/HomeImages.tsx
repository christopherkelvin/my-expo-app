import { View, Text, Image, useWindowDimensions } from 'react-native';

import { advertisementType } from '../types/advertisement.types';

interface HomeImagesProps {
  data: advertisementType;
}
export const HomeImages = ({ data }: HomeImagesProps) => {
  const advertisements = data;
  const { width } = useWindowDimensions();
  return (
    <View style={{ width, height: width / 2, marginBottom: 90 }}>
      <View
        className="bg-secondary relative mx-2 justify-end overflow-hidden rounded-t-xl"
        style={{ width: width * 0.95, height: width / 2 }}>
        <Image
          source={advertisements.image}
          className="absolute h-auto w-full"
          style={{ width: width - 15, height: width / 2 }}
        />
      </View>
      <View
        className="bg-primary bottom-0 mx-2 w-full rounded-b-xl p-2"
        style={{ width: width * 0.95 }}>
        <Text className="text-secondary font-nunito-bold text-lg">{advertisements.question}</Text>
        <Text className="text-main pl-3 font-nunito-bold italic">{advertisements.solution}</Text>
      </View>
    </View>
  );
};
