import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { icon } from '../constants/icon';
interface TabBarButtonProps {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
}
export const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: TabBarButtonProps) => {
  const scale = useSharedValue(0);
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0, 1]);
    return { opacity };
  });
  const iconSize = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [1, 0], [1, 1.5]);
    const top = interpolate(scale.value, [1, 0], [0, 7]);
    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    };
  });
  useEffect(() => {
    scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 0 : 1) : isFocused, {
      duration: 350,
    });
  }, [scale, isFocused]);
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className=" h-16 flex-1 items-center justify-center rounded-full">
      <Animated.View style={[iconSize]}>{icon[routeName]({ color })}</Animated.View>
      <Animated.Text style={[{ color }, animatedTextStyle]} className="text-sm">
        {label}
      </Animated.Text>
    </Pressable>
  );
};
