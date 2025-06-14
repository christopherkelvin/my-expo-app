import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Slider from '@react-native-community/slider';

export const ServoControl = () => {
  const [angle, setAngle] = useState(90); // Default angle

  const sendServoAngle = async () => {
    try {
      const res = await fetch(`http://192.168.4.50/servo?angle=${angle}`);
      const text = await res.text();
      Alert.alert('Servo Control', text);
    } catch (e) {
      Alert.alert('Error', 'Failed to send servo angle.');
    }
  };

  return (
    <View className="mt-10 items-center">
      <Text className="mb-2 text-lg font-bold">🦾 Servo Angle: {angle}°</Text>

      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={180}
        step={1}
        value={angle}
        onValueChange={setAngle}
      />

      <Button title="Move Servo" onPress={sendServoAngle} />
    </View>
  );
};
