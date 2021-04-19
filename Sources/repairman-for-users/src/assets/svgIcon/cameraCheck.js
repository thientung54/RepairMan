/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { G, Defs, Rect, Path, Mask, Use, Polygon, Circle } from 'react-native-svg';
const CameraCheckSvg = () => (
    <Svg width={97} height={66} viewBox="0 0 97 66">
        <Defs>
            <Path id="prefix__a" d="M0 0h28v28H0z" />
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
                    d="M28 14c0-7.732-6.268-14-14-14S0 6.268 0 14s6.268 14 14 14 14-6.268 14-14"
                    fill="#8BC540"
                    mask="url(#prefix__b)"
                />
            </G>
            <Path
                d="M79.93 22.207l-6.461-6.24a1.951 1.951 0 010-2.827c.808-.781 2.12-.781 2.928 0l3.55 3.427 9.664-9.23a2.123 2.123 0 012.928.015 1.951 1.951 0 01-.016 2.828L79.931 22.207z"
                fill="#FFF"
            />
        </G>
    </Svg>
);

export default CameraCheckSvg;
