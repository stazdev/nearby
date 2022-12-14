import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Logout = (props) => (
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
      d="M11.309 2a4.441 4.441 0 0 1 4.436 4.436v.932a.75.75 0 0 1-1.5 0v-.932A2.939 2.939 0 0 0 11.309 3.5H6.433A2.937 2.937 0 0 0 3.5 6.436v11.129A2.937 2.937 0 0 0 6.433 20.5h4.886a2.929 2.929 0 0 0 2.925-2.924v-.943a.75.75 0 0 1 1.5 0v.943A4.43 4.43 0 0 1 11.32 22H6.433A4.439 4.439 0 0 1 2 17.565V6.436A4.44 4.44 0 0 1 6.433 2h4.876Zm8.08 6.554 2.928 2.915a.74.74 0 0 1 .07.081l-.07-.081a.74.74 0 0 1 .22.531l-.005.062-.002.04a.09.09 0 0 1 0 .005l.008-.107a.754.754 0 0 1-.228.538l-2.921 2.909a.747.747 0 0 1-1.06-.002.75.75 0 0 1 .002-1.06l1.64-1.635H9.746a.75.75 0 0 1 0-1.5h10.226l-1.641-1.634a.749.749 0 1 1 1.058-1.062Z"
      fill="#000"
    />
  </Svg>
);

export default Logout;
