import AntDesign from '@expo/vector-icons/AntDesign';
import colors from 'constants/colors';
import { TouchableOpacity } from 'react-native';
export const ControlButton = ({ name, size }) => {
  return (
    <TouchableOpacity className="flex h-20 w-20 items-center justify-center rounded-full bg-main">
      <AntDesign name={name} size={size} color={colors.secondary} />
    </TouchableOpacity>
  );
};
