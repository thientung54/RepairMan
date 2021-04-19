/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { G, Polygon, Line } from 'react-native-svg';
function OrderSvg(props) {
  let strokeL, strokeP, strokeG, fillP;
  //console.log('props: ', props);
  if (props.focused) {
    strokeL = '#FFFFFF';
    strokeP = props.color;
    strokeG = '';
    fillP = props.color;
  } else {
    strokeL = props.color;
    strokeP = props.color;
    strokeG = props.color;
    fillP = 'none';
  }
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <G id="menu/bar" stroke={strokeG}>
          <G id="Group-Copy-2" stroke-width="1.2">
            <G id="Group-Copy">
              <Polygon stroke={strokeP} fill={fillP} id="Path" points="0 0 18 0 18 20 15 18.0952381 12 20 9 18.0952381 6 20 3 18.0952381 0 20" />
              <Line x1="4" y1="9.5" x2="10" y2="9.5" id="Path" stroke={strokeL} />
              <Line x1="13" y1="9.5" x2="14" y2="9.5" id="Path" stroke={strokeL} />
              <Line x1="4" y1="4.5" x2="10" y2="4.5" id="Path" stroke={strokeL} />
              <Line x1="13" y1="4.5" x2="14" y2="4.5" id="Path" stroke={strokeL} />
              <Line x1="4" y1="14.5" x2="10" y2="14.5" id="Path" stroke={strokeL} />
              <Line x1="13" y1="14.5" x2="14" y2="14.5" id="Path" stroke={strokeL} />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default OrderSvg;
