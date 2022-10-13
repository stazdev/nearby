import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LocationGrey = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.187 1.5c3.412 0 6.188 2.797 6.188 6.235 0 4.226-4.842 8.39-6.188 8.39C7.842 16.125 3 11.961 3 7.735 3 4.297 5.775 1.5 9.187 1.5Zm0 1.125c-2.791 0-5.062 2.293-5.062 5.11 0 3.584 4.218 7.076 5.062 7.262.845-.187 5.063-3.679 5.063-7.262 0-2.817-2.271-5.11-5.063-5.11Zm0 2.625a2.44 2.44 0 0 1 2.438 2.438 2.44 2.44 0 0 1-2.437 2.437A2.44 2.44 0 0 1 6.75 7.688 2.44 2.44 0 0 1 9.188 5.25Zm0 1.125A1.313 1.313 0 1 0 10.5 7.688c0-.724-.588-1.313-1.312-1.313Z"
      fill="#B4B4B4"
    />
  </Svg>
);

export default LocationGrey;
