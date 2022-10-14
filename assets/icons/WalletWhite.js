import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WalletWhite = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.763 2.5c2.874 0 4.57 1.654 4.57 4.485h-3.526v.029c-1.636 0-2.963 1.293-2.963 2.888 0 1.596 1.327 2.89 2.963 2.89h3.526v.26c0 2.794-1.696 4.448-4.57 4.448H6.237c-2.874 0-4.57-1.654-4.57-4.449V6.95c0-2.795 1.696-4.449 4.57-4.449h7.526Zm3.948 5.727c.344 0 .622.272.622.607v2.109a.622.622 0 0 1-.622.606h-2.837c-.828.011-1.553-.542-1.74-1.329a1.652 1.652 0 0 1 .36-1.376c.323-.385.804-.61 1.313-.617h2.904Zm-2.504.975h-.274a.638.638 0 0 0-.45.177.606.606 0 0 0-.187.437c0 .344.284.624.637.628h.274a.63.63 0 0 0 .637-.62.63.63 0 0 0-.637-.622Zm-4.889-3.46H5.615a.63.63 0 0 0-.637.615c0 .344.284.624.637.628h4.704a.63.63 0 0 0 .637-.621.63.63 0 0 0-.637-.621Z"
      fill="#fff"
    />
  </Svg>
);

export default WalletWhite;