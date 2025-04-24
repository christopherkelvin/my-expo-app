import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from 'constants/colors';
import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { HorizontalLine } from './HorizontalLine';
export const SettingsContent = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View className="mx-10">
      <Text className="font my-2 ml-4 font-nunito-bold text-main">Orodha ya Mali</Text>
      <TouchableOpacity className="flex flex-row gap-3 rounded-2xl border border-slate-500/20 bg-slate-500/40 p-4 align-bottom">
        <MaterialCommunityIcons name="web" size={24} color={colors.main} />
        <Text className=" text-lg">Msaada</Text>
      </TouchableOpacity>
      <Text className="font my-2 ml-4 font-nunito-bold text-main">Mapendeleo</Text>
      <View className="rounded-2xl border border-slate-500/20 bg-slate-500/40 p-4 align-bottom">
        <TouchableOpacity className="flex flex-row gap-3">
          <Ionicons name="notifications" size={24} color={colors.main} />
          <Text className=" text-lg">Arifa ya Kusukuma</Text>
        </TouchableOpacity>
        <HorizontalLine />
        <TouchableOpacity className="flex flex-row gap-3" onPress={logout}>
          <AntDesign name="logout" size={24} color="red" />
          <Text className=" text-lg text-red-600">Toka</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
