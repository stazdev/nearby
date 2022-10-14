import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import IconButton from "./IconButton";
import { ArrowLeft } from "../assets/icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ containerStyle, title, titleStyle }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
        height: 56,
        marginTop: StatusBar.currentHeight,
      }}
    >
      {/* left */}
      <IconButton
        onPress={() => navigation.navigate("Map")}
        icon={<ArrowLeft />}
      />
      {/* title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h4, color: COLORS.primary, ...titleStyle }}>
          {title}
        </Text>
      </View>
      {/* right */}
      <View style={{ width: 40, height: 40 }} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
