import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { FormInput, TextButton } from "../../components";
import AuthLayout from "./AuthLayout";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout title={"Welcome Back!"}>
      <View style={{ flex: 1, marginTop: SIZES.padding * 3 }}>
        <FormInput
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder={"E-mail"}
          value={email}
          onChange={(value) => {
            setEmail(value);
          }}
        />
        <FormInput
          autoCompleteType="password"
          placeholder={"Password"}
          value={password}
          containerStyle={{ marginTop: SIZES.radius * 2 }}
          onChange={(value) => {
            setPassword(value);
          }}
        />
        <View
          style={{
            justifyContent: "flex-end",
          }}
        >
          <TextButton
            label={"Forgot Password?"}
            buttonContainerStyle={{
              backgroundColor: null,
              alignItems: "flex-end",
              marginTop: SIZES.base * 2,
            }}
            labelStyle={{
              color: COLORS.grey2,
              ...FONTS.h1,
              fontSize: 14,
            }}
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
      </View>

      <View>
        <TextButton
          label={"Login"}
          buttonContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h1,
            fontSize: 14,
          }}
          onPress={() => navigation.navigate("Map")}
        />

        <TextButton
          label={"Create Account"}
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
            borderWidth: 1,
            borderColor: COLORS.primary,
            marginTop: SIZES.padding * 2,
          }}
          labelStyle={{
            color: COLORS.primary,
            ...FONTS.h1,
            fontSize: 14,
          }}
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </AuthLayout>
  );
};

export default Signin;

const styles = StyleSheet.create({});
