import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, View } from 'react-native';

import tree from '../assets/tomato-tree.png';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={50}
      className=" relative flex h-full gap-5 rounded-[25px] bg-secondary p-[6%]">
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
        value={email}
        onChange={() => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        value={password}
        onChange={() => setPassword(password)}
      />
      <TouchableOpacity className="h-14 items-center justify-center rounded-3xl bg-main">
        <Text className="font-nunito-bold text-2xl text-secondary">Login</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-3">
        <Text className="text-center text-lg">Don't have an account ?</Text>
        <TouchableOpacity>
          <Text className="text-lg text-main">Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
