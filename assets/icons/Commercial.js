import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Commercial = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.764 3c-.468 0-.896.266-1.106.684L18 5l-6.395 2.74a.998.998 0 0 0-.605.918v6.682a1 1 0 0 0 .605.92L18 19l.658 1.316A1.236 1.236 0 0 0 21 19.763V13.73A2 2 0 0 0 21.732 11 2.001 2.001 0 0 0 21 10.27V4.236C21 3.553 20.447 3 19.764 3ZM5 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1H5Z"
      fill="#fff"
    />
  </Svg>
);

export default Commercial;
