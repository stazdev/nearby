import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Location = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.25 2c4.549 0 8.25 3.729 8.25 8.313 0 5.635-6.457 11.187-8.25 11.187C10.455 21.5 4 15.948 4 10.313 4 5.729 7.7 2 12.25 2Zm0 1.5c-3.722 0-6.75 3.057-6.75 6.813 0 4.779 5.623 9.435 6.75 9.683 1.126-.249 6.75-4.905 6.75-9.683C19 6.557 15.972 3.5 12.25 3.5Zm0 3.5a3.254 3.254 0 0 1 3.25 3.251 3.253 3.253 0 0 1-3.25 3.249A3.253 3.253 0 0 1 9 10.251 3.254 3.254 0 0 1 12.25 7Zm0 1.5A1.751 1.751 0 1 0 14 10.251c0-.966-.784-1.751-1.75-1.751Z"
      fill="#000"
    />
  </Svg>
);

export default Location;
