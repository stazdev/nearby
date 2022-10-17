import React, { useState } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { FormInput, TextButton } from "../../components";
import AuthLayout from "./AuthLayout";
import firebase from "firebase/app";
import "firebase/auth";
import { Formik } from "formik";
import * as yup from "yup";

const Signin = ({ navigation }) => {
  return (
    <AuthLayout title={"Welcome Back!"}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) =>
          firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {})
            .catch((error) => {
              alert(error.message);
            })
        }
        validationSchema={yup.object().shape({
          email: yup.string().email("Enter a valid email").required(),
          password: yup
            .string()
            .min(4)
            .max(10, "Password should not excced 10 chars.")
            .required(),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <>
            <View style={{ flex: 1, marginTop: SIZES.padding * 3 }}>
              <FormInput
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder={"E-mail"}
                value={values.email}
                onChange={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                errMsg={
                  touched.email &&
                  errors.email && (
                    <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                      {errors.email}
                    </Text>
                  )
                }
              />
              <FormInput
                placeholder={"Password"}
                value={values.password}
                onChange={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                secureTextEntry={true}
                containerStyle={{ marginTop: SIZES.radius * 2 }}
                errMsg={
                  touched.password &&
                  errors.password && (
                    <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                      {errors.password}
                    </Text>
                  )
                }
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
                  onPress={() => console.log("forgot password")}
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
                disabled={!isValid}
                onPress={() => handleSubmit()}
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
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Signin;

const styles = StyleSheet.create({});
