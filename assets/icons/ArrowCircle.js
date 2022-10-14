import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowCircle = (props) => (
  <Svg
    width={71}
    height={70}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.5 0c19.299 0 35 15.701 35 35s-15.701 35-35 35S.5 54.299.5 35s15.701-35 35-35Zm0 5.25C19.096 5.25 5.75 18.596 5.75 35S19.096 64.75 35.5 64.75 65.25 51.404 65.25 35 51.904 5.25 35.5 5.25Zm14.004 22.84a2.629 2.629 0 0 1 .007 3.714L37.358 44.005c-.391.398-.9.654-1.444.74l-.414.034a2.61 2.61 0 0 1-1.858-.774l-12.149-12.2a2.626 2.626 0 1 1 3.72-3.707L35.5 38.437l10.29-10.34a2.626 2.626 0 0 1 3.714-.006Z"
      fill="#04CA5F"
    />
  </Svg>
)

export default ArrowCircle
