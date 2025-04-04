import { View, Text } from 'react-native';
export const LoginAdvertisement = () => {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingLeft: 40,
        marginBottom: 40,
      }}>
      <Text className="text-[50px] font-extrabold text-secondary">Hello !</Text>
      <Text className="font-nunito-bold text-2xl text-secondary">Welcome to the AI world</Text>
    </View>
  );
};
