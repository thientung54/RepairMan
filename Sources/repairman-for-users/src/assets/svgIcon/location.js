import * as React from "react"
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

function LocationIcon(props) {
  return (
    <Svg width={20} height={27} viewBox="0 0 20 27" {...props}>
      <G stroke="#FFD43F" strokeWidth={2} fill="none" fillRule="evenodd">
        <Path d="M10 25.65c.392 0 8.667-11.662 8.667-16.159 0-4.496-3.88-8.141-8.667-8.141-4.786 0-8.667 3.645-8.667 8.141 0 4.497 8.275 16.159 8.667 16.159z" />
        <Path d="M10 13.5c1.841 0 3.333-1.511 3.333-3.375S11.841 6.75 10 6.75c-1.84 0-3.333 1.511-3.333 3.375S8.159 13.5 10 13.5z" />
      </G>
    </Svg>
  )
}

export default LocationIcon