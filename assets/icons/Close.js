import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Close = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m9.878 7.999 5.728-5.715A1.338 1.338 0 0 0 13.714.392L8 6.12 2.286.392A1.337 1.337 0 1 0 .394 2.284l5.728 5.715-5.728 5.715a1.331 1.331 0 0 0 0 1.892 1.33 1.33 0 0 0 1.892 0L8 9.877l5.714 5.729a1.33 1.33 0 0 0 1.892 0 1.334 1.334 0 0 0 0-1.892L9.878 8Z"
      fill="#fff"
    />
  </Svg>
);

export default Close;
