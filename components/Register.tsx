import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
import { useRegister } from 'hooks/useRegister';

interface RegisterScreenProps {
  navigation: StackNavigationProp<any>;
}

export const Register = ({ navigation }: RegisterScreenProps) => {
  const { addUser, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } =
    useRegister();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView className=" relative flex h-full gap-5 rounded-[25px] bg-secondary p-[6%]">
      <Text className="font-nunito-bold text-4xl text-main/80">Jisajili</Text>
      <TextInput
        placeholder="Barua Pepe"
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Neno la siri"
        secureTextEntry={true}
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder="Thibitisha Neno la siri"
        secureTextEntry={true}
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity
        onPress={() => addUser(navigateToLogin)}
        className="h-14 items-center justify-center rounded-3xl bg-main">
        <Text className="font-nunito-bold text-2xl text-secondary">Jisajili</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-2">
        <Text className="text-center text-lg">Una akaunti?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-lg font-bold text-main">Ingia</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
