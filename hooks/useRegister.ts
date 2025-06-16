import { openDb } from 'database/database';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const addUser = async (navigateToLogin: () => void) => {
    try {
      if (!email || !password || !confirmPassword) {
        Alert.alert(
          'Tafadhali Jaza Maelezo Yote',
          'Barua pepe, nenosiri, na thibitisha nenosiri ni lazima.',
          [{ text: 'sawa' }]
        );
        return;
      }
      if (!isValidEmail(email)) {
        Alert.alert('Barua Pepe Batili', 'Tafadhali ingiza barua pepe sahihi.', [{ text: 'sawa' }]);
        return;
      }

      const db = await openDb();
      console.log(email);
      const userExists = await db.getAllAsync(`SELECT * FROM User WHERE email = ?`, [email]);
      if (userExists.length > 0) {
        Alert.alert('Mtumiaji Yupo', 'Mtumiaji mwenye barua pepe hii tayari yupo.', [
          { text: 'sawa' },
        ]);
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert('Hitilafu ya Nenosiri', 'Nenosiri na thibitisha nenosiri havifanani.', [
          { text: 'sawa' },
        ]);
        return;
      }
      console.log(email,password)
      const result = db.runAsync(`INSERT INTO User (email, password) VALUES (?, ?)`, [
        email,
        password,
      ]);
      Alert.alert('Mafanikio', 'Mtumiaji amesajiliwa kwa mafanikio!', [
        { text: 'Sawa', onPress: navigateToLogin },
      ]);
      console.log('Mtumiaji ameongezwa kwa mafanikio. ID:', (await result).lastInsertRowId);
    } catch (error) {
      Alert.alert('Hitilafu', 'Imeshindikana kusajili mtumiaji. Tafadhali jaribu tena.', [
        { text: 'sawa' },
      ]);
      console.error('Imeshindikana kuongeza mtumiaji', error);
    }
  };

  return {
    addUser,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
};
