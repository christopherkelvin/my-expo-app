import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { ControlButton } from 'components/ControlButton';

const sendCommand = async (cmd: string) => {
  try {
    const res = await fetch(`http://192.168.4.1/${cmd}`);
    const text = await res.text();
    console.log(`Command ${cmd}: ${text}`);
  } catch (e) {
    console.error(`Failed to send ${cmd}:`, e);
  }
};

export const Controls = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePressIn = (direction: string) => {
    sendCommand(direction);
    intervalRef.current = setInterval(() => sendCommand(direction), 300);
  };

  const handlePressOut = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    sendCommand('stop');
  };

  const handleSpray = () => {
    sendCommand('spray');
  };

  const handleScan = async () => {
    try {
      const res = await fetch(`http://192.168.4.1/scan`);
      const data = await res.json();
      Alert.alert(
        'Scan Result',
        `Diagnosis: ${data.diagnosis.class} (${(data.diagnosis.confidence * 100).toFixed(1)}%)`
      );
    } catch (e) {
      Alert.alert('Error', 'Scan failed.');
    }
  };

  const handleSnapshot = () => {
    fetch(`http://192.168.4.50/save_snapshot`)
      .then(() => Alert.alert('Snapshot', '📸 Snapshot saved!'))
      .catch(() => Alert.alert('Error', 'Failed to save snapshot.'));
  };

  return (
    <View className="flex items-center justify-center gap-3 bg-white">
      <Image
        source={{ uri: `http://192.168.4.50/capture` }}
        style={{ width: 300, height: 200, borderRadius: 10, marginBottom: 20 }}
      />

      <View>
        <TouchableOpacity onPressIn={() => handlePressIn('forward')} onPressOut={handlePressOut}>
          <ControlButton name="arrowup" size={30} />
        </TouchableOpacity>
      </View>

      <View className="flex flex-row gap-20">
        <TouchableOpacity onPressIn={() => handlePressIn('left')} onPressOut={handlePressOut}>
          <ControlButton name="arrowleft" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPressIn={() => handlePressIn('right')} onPressOut={handlePressOut}>
          <ControlButton name="arrowright" size={30} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPressIn={() => handlePressIn('backward')} onPressOut={handlePressOut}>
          <ControlButton name="arrowdown" size={30} />
        </TouchableOpacity>
      </View>
      <View className="mt-4 flex flex-row gap-4">
        <TouchableOpacity onPress={handleSpray}>
          <ControlButton name="rocket1" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleScan}>
          <ControlButton name="camera" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSnapshot}>
          <ControlButton name="save" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
