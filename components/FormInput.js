import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const FormInput = ({
  containerStyle,
  value = "",
  placeholder,
  inputStyle,
  inputContainerStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  maxLength,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          flexDirection: "row",
          height: SIZES.height > 800 ? 55 : 51,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.height > 800 ? SIZES.base : 0,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.grey1,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{ flex: 1, ...inputStyle }}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray2}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={(text) => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
