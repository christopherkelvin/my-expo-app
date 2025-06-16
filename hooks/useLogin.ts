import { useState } from 'react';
import { Alert } from 'react-native';
import { openDb } from 'database/database'; // Adjust path if needed

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert('Tafadhali ingiza barua pepe na nenosiri');
      return null;
    }

    setIsLoading(true);

    try {
      const db = await openDb();
      const result = await db.getAllAsync(`SELECT * FROM User WHERE email = ?`, [email]);

      if (result.length === 0) {
        Alert.alert('Hitilafu', 'Mtumiaji hakupatikana.');
        return null;
      }
      type User = {
        email: string;
        password: string;
      };

      const user = result[0] as User;

      if (user.password !== password) {
        Alert.alert('Hitilafu', 'Nenosiri si sahihi.');
        return null;
      }
      return user;
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Hitilafu', 'Kuna tatizo kwenye mfumo. Tafadhali jaribu tena.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, email, setEmail, password, setPassword };
};
