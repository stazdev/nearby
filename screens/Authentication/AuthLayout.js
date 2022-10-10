import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { LogoSmall } from "../../assets/images";
const AuthLayout = ({ title, titleContainerStyle, children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: SIZES.padding * 9,
        paddingHorizontal: SIZES.padding * 2.4,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        {/* app icon */}
        <View style={{ alignItems: "center" }}>
          <LogoSmall />
        </View>
        {/* title */}
        <View
          style={{
            marginTop: SIZES.padding * 3.6,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{ textAlign: "center", ...FONTS.h1, color: COLORS.black2 }}
          >
            {title}
          </Text>
        </View>
        {/* content */}
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
