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
        className="relative mx-2 justify-end overflow-hidden rounded-t-xl bg-secondary"
        style={{ width: width * 0.95, height: width / 2 }}>
        <Image
          source={advertisements.image}
          className="absolute h-auto w-full"
          style={{ width: width - 15, height: width / 2 }}
        />
      </View>
      <View
        className="bottom-0 mx-2 w-full rounded-b-xl bg-primary p-2"
        style={{ width: width * 0.95 }}>
        <Text className="font-nunito-bold text-lg text-secondary">{advertisements.question}</Text>
        <Text className="pl-3 font-nunito-bold italic text-main">{advertisements.solution}</Text>
      </View>
    </View>
  );
};
