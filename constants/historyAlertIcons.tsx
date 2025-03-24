import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export const HistoryAlertIcons: { [key: string]: (props: any) => JSX.Element } = {
  infected: (props: any) => <Feather name="alert-circle" size={24} color="black" />,
  healthy: (props: any) => <MaterialIcons name="health-and-safety" size={24} color="white" />,
};
