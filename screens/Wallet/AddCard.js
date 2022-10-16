import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { CustomScroll, Header, TextButton } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { DeleteWhite, VisaWhite } from "../../assets/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const creditCard = require("../../assets/images/creditCard.png");

const AddCard = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding * 2.4,
      }}
    >
      <Header title={"Wallet"} />
      <CustomScroll>
        <TextButton
          label={"Add Card"}
          buttonContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
            marginVertical: SIZES.radius * 2,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h1,
            fontSize: 14,
          }}
          onPress={() => navigation.navigate("Wallet")}
        />
      </CustomScroll>
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({});
