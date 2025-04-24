import { UseDiseaseInfo } from 'hooks/useDiseaseInfo';
import { UsePredictor } from 'hooks/usePredictor';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

interface AdvisorImagesProps {
  uri: string;
}

export const AdvisorContent = ({ uri }: AdvisorImagesProps) => {
  const { predictImage, prediction } = UsePredictor();
  const { diseaseInfo, isLoading, setDisease } = UseDiseaseInfo();

  useEffect(() => {
    predictImage(uri);
  }, [uri]);

  useEffect(() => {
    if (prediction?.disease) {
      setDisease(prediction.disease);
    }
  }, [prediction]);

  return (
    <ScrollView className="mx-4 mt-4 rounded-2xl bg-primary py-6 shadow-lg">
      <Text className="text-center font-nunito-bold text-xl text-secondary">
        Health Status: {isLoading ? 'Loading...' : (prediction?.disease ?? 'Unknown')}
      </Text>

      <View className="mt-4 px-4">
        {/* If recommended pesticides exist */}
        {diseaseInfo?.recommended_pesticides && (
          <>
            <Text className="mb-2 font-nunito-bold text-lg text-white">
              Recommended Pesticides:
            </Text>
            {diseaseInfo.recommended_pesticides.map((pesticide: any, index: number) => (
              <View key={index} className="mb-3">
                <Text className="font-nunito text-base text-white">• Jina: {pesticide.name}</Text>
                <Text className="font-nunito text-base text-white"> Aina: {pesticide.type}</Text>
                <Text className="font-nunito text-base text-white">
                  Dozi: {pesticide.dosage}
                </Text>
              </View>
            ))}
          </>
        )}
        {diseaseInfo?.recommended_treatment && (
          <>
            <Text className="mb-2 font-nunito-bold text-lg text-white">Matibabu Yanayopendekezwa:</Text>
            <Text className="font-nunito text-base text-white">
              {diseaseInfo.recommended_treatment}
            </Text>
            {diseaseInfo?.dosage && (
              <Text className="mt-1 font-nunito text-base text-white">
                Dozi: {diseaseInfo.dosage}
              </Text>
            )}
          </>
        )}
        {diseaseInfo?.application_frequency && (
          <>
            <Text className="mt-4 font-nunito-bold text-lg text-white">Marudio ya Matumizi:</Text>
            <Text className="font-nunito text-base text-white">
              {diseaseInfo.application_frequency}
            </Text>
          </>
        )}
      </View>

      <TouchableOpacity
        className="mx-auto mb-2 mt-6 rounded-lg bg-main px-4 py-2"
        style={{ width: '70%' }}>
        <Text className="text-center text-lg text-white">Bonyeza kwa maelezo zaidi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
