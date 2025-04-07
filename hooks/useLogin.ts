import { useState } from 'react';
import { Alert } from 'react-native';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>();
  const login = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert('Insert Email and password');
    }
    setIsLoading(true);
    try {
      const response = await fetch('http://192.168.56.1:4000/auth/log-in', {
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
        setUser(true);
        Alert.alert('Success', 'Logged in successfully');
      } else {
        Alert.alert('Error', result.message || 'Login Failed');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, user, setUser };
};
