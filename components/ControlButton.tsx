import AntDesign from '@expo/vector-icons/AntDesign';
import colors from 'constants/colors';
import { TouchableOpacity } from 'react-native';

interface ControlButtonProps {
  name: React.ComponentProps<typeof AntDesign>['name'];
  size: number;
}
export const ControlButton = ({ name, size }: ControlButtonProps) => {
  return (
    <TouchableOpacity className="flex h-20 w-20 items-center justify-center rounded-full bg-main">
      <AntDesign name={name} size={size} color={colors.secondary} />
    </TouchableOpacity>
  );
};
