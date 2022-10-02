import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export const COLORS = {};

export const SIZES = {
  base: RFValue(8),
  font: RFValue(16),
  radius: RFValue(12),
  padding: RFValue(10),
};
