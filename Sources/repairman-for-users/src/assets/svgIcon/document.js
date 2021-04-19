/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { G, Defs, Path, Mask, Use } from 'react-native-svg';
const DocumentSvg = () => (
    <Svg width={94} height={73} viewBox="0 0 94 73">
        <Defs>
            <Path id="prefix__a" d="M0 0h29v29H0z" />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path
                d="M45.393 17.48l6.222 42.62.559 4.276c.18 1.378-.863 2.631-2.33 2.8l-39.169 4.518c-1.467.169-2.801-.81-2.982-2.188l-6.03-46.13c-.09-.688.431-1.315 1.165-1.4l.014-.001 3.25-.342m2.627-.277l3.068-.324"
                stroke="#4A4A4A"
                strokeWidth={2.5}
                fill="#FFF"
                strokeLinecap="round"
            />
            <Path
                d="M43.406 20l5.574 38.55.502 3.866c.161 1.246-.762 2.379-2.062 2.53l-34.717 4.037c-1.3.151-2.485-.736-2.646-1.982L4.76 26.15a2 2 0 011.752-2.243l3.596-.419"
                fill="#9E9E9E"
            />
            <Path
                d="M17.5 9.25A2.75 2.75 0 0014.75 12v44a2.75 2.75 0 002.75 2.75h36A2.75 2.75 0 0056.25 56V19.494a2.75 2.75 0 00-.864-2.002L47.43 9.998a2.75 2.75 0 00-1.886-.748H17.5z"
                stroke="#4A4A4A"
                strokeWidth={2.5}
                fill="#FFF"
            />
            <Path
                d="M46.5 9v8.74c0 1.248.86 2.26 1.92 2.26h8.16M21.5 20.5h16m-16 9h28m-28 7h28m-28 7h28m-28 8h16"
                stroke="#4A4A4A"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <G>
                <G transform="translate(65)">
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
                    d="M80 24c-1.1 0-2-.905-2-2.01V7.01C78 5.905 78.9 5 80 5s2 .905 2 2.01v14.98c0 1.105-.9 2.01-2 2.01"
                    fill="#FFF"
                />
                <Path
                    d="M70 15c0-1.1.952-2 2.116-2h15.768c1.164 0 2.116.9 2.116 2s-.952 2-2.116 2H72.116C70.952 17 70 16.1 70 15"
                    fill="#FFF"
                />
            </G>
        </G>
    </Svg>
);

export default DocumentSvg;
