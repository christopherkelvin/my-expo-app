import { ControlButton } from 'components/ControlButton';
import { View } from 'react-native';
export const Controls = () => {
  return (
    <View className=" flex-1 items-center justify-center gap-3 bg-white">
      <View>
        <ControlButton name="arrowup" size={30} />
      </View>
      <View className="flex flex-row gap-20">
        <ControlButton name="arrowleft" size={30} />
        <ControlButton name="arrowright" size={30} />
      </View>
      <View>
        <ControlButton name="arrowdown" size={30} />
      </View>
    </View>
  );
};
