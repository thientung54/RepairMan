import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const FlagVnSvg = () => (
  <Svg width={25} height={17}>
    <G fill="none" fillRule="evenodd">
      <Path fill="#EC1D24" d="M0 17h25V0H0z" />
      <Path
        fill="#FFF100"
        d="M12.5 3l1.7 3.292 3.8.528-2.75 2.562L15.9 13l-3.4-1.708L9.1 13l.65-3.618L7 6.82l3.8-.528z"
      />
    </G>
  </Svg>
);

export default FlagVnSvg;
