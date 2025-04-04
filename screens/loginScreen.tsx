import { useNavigation } from '@react-navigation/native';
import { Login } from 'components/Login';
import { AuthLayout } from 'layouts/authLayout';
export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <AuthLayout>
      <Login navigation={navigation} />
    </AuthLayout>
  );
};
