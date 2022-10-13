import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Menu = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#000">
      <Path d="M14.452.774H1.548C.697.774 0 1.471 0 2.323 0 3.174.697 3.87 1.548 3.87h12.904c.851 0 1.548-.697 1.548-1.548 0-.852-.697-1.549-1.548-1.549ZM14.452 6.452H1.548C.697 6.452 0 7.148 0 8c0 .852.697 1.548 1.548 1.548h12.904C15.303 9.548 16 8.852 16 8c0-.852-.697-1.548-1.548-1.548ZM14.452 12.13H1.548C.697 12.13 0 12.825 0 13.677c0 .851.697 1.548 1.548 1.548h12.904c.851 0 1.548-.697 1.548-1.548 0-.852-.697-1.549-1.548-1.549Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Menu
