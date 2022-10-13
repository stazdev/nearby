import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowLeft = (props) => (
  <Svg
    width={18}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.657 0c-.256 0-.513.1-.708.295L.293 5.95a.999.999 0 0 0 0 1.414l5.657 5.656a.999.999 0 0 0 1.414 0l.085-.086a.999.999 0 0 0 0-1.414L3.586 7.659h13.07a1 1 0 0 0 0-2H3.587L7.45 1.795a.999.999 0 0 0 0-1.414L7.364.295A.998.998 0 0 0 6.657 0Z"
      fill="#000"
    />
  </Svg>
)

export default ArrowLeft
