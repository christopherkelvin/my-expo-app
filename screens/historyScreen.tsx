import { History } from 'components/History';
import { WaveSvg } from 'components/WaveSvg';
import { View } from 'react-native';

export const HistoryScreen = () => {
  return (
    <View className="h-full bg-secondary">
      <WaveSvg />
      <History />
    </View>
  );
};
