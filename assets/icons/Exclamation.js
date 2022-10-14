import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Exclamation = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0Zm0 14.745c-.704 0-1.185-.542-1.185-1.245 0-.723.502-1.245 1.185-1.245.722 0 1.185.522 1.185 1.245 0 .704-.463 1.245-1.185 1.245Zm.466-4.754c-.179.611-.743.622-.932 0-.216-.717-.987-3.439-.987-5.207 0-2.332 2.919-2.343 2.919 0-.001 1.779-.813 4.57-1 5.207Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Exclamation
