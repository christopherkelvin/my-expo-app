import { AdvisorImages } from 'components/AdvisorImages';
import { View } from 'react-native';
export const AdvisorScreen = () => {
  return (
    <View className="h-full ">
      <View className="absolute">
        <AdvisorImages />
      </View>
    </View>
  );
};
