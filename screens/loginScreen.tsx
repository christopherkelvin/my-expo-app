import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Login } from 'components/Login';
import { AuthLayout } from 'layouts/authLayout';
export const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <AuthLayout>
      <Login navigation={navigation} />
    </AuthLayout>
  );
};
