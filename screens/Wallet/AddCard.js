import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { CustomScroll, FormInput, Header, TextButton } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { DeleteWhite, VisaWhite } from "../../assets/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const creditCard = require("../../assets/images/creditCard.png");

const AddCard = ({ navigation }) => {
  const [name, setName] = useState("");
  const [cardNum, setcardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
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
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <FormInput
            value={name}
            onChange={(value) => setName(value)}
            label={"Card Holder"}
            placeholder={"Card Holder Name"}
          />
          <FormInput
            maxLength={16}
            value={cardNum}
            onChange={(value) => setcardNum(value)}
            label={"Card Number"}
            placeholder={"Card Number"}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "40%" }}>
              <FormInput
                maxLength={6}
                value={expiry}
                onChange={(value) => setExpiry(value)}
                label={"Expiry Date"}
                placeholder={"**/****"}
              />
            </View>
            <View
              style={{
                width: "40%",
                marginLeft: SIZES.padding * 2,
              }}
            >
              <FormInput
                maxLength={3}
                value={cvv}
                onChange={(value) => setCvv(value)}
                label={"CVV"}
              />
            </View>
          </View>
        </View>
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
