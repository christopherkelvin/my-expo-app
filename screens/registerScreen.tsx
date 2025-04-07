import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Register } from 'components/Register';
import { AuthLayout } from 'layouts/authLayout';

export const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <AuthLayout>
      <Register navigation={navigation} />
    </AuthLayout>
  );
};
