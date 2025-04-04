import { AuthLayout } from 'layouts/authLayout';
import { Text } from 'react-native';
interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

export const RegisterScreen = () => {
  return (
    <AuthLayout>
      <Text>Regiter Hello</Text>
    </AuthLayout>
  );
};
