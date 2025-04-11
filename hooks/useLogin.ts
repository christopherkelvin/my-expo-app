import { useState } from 'react';
import { Alert } from 'react-native';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert('Insert Email and password');
    }
    setIsLoading(true);
    try {
      const response = await fetch('http://192.168.0.16:4000/auth/log-in', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        return result.user;
      } else {
        Alert.alert('Error', result.message || 'Login Failed');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Network request failed');
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, email, setEmail, password, setPassword };
};
