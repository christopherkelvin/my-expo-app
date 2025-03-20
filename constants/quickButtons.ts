import { Alert } from 'react-native';
const Pair = () => {
  Alert.alert('Pairing', 'Are you sure you want to pair the robot ?', [
    { text: 'Yes', onPress: () => console.log('Pairing') },
    { text: 'No', onPress: () => console.log('Cancel Pairing'), style: 'cancel' },
  ]);
  console.log('Pair');
};
const Control = () => {
  console.log('Control');
};
const Status = () => {
  console.log('Status');
};
export const quickButtons = [
  { title: 'Pair', onPress: Pair },
  { title: 'Control', onPress: Control },
  { title: 'Status', onPress: Status },
  // { title: 'Status', onPress: Status },
];
