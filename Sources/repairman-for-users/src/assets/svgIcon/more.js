import React from 'react';
import Svg, {G, Defs, LinearGradient, Path, Mask, Use, Stop} from 'react-native-svg';
const MoreSVG = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={65}
    viewBox="0 0 65 65">
    <Defs>
      <Path
        d="M32.5 65C14.55 65 0 50.45 0 32.5S14.55 0 32.5 0 65 14.55 65 32.5 50.45 65 32.5 65z"
        id="prefix__a"
      />
      <Path
        d="M32.5 65C14.55 65 0 50.45 0 32.5S14.55 0 32.5 0 65 14.55 65 32.5 50.45 65 32.5 65z"
        id="prefix__d"
      />
      <Path
        d="M3.5 7.017C1.567 7.017 0 5.447 0 3.51A3.504 3.504 0 013.5 0C5.433 0 7 1.57 7 3.509a3.504 3.504 0 01-3.5 3.508z"
        id="prefix__g"
      />
      <Path
        d="M3.5 7.017C1.567 7.017 0 5.447 0 3.51A3.504 3.504 0 013.5 0C5.433 0 7 1.57 7 3.509a3.504 3.504 0 01-3.5 3.508z"
        id="prefix__i"
      />
      <Path
        d="M3.5 7.017C1.567 7.017 0 5.447 0 3.51A3.504 3.504 0 013.5 0C5.433 0 7 1.57 7 3.509a3.504 3.504 0 01-3.5 3.508z"
        id="prefix__k"
      />
      <LinearGradient
        x1="10.4%"
        y1="40.271%"
        x2="10.4%"
        y2="166.379%"
        id="prefix__b">
        <Stop stopColor="#D9FBEC" offset="0%" />
        <Stop stopColor="#FFEAC5" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="19.067%"
        y1="40.271%"
        x2="19.067%"
        y2="48.276%"
        id="prefix__e">
        <Stop stopColor="#D9FBEC" offset="0%" />
        <Stop stopColor="#FFEAC5" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <G>
        <Mask id="prefix__c" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          fill="url(#prefix__b)"
          mask="url(#prefix__c)"
          d="M-39 485h375v-812H-39z"
        />
      </G>
      <G>
        <Mask id="prefix__f" fill="#fff">
          <Use xlinkHref="#prefix__d" />
        </Mask>
        <Path
          fill="url(#prefix__e)"
          mask="url(#prefix__f)"
          d="M-39 485h375v-812H-39z"
        />
      </G>
      <G>
        <G transform="translate(15 28)">
          <Mask id="prefix__h" fill="#fff">
            <Use xlinkHref="#prefix__g" />
          </Mask>
          <Path
            fill="#DC621F"
            mask="url(#prefix__h)"
            d="M-5 12.017h17V-5H-5z"
          />
        </G>
        <G transform="translate(29 28)">
          <Mask id="prefix__j" fill="#fff">
            <Use xlinkHref="#prefix__i" />
          </Mask>
          <Path
            fill="#DC621F"
            mask="url(#prefix__j)"
            d="M-5 12.017h17V-5H-5z"
          />
        </G>
        <G transform="translate(43 28)">
          <Mask id="prefix__l" fill="#fff">
            <Use xlinkHref="#prefix__k" />
          </Mask>
          <Path
            fill="#DC621F"
            mask="url(#prefix__l)"
            d="M-5 12.017h17V-5H-5z"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default MoreSVG;
