import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DistanceWhite = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 1.667c4.6 0 8.333 3.733 8.333 8.333A8.331 8.331 0 0 1 10 18.334 8.326 8.326 0 0 1 1.666 10c0-4.6 3.725-8.333 8.334-8.333Zm3.208 5.592a.374.374 0 0 0-.466-.475L8.474 8.117a.557.557 0 0 0-.367.367l-1.333 4.275a.373.373 0 0 0 .466.466l4.25-1.333a.54.54 0 0 0 .367-.367l1.35-4.266Z"
      fill="#fff"
    />
  </Svg>
);

export default DistanceWhite;
