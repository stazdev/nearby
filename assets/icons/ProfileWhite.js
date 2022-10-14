import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileWhite = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 12.645c3.616 0 6.667.587 6.667 2.854 0 2.268-3.072 2.834-6.667 2.834-3.615 0-6.667-.587-6.667-2.854 0-2.268 3.071-2.834 6.667-2.834Zm0-10.979a4.394 4.394 0 0 1 4.412 4.41A4.395 4.395 0 0 1 10 10.486a4.396 4.396 0 0 1-4.412-4.41A4.395 4.395 0 0 1 10 1.666Z"
      fill="#fff"
    />
  </Svg>
);

export default ProfileWhite;
