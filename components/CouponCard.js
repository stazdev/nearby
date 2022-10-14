import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const CouponCard = ({ children, couponStyle }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.grey1,
        borderRadius: SIZES.padding,
        padding: SIZES.padding * 2,
        ...couponStyle,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 90,
          left: -8,
          backgroundColor: COLORS.white,
          height: 16,
          width: 16,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 90,
          right: -8,
          backgroundColor: COLORS.white,
          height: 16,
          width: 16,
          borderRadius: SIZES.radius,
        }}
      />
      {children}
    </View>
  );
};

export default CouponCard;

const styles = StyleSheet.create({});
