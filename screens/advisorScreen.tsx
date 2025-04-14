import { AdvisorContent } from 'components/AdvisorContent';
import { AdvisorImages } from 'components/AdvisorImages';
import { View } from 'react-native';
export const AdvisorScreen = () => {
  return (
    <View className="h-full bg-secondary">
      <AdvisorImages />
      <AdvisorContent />
    </View>
  );
};
