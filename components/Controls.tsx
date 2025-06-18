import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';

export const Controls = () => {
  return (
    <View className="flex items-center justify-center gap-3 ">
      <TouchableOpacity className=" h-20 w-20 justify-center rounded-full bg-main">
        <Text className="-mt-2 text-center text-white ">Kagua</Text>
        <Text className="-mt-2 text-center text-white ">Mwagilia</Text>
      </TouchableOpacity>
    </View>
  );
};
