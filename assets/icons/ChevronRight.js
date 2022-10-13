import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronRight = (props) => (
  <Svg
    width={9}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.73.958 7.27 6.5 1.73 12.04"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronRight;
