import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

export const icon: { [key: string]: (props: any) => JSX.Element } = {
  home: (props: any) => <AntDesign name="home" size={24} color={props.color} />,
  advisor: (props: any) => <MaterialIcons name="support-agent" size={24} color={props.color} />,
  history: (props: any) => <FontAwesome name="history" size={24} color={props.color} />,
  profile: (props: any) => <Feather name="user" size={24} color={props.color} />,
};
