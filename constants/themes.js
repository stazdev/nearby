import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  black2: "#191a23",

  primary: "#003049",
  grey1: "#f8f8f8",
  grey2: "#b4b4b4",
  grey3: "#ededed",
  green: "#04ca5f",
  red: "#fc6949",
  yellow: "#fcbf49",
};

export const SIZES = {
  base: RFValue(8),
  font: RFValue(16),
  radius: RFValue(12),
  padding: RFValue(10),

  //font sizes
  h1: RFValue(30),
  h2: RFValue(24),
  h3: RFValue(18),
  h4: RFValue(16),
  h5: RFValue(14),
  body1: RFValue(24),
  body2: RFValue(18),
  body3: RFValue(16),
  body4: RFValue(10),

  //dimension
  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },

  h2: {
    fontFamily: "Inter-Bold",
    fontSize: SIZES.h2,
    lineHeight: 36,
  },

  h3: {
    fontFamily: "Inter-SemiBold",
    fontSize: SIZES.h3,
    lineHeight: 28.8,
  },

  h4: {
    fontFamily: "Inter-SemiBold",
    fontSize: SIZES.h4,
    lineHeight: 19.2,
  },
  h5: {
    fontFamily: "Inter-Regular",
    fontSize: SIZES.h5,
    lineHeight: 23.3,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
