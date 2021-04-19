/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
function InboxSvg(props) {
  let strokeP, fillP;
  //console.log('props: ', props);
  if (props.focused) {
    fillP = props.color;
    strokeP = props.color;
  } else {
    fillP = 'none';
    strokeP = props.color;
  }
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <Path d="M23.4486087,2.61681159 C20.8,-0.0997101449 16.5054783,-0.0997101449 13.8568696,2.61681159 C13.5301739,2.95188406 13.2464348,3.31246377 13.0011304,3.6915942 C12.7558261,3.31246377 12.4709565,2.95072464 12.1453913,2.61681159 C9.49678261,-0.0997101449 5.20226087,-0.0997101449 2.55365217,2.61681159 C-0.0949565217,5.33333333 -0.0949565217,9.73797101 2.55365217,12.4544928 L13,23.1710145 L23.4486087,12.4544928 C26.0972174,9.73797101 26.0972174,5.33333333 23.4486087,2.61681159 Z" id="Path" stroke={strokeP} stroke-width="1.2" fill={fillP} stroke-linecap="square" />
      </G>
    </Svg>
  );
}

export default InboxSvg;
