// screens/AdvisorScreen.tsx
import { AdvisorContent } from 'components/AdvisorContent';
import { AdvisorEmpty } from 'components/AdvisorEmpty';
import { AdvisorImages } from 'components/AdvisorImages';
import { UseImagePicker } from 'hooks/useImagePicker';
import { View } from 'react-native';

export const AdvisorScreen = () => {
  const { image, selectImage, isLoading } = UseImagePicker();

  return (
    <View className="h-full bg-main">
      {image ? (
        <View>
          <AdvisorImages uri={image} />
          <AdvisorContent />
        </View>
      ) : (
        <AdvisorEmpty selectImage={selectImage} />
      )}
    </View>
  );
};
