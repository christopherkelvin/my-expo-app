import { NavigationProp } from '@react-navigation/native';
import { Alert,Linking } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
const Pair = () => {
  Alert.alert('Pairing', "Unganisha na seva ya roboti inayoitwa robot controller", [
    {
      text: 'Sawa',
      onPress: () => {
        IntentLauncher.startActivityAsync('android.settings.SETTINGS').catch((error) => {
          console.error('Failed to launch intent:', error);
        });
      },
    },
    {
      text: 'Acha',
      onPress: () => console.log('Cancel Pairing'),
      style: 'cancel',
    },
  ]);
  console.log('Pair');
};

const Control = ({ navigation }: { navigation: NavigationProp<any> }) =>
  navigation.navigate('Control');
const Status = ({ navigation }: { navigation: NavigationProp<any> }) =>
  navigation.navigate('Status');

export const quickButtons = [
  { title: 'Kuunganisha', onPress: Pair },
];
