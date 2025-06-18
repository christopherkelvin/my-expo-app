import { useState } from 'react';
import { View } from 'react-native';
import { Controls } from 'components/Controls';

export const ControlScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <View>
      <Controls />
    </View>
  );
};
