import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const IconButton = ({ containerStyle, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        width: 38,
        height: 38,
        borderRadius: 35,
        ...containerStyle,
      }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
