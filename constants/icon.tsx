import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const icon: { [key: string]: (props: any) => JSX.Element } = {
  home: (props: any) => <AntDesign name="home" size={20} color={props.color} />,
  advisor: (props: any) => (
    <MaterialCommunityIcons name="brain" size={20} color={props.color} />
  ),
  history: (props: any) => (
    <FontAwesome name="history" size={20} color={props.color} />
  ),
  profile: (props: any) => (
    <Feather name="user" size={20} color={props.color} />
  ),
};
