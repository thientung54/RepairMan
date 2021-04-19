/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
function HomeSvg(props) {
  let fillP, fillP1, strokeG;
  //console.log('props: ', props);
  if (props.focused) {
    fillP = props.color;
    fillP1 = '#FFFFFF';
    strokeG = 'none';
  } else {
    fillP = 'none';
    fillP1 = props.color;
    strokeG = props.color;
  }
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G id="Symbols" stroke={strokeG} stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="menu/bar" fill={strokeG}>
          <Path d="M11,23 C4.93520495,23 0,17.8416951 0,11.5 C0,5.15953245 4.93403074,0 11,0 C17.064795,0 22,5.15830487 22,11.5 C22,17.8416951 17.0659693,23 11,23 Z" id="Shape" fill={fillP} />
          <Path d="M15.0366712,4.12773002 L8.38076666,9.42793434 C8.26357247,9.5211571 8.18624848,9.65731139 8.16570929,9.80695844 L7.00584936,18.3135349 C6.93335811,18.8483392 7.55074189,19.2052842 7.96635837,18.8691916 L14.5691027,13.5383219 C14.6838805,13.4463258 14.7587881,13.3126247 14.7805355,13.1654309 L15.9935557,4.6907464 C16.0696715,4.15716878 15.4547041,3.7953173 15.0366712,4.12773002 Z M9.76637266,11.9751435 C9.49978429,10.9725316 10.0602622,9.94797703 11.0174108,9.68635271 C11.9745594,9.42472839 12.967039,10.0239325 13.2336273,11.0248565 C13.5002157,12.0274684 12.9397378,13.052023 11.9825892,13.3136473 C11.0254406,13.5752716 10.032961,12.9760675 9.76637266,11.9751435 Z" id="Shape" fill={fillP1} />
        </G>
      </G>
    </Svg>
  );
}

export default HomeSvg;
