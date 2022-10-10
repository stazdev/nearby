import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { FormInput, TextButton } from "../../components";
import AuthLayout from "./AuthLayout";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  return (
    <AuthLayout title={"Create Account"}>
      <View style={{ flex: 1, marginTop: SIZES.padding * 3 }}>
        <FormInput
          keyboardType="number"
          autoCompleteType="email"
          placeholder={"E-mail"}
          value={email}
          onChange={(value) => {
            setEmail(value);
          }}
        />
        <FormInput
          keyboardType="number-pad"
          autoCompleteType="number"
          value={number}
          prependComponent={
            <View style={{ marginRight: 5 }}>
              <Text>+234</Text>
            </View>
          }
          containerStyle={{ marginTop: SIZES.radius * 2 }}
          onChange={(value) => {
            setNumber(value);
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
      </View>

      <View>
        <TextButton
          label={"Create Account"}
          buttonContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
            marginTop: SIZES.padding * 3,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h1,
            fontSize: 14,
          }}
          onPress={() => console.log("hello")}
        />
      </View>
    </AuthLayout>
  );
};

export default Signup;

const styles = StyleSheet.create({});
