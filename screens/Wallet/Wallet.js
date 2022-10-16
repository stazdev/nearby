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

const Wallet = ({ navigation }) => {
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
        <ImageBackground
          source={creditCard}
          style={{
            height: 200,
            width: "100%",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 20,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => console.log("delete card")}
            >
              <DeleteWhite />
            </TouchableOpacity>
            <VisaWhite />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 90,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h4,
                textAlign: "center",
                letterSpacing: 2,
              }}
            >
              4099 1107 9826 2345
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              bottom: 20,
              width: "100%",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <View>
              <Text
                style={{
                  color: COLORS.grey1,
                  ...FONTS.h6,
                }}
              >
                Card holder
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h5,
                  letterSpacing: 2,
                }}
              >
                John Doe
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.grey1,
                  ...FONTS.h6,
                }}
              >
                Expiry Date
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h5,
                  letterSpacing: 2,
                }}
              >
                09/2024
              </Text>
            </View>
          </View>
        </ImageBackground>

        <TextButton
          label={"Add New Card"}
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
          onPress={() => navigation.navigate("AddCard")}
        />
      </CustomScroll>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
