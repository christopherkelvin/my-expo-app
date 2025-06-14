import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { addUser } from '../services/UserService';
interface RegisterScreenProps {
  navigation: StackNavigationProp<any>;
}

export const Register = ({ navigation }: RegisterScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <KeyboardAvoidingView className=" relative flex h-full gap-5 rounded-[25px] bg-secondary p-[6%]">
      <Text className="font-nunito-bold text-4xl text-main/80">Jisajili</Text>
      <TextInput
        placeholder="Email"
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChange={() => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChange={() => setPassword(password)}
      />
      <TextInput
        placeholder="Confirm Password"
        className=" h-14 rounded-3xl bg-white pl-5 text-lg"
        onChange={() => setConfirmPassword(confirmPassword)}
      />
      <TouchableOpacity
        onPress={() => addUser(email, password)}
        className="h-14 items-center justify-center rounded-3xl bg-main">
        <Text className="font-nunito-bold text-2xl text-secondary">Jisajili</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
