import AsyncStorage from '@react-native-async-storage/async-storage';

const API_IP = '192.168.0.27';

export const setApiBaseUrl = async (url) => {
  await AsyncStorage.setItem(API_IP, url);
};

export const getApiBaseUrl = async () => {
  return await AsyncStorage.getItem(API_IP);
};
