
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
      const response = await fetch(`${process.env.EXPO_BASE_URL}/auth/log-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        return result.user;
      } else {
        // Ensure the error message is a string
        const errorMessage = Array.isArray(result.message)
          ? result.message.join(', ')
          : result.message || 'Login Failed';
        Alert.alert('Error', errorMessage);
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Network request failed');
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, email, setEmail, password, setPassword };
};
