import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import IconButton from "./IconButton";

const TextIcon = ({
  containerStyle,
  icon,
  onPress,
  title,
  subtitle,
  subtitleStyle,
  rightText,
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          containerStyle={{
            backgroundColor: COLORS.green,
            width: 40,
            height: 40,
            borderRadius: SIZES.radius,
          }}
          icon={icon}
        />
        <View style={{ marginLeft: SIZES.padding }}>
          <Text style={{ color: COLORS.grey4, ...FONTS.h6 }}>{title}</Text>
          <Text
            style={{ color: COLORS.primary, ...FONTS.h6, ...subtitleStyle }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
      <Text style={{ color: COLORS.grey4, ...FONTS.h6 }}>{rightText}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({});
