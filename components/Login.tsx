import { StackNavigationProp } from '@react-navigation/stack';
import colors from 'constants/colors';
import { useLogin } from 'hooks/useLogin';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';

import tree from '../assets/tomato-tree.png';
interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}
export const Login = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();
  return (
    <KeyboardAvoidingView className=" relative flex h-full gap-5 rounded-[25px] bg-secondary p-[6%]">
      <Image
        source={tree}
        style={{
          position: 'absolute',
          height: 200,
          width: 200,
          top: -60,
          right: 0,
        }}
      />
      <Text className=" mt-16 font-nunito-bold text-4xl text-main/80">Login</Text>
      <TextInput
        placeholder="Email"
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChangeText={(text) => setPassword(text)}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.main} />
      ) : (
        <TouchableOpacity
          className="h-14 items-center justify-center rounded-3xl bg-main"
          onPress={() => login(email, password)}>
          <Text className="font-nunito-bold text-2xl text-secondary">Login</Text>
        </TouchableOpacity>
      )}
      <View className="flex-row items-center justify-center gap-2">
        <Text className="text-center text-lg">Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="text-lg font-bold text-main">Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
