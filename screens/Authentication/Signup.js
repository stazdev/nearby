import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { FormInput, TextButton } from "../../components";
import AuthLayout from "./AuthLayout";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsloading] = useState(false);

  function SignUp() {
    var d = new Date();

    var userProfile = {
      created: d,
      displayName: name,
      phoneNumber: number,
      email: email,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return res.user.updateProfile(userProfile);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <AuthLayout title={"Create Account"}>
      <View style={{ flex: 1, marginTop: SIZES.padding * 3 }}>
        <FormInput
          keyboardType="text"
          placeholder={"User name"}
          value={name}
          onChange={(value) => {
            setName(value);
          }}
        />
        <FormInput
          keyboardType="number"
          autoCompleteType="email"
          placeholder={"E-mail"}
          containerStyle={{ marginTop: SIZES.radius * 2 }}
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
          secureTextEntry={true}
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
          onPress={() => SignUp()}
        />
      </View>
    </AuthLayout>
  );
};

export default Signup;

const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
