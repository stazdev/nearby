import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const FormInput = ({
  label,
  errMsg,
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
      {(label || errMsg) && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: SIZES.base,
          }}
        >
          <Text style={{ color: COLORS.gray7, ...FONTS.h5 }}>{label}</Text>
          <Text style={{ color: COLORS.red, ...FONTS.h6 }}>{errMsg}</Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
