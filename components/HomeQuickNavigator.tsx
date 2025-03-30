import { NavigationProp } from '@react-navigation/native';
import { quickButtons } from 'constants/quickButtons';
import { Text, View } from 'react-native';

import { QuickButton } from '../components/QuickButton';

type HomeQuickNavigatorProps = {
  navigation: NavigationProp<any>;
};

export const HomeQuickNavigator = ({ navigation }: HomeQuickNavigatorProps) => {
  return (
    <View className="mx-3">
      <Text className="font-nunito-bold text-2xl">Quik Access</Text>
      <View className="mt-3 flex flex-row justify-around">
        {quickButtons.map((button, index) => (
          <QuickButton
            key={index}
            title={button.title}
            onPress={() => button.onPress({ navigation })} // Pass the navigation prop to the onPress function
          />
        ))}
      </View>
    </View>
  );
};
