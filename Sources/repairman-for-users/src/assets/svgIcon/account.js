/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
function AccountSvg(props) {
  let strokeG, fillP;
  //console.log('props: ', props);
  if (props.focused) {
    fillP = props.color;
    strokeG = props.color;
  } else {
    fillP = 'none';
    strokeG = props.color;
  }
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="single-03-copy" stroke={strokeG} stroke-linecap="square" stroke-width="1.2">
          <Path d="M0,23 C0,16.9247 4.6805,12 10.4545455,12 L12.5454545,12 C18.3195,12 23,16.9247 23,23" id="Path" />
          <Circle id="Oval" fill={fillP} cx="11" cy="6" r="6" />
        </G>
      </G>
    </Svg>
  );
}

export default AccountSvg;
