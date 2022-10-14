import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import IconButton from "./IconButton";

const TextIconTwo = ({
  containerStyle,
  icon,
  onPress,
  description,
  time,
  timeStyle,
  rightText,
  iconStyle,
  leftStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: SIZES.padding,
        justifyContent: "space-between",
        ...containerStyle,
      }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", ...leftStyle }}
      >
        <IconButton
          containerStyle={{
            backgroundColor: COLORS.green,
            width: 40,
            height: 40,
            borderRadius: SIZES.radius,
            ...iconStyle,
          }}
          icon={icon}
        />
        <View style={{ marginLeft: SIZES.padding }}>
          <Text style={{ color: COLORS.primary, ...FONTS.h6 }}>
            {description}
          </Text>
          <Text style={{ color: COLORS.grey4, ...FONTS.h6, ...timeStyle }}>
            {time}
          </Text>
        </View>
      </View>
      <Text style={{ color: COLORS.grey4, ...FONTS.h6 }}>{rightText}</Text>
    </TouchableOpacity>
  );
};

export default TextIconTwo;

const styles = StyleSheet.create({});
