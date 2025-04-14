import { Text, View, TouchableOpacity } from 'react-native';

interface AdvisorEmptyProps {
  selectImage: () => void;
}

export const AdvisorEmpty = ({ selectImage }: AdvisorEmptyProps) => {
  return (
    <View className="h-full items-center justify-center bg-main">
      <TouchableOpacity className="rounded-lg bg-white p-5" onPress={selectImage}>
        <Text className="font-nunito">Choose Image</Text>
      </TouchableOpacity>
      <Text className="mt-4 text-lg font-bold text-white">No data available</Text>
    </View>
  );
};
