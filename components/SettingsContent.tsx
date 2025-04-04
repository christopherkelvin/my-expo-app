import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from 'constants/colors';
import { View, Text, TouchableOpacity } from 'react-native';

import { HorizontalLine } from './HorizontalLine';
export const SettingsContent = () => {
  return (
    <View className="mx-10">
      <Text className="font my-2 ml-4 font-nunito-bold text-main">Inventory</Text>
      <TouchableOpacity className="flex flex-row gap-3 rounded-2xl border border-slate-500/20 bg-slate-500/40 p-4 align-bottom">
        <MaterialCommunityIcons name="web" size={24} color={colors.main} />
        <Text className=" text-lg">Support</Text>
      </TouchableOpacity>
      <Text className="font my-2 ml-4 font-nunito-bold text-main">Preferences</Text>
      <View className="rounded-2xl border border-slate-500/20 bg-slate-500/40 p-4 align-bottom">
        <TouchableOpacity className="flex flex-row gap-3">
          <Ionicons name="notifications" size={24} color={colors.main} />
          <Text className=" text-lg">Push notification</Text>
        </TouchableOpacity>
        <HorizontalLine />
        <TouchableOpacity className="flex flex-row gap-3">
          <AntDesign name="logout" size={24} color="red" />
          <Text className=" text-lg text-red-600">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
