import React from 'react';
import Svg, {
  G,
  Defs,
  LinearGradient,
  Path,
  Stop,
  Circle,
} from 'react-native-svg';

const FixElectricSVG = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="65"
    viewBox="0 0 65 65">
    <Defs>
      <LinearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#D9FBEC" />
        <Stop offset="100%" stopColor="#FFEAC5" />
      </LinearGradient>
      <LinearGradient id="b" x1="-.006%" x2="99.943%" y1="50%" y2="50%">
        <Stop offset="2.193%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="c" x1="-.035%" x2="100.031%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#FFCA60" />
        <Stop offset="9%" stopColor="#FFCE52" />
        <Stop offset="23%" stopColor="#FFD146" />
        <Stop offset="43%" stopColor="#FFD43F" />
        <Stop offset="100%" stopColor="#FFD43F" />
      </LinearGradient>
      <LinearGradient id="d" x1=".024%" x2="100.02%" y1="50.017%" y2="50.017%">
        <Stop offset="0%" stopColor="#FFC520" />
        <Stop offset="100%" stopColor="#F58528" />
      </LinearGradient>
      <LinearGradient id="e" x1=".015%" x2="99.97%" y1="49.977%" y2="49.977%">
        <Stop offset="0%" stopColor="#FFC520" />
        <Stop offset="100%" stopColor="#F58528" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G transform="translate(-39 -135)">
        <G transform="translate(39 135)">
          <G>
            <G fill="url(#a)">
              <G>
                <Circle cx="32.5" cy="32.5" r="32.5" />
              </G>
            </G>
            <G fillRule="nonzero" transform="translate(13 5)">
              <G transform="translate(5)">
                <Path
                  fill="url(#b)"
                  d="M21.738 0C20.723.506.103 31.313.103 31.313l14.257.405L10.439 55 24.54 25.965l-11.798-.793L21.738 0z"
                />
                <Path
                  fill="url(#c)"
                  d="M21.738 0c-1.015.506-17.61 29.643-17.61 29.643l12.588.742L10.422 55 26.88 24.632l-11.798-.793L21.738 0z"
                />
              </G>
              <G transform="translate(0 8)">
                <Path
                  fill="url(#d)"
                  d="M15.369 34.305C8.225 32.664 2.888 26.319 2.888 18.75c0-7.818 5.708-14.348 13.207-15.704l2.027-2.98C8.124.536.135 8.739.135 18.751c0 8.89 6.283 16.34 14.677 18.232l.557-2.678z"
                />
                <Path
                  fill="url(#e)"
                  d="M26.684 1.691l-.776 2.662c5.42 2.578 9.187 8.07 9.187 14.415 0 6.513-3.952 12.121-9.61 14.599l-2.043 3.566c8.258-1.992 14.423-9.376 14.423-18.165 0-7.618-4.594-14.164-11.18-17.077z"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default FixElectricSVG;
