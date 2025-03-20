import { TouchableOpacity, Text } from 'react-native';
export const QuickButton = ({ title,onPress }) => {
  return (
    <TouchableOpacity
      className="bg-main flex h-20 w-20 items-center justify-center rounded-full"
      onPress={onPress}>
      <Text className="text-secondary">{title}</Text>
    </TouchableOpacity>
  );
};
