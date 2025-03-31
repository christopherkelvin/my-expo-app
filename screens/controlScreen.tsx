import { ControlButton } from 'components/ControlButton';
import { ControlButton as ButtonContants } from 'constants/controlButtons';
import { View } from 'react-native';
export const ControlScreen = () => {
  return (
    <View className=" flex-1 items-center justify-center bg-white">
      {ButtonContants.map((button: { name: string; size: number }, index: number) => (
        <ControlButton
          key={index}
          name={button.name}
          size={button.size}
          className={button.className}
        />
      ))}
    </View>
  );
};
