import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LocationWhite = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.623 2.539a6.417 6.417 0 0 1 6.552.054c1.996 1.24 3.209 3.455 3.198 5.837-.047 2.366-1.348 4.59-2.974 6.31a17.44 17.44 0 0 1-3.128 2.626 1.093 1.093 0 0 1-.38.134.763.763 0 0 1-.363-.11 17.243 17.243 0 0 1-4.507-4.236 8.642 8.642 0 0 1-1.688-4.843l.005-.255C3.423 5.77 4.661 3.68 6.623 2.54Zm4.075 3.817a2.185 2.185 0 0 0-2.416.484A2.286 2.286 0 0 0 7.8 9.299a2.214 2.214 0 0 0 2.046 1.394 2.179 2.179 0 0 0 1.568-.653c.416-.422.649-.996.647-1.595a2.257 2.257 0 0 0-1.362-2.09Z"
      fill="#fff"
    />
  </Svg>
);

export default LocationWhite;