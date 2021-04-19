import React from 'react';
import Svg, { G, Defs, LinearGradient, Path, Mask, Use, Stop } from 'react-native-svg';
const ServiceSVG = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="65"
    height="65"
    viewBox="0 0 65 65">
    <Defs>
      <Path
        id="a"
        d="M32.5 65C14.55 65 0 50.45 0 32.5S14.55 0 32.5 0 65 14.55 65 32.5 50.45 65 32.5 65z"
      />
      <LinearGradient id="b" x1="10.4%" x2="10.4%" y1="40.271%" y2="166.379%">
        <Stop offset="0%" stopColor="#D9FBEC" />
        <Stop offset="100%" stopColor="#FFEAC5" />
      </LinearGradient>
      <Path
        id="d"
        d="M32.5 65C14.55 65 0 50.45 0 32.5S14.55 0 32.5 0 65 14.55 65 32.5 50.45 65 32.5 65z"
      />
      <LinearGradient
        id="e"
        x1="19.067%"
        x2="19.067%"
        y1="40.271%"
        y2="48.276%">
        <Stop offset="0%" stopColor="#D9FBEC" />
        <Stop offset="100%" stopColor="#FFEAC5" />
      </LinearGradient>
      <Path
        id="g"
        d="M3.5 7.017C1.567 7.017 0 5.447 0 3.51A3.504 3.504 0 013.5 0C5.433 0 7 1.57 7 3.509a3.504 3.504 0 01-3.5 3.508z"
      />
      <Path
        id="i"
        d="M3.5 7.017C1.567 7.017 0 5.447 0 3.51A3.504 3.504 0 013.5 0C5.433 0 7 1.57 7 3.509a3.504 3.504 0 01-3.5 3.508z"
      />
      <Path
        id="k"
        d="M3.5 7.017C1.567 7.017 0 5.447 0 3.51A3.504 3.504 0 013.5 0C5.433 0 7 1.57 7 3.509a3.504 3.504 0 01-3.5 3.508z"
      />
    </Defs>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G transform="translate(-271 -332)">
        <G transform="translate(33.48 201)">
          <G transform="translate(237.52 131)">
            <G>
              <G>
                <G>
                  <Mask id="c" fill="#fff">
                    <Use xlinkHref="#a" />
                  </Mask>
                  <Path
                    fill="url(#b)"
                    d="M-39 485L336 485 336 -327 -39 -327z"
                    mask="url(#c)"
                  />
                </G>
                <G>
                  <Mask id="f" fill="#fff">
                    <Use xlinkHref="#d" />
                  </Mask>
                  <Path
                    fill="url(#e)"
                    d="M-39 485L336 485 336 -327 -39 -327z"
                    mask="url(#f)"
                  />
                </G>
              </G>
              <G transform="translate(15 28)">
                <G>
                  <Mask id="h" fill="#fff">
                    <Use xlinkHref="#g" />
                  </Mask>
                  <Path
                    fill="#DC621F"
                    d="M-5 12.0172L12 12.0172 12 -5 -5 -5z"
                    mask="url(#h)"
                  />
                </G>
                <G transform="translate(14)">
                  <Mask id="j" fill="#fff">
                    <Use xlinkHref="#i" />
                  </Mask>
                  <Path
                    fill="#DC621F"
                    d="M-5 12.0172L12 12.0172 12 -5 -5 -5z"
                    mask="url(#j)"
                  />
                </G>
                <G transform="translate(28)">
                  <Mask id="l" fill="#fff">
                    <Use xlinkHref="#k" />
                  </Mask>
                  <Path
                    fill="#DC621F"
                    d="M-5 12.0172L12 12.0172 12 -5 -5 -5z"
                    mask="url(#l)"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default ServiceSVG;
