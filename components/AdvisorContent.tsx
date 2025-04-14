import { View, Text, TouchableOpacity } from 'react-native';

export const AdvisorContent = () => {
  return (
    <View className="mx-4 mt-4  items-center rounded-2xl bg-primary py-6 shadow-lg">
      <Text className="text-center font-nunito-bold text-xl text-secondary">
        Health Status: Early Blight
      </Text>
      <Text className="mt-2 px-1 text-center font-nunito text-base text-white">
        Early blight is a fungal disease that affects tomato plants, causing dark spots on leaves
        and stems. It can lead to reduced yield and quality of fruit. The disease is most prevalent
        in warm, humid conditions and can spread rapidly if not controlled.
      </Text>
      <TouchableOpacity
        className="mt-4 rounded-lg bg-main px-4 py-2"
        style={{
          width: '70%',
        }}>
        <Text className="text-center text-lg text-white">Press for more information</Text>
      </TouchableOpacity>
    </View>
  );
};
