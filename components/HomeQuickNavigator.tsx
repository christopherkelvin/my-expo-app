import { quickButtons } from 'constants/quickButtons';
import { Text, View } from 'react-native';

import { QuickButton } from '../components/QuickButton';
export const HomeQuickNavigator = () => {
  return (
    <View className="mx-3">
      <Text className="font-nunito-bold text-2xl">Quik Access</Text>
      <View className="mt-3 flex flex-row justify-around">
        {quickButtons.map((button, index) => (
          <QuickButton key={index} title={button.title} onPress={button.onPress} />
        ))}
      </View>
    </View>
  );
};
