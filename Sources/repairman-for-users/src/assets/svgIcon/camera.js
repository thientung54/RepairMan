/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { G, Defs, Rect, Path, Mask, Use, Polygon, Circle } from 'react-native-svg';
const CameraSvg = () => (
    <Svg width={98} height={66} viewBox="0 0 98 66">
        <Defs>
            <Path id="prefix__a" d="M0 0h29v29H0z" />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <G transform="translate(0 14)">
                <Rect fill="#9E9E9E" x={4} y={12} width={61} height={36} rx={2} />
                <Rect fill="#4A4A4A" x={6} y={4} width={10} height={3} rx={1.5} />
                <Rect
                    stroke="#4A4A4A"
                    strokeWidth={2.5}
                    x={1.25}
                    y={9.25}
                    width={66.5}
                    height={41.5}
                    rx={2}
                />
                <Circle
                    stroke="#4A4A4A"
                    strokeWidth={2.5}
                    fill="#9E9E9E"
                    cx={34.5}
                    cy={30.5}
                    r={14.25}
                />
                <Circle
                    stroke="#4A4A4A"
                    strokeWidth={2.5}
                    fill="#FFF"
                    cx={34.5}
                    cy={30.5}
                    r={9.25}
                />
                <Rect fill="#4A4A4A" x={51} y={14} width={12} height={8} rx={2} />
                <Path
                    stroke="#4A4A4A"
                    strokeWidth={2}
                    d="M21 9l5.226-9h17.65L49 9z"
                />
                <Path fill="#9E9E9E" d="M25 7l2.73-5h14.365L45 7z" />
            </G>
            <G transform="translate(69)">
                <Mask id="prefix__b" fill="#fff">
                    <Use xlinkHref="#prefix__a" />
                </Mask>
                <Path
                    d="M29 14.5C29 6.492 22.508 0 14.5 0S0 6.492 0 14.5 6.492 29 14.5 29 29 22.508 29 14.5"
                    fill="#BCBDC0"
                    mask="url(#prefix__b)"
                />
            </G>
            <Path
                d="M84 24c-1.1 0-2-.905-2-2.01V7.01C82 5.905 82.9 5 84 5s2 .905 2 2.01v14.98c0 1.105-.9 2.01-2 2.01"
                fill="#FFF"
            />
            <Path
                d="M74 15c0-1.1.952-2 2.116-2h15.768c1.164 0 2.116.9 2.116 2s-.952 2-2.116 2H76.116C74.952 17 74 16.1 74 15"
                fill="#FFF"
            />
        </G>
    </Svg>
);

export default CameraSvg;
