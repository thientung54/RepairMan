import React from 'react';
import Svg, {
  G,
  Defs,
  LinearGradient,
  Path,
  Stop,
  Circle,
} from 'react-native-svg';

const FixInternetSVG = () => (
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
      <LinearGradient id="b" x1="0%" x2="100.003%" y1="50%" y2="50%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1="31.816%"
        x2="89.224%"
        y1="30.948%"
        y2="83.882%">
        <Stop offset="0%" stopColor="#FFC520" />
        <Stop offset="100%" stopColor="#F58528" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1="24.772%"
        x2="92.871%"
        y1="12.223%"
        y2="96.548%">
        <Stop offset="0%" stopColor="#F58528" />
        <Stop offset="100%" stopColor="#BB4B1D" />
      </LinearGradient>
      <LinearGradient id="e" x1="5.592%" x2="90.555%" y1="12.974%" y2="91.327%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="f" x1="23.359%" x2="66.141%" y1="17.96%" y2="82.635%">
        <Stop offset="0%" stopColor="#FFC520" />
        <Stop offset="100%" stopColor="#F58528" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1="19.394%"
        x2="62.634%"
        y1="13.938%"
        y2="82.583%">
        <Stop offset="0%" stopColor="#9D3D12" />
        <Stop offset="43.33%" stopColor="#5D1C00" />
        <Stop offset="99.47%" stopColor="#C24E1F" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1="19.164%"
        x2="80.836%"
        y1="30.903%"
        y2="69.511%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.27%" stopColor="#DF6254" />
      </LinearGradient>
      <LinearGradient id="i" x1="25.981%" x2="74.189%" y1="6.093%" y2="78.034%">
        <Stop offset="0%" stopColor="#F58528" />
        <Stop offset="100%" stopColor="#BB4B1D" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1="38.728%"
        x2="58.853%"
        y1="23.708%"
        y2="70.649%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.54%" stopColor="#FFE5AD" />
      </LinearGradient>
      <LinearGradient id="k" x1="45.425%" x2="53.67%" y1="23.008%" y2="73.78%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.27%" stopColor="#DF6254" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1="26.454%"
        x2="71.379%"
        y1="10.265%"
        y2="92.442%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.54%" stopColor="#FFE5AD" />
      </LinearGradient>
      <LinearGradient id="m" x1="25.442%" x2="85.63%" y1="-2.584%" y2="85.91%">
        <Stop offset="0%" stopColor="#FFC520" />
        <Stop offset="100%" stopColor="#F58528" />
      </LinearGradient>
      <LinearGradient id="n" x1="32.049%" x2="95.933%" y1="21.404%" y2="73.32%">
        <Stop offset="0%" stopColor="#9D3D12" />
        <Stop offset="43.33%" stopColor="#5D1C00" />
        <Stop offset="99.47%" stopColor="#C24E1F" />
      </LinearGradient>
      <LinearGradient id="o" x1="23.526%" x2="76.409%" y1="11.16%" y2="96.268%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.54%" stopColor="#FFE5AD" />
      </LinearGradient>
      <LinearGradient id="p" x1="9.711%" x2="73.796%" y1="18.61%" y2="87.184%">
        <Stop offset="0%" stopColor="#FFD7A0" />
        <Stop offset="99.54%" stopColor="#FFE5AD" />
      </LinearGradient>
      <LinearGradient id="q" x1="33.275%" x2="66.94%" y1="45.854%" y2="54.199%">
        <Stop offset="0%" stopColor="#F58528" />
        <Stop offset="100%" stopColor="#BB4B1D" />
      </LinearGradient>
      <LinearGradient id="r" x1="5.234%" x2="88.115%" y1="6.731%" y2="104.868%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.27%" stopColor="#DF6254" />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1="45.945%"
        x2="54.094%"
        y1="27.429%"
        y2="72.787%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.27%" stopColor="#DF6254" />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1="16.757%"
        x2="83.243%"
        y1="30.734%"
        y2="69.419%">
        <Stop offset="0%" stopColor="#F58528" />
        <Stop offset="100%" stopColor="#BB4B1D" />
      </LinearGradient>
      <LinearGradient
        id="u"
        x1="38.043%"
        x2="62.608%"
        y1="12.803%"
        y2="83.399%">
        <Stop offset="0%" stopColor="#FFC520" />
        <Stop offset="100%" stopColor="#F58528" />
      </LinearGradient>
      <LinearGradient id="v" x1="42.971%" x2="55.82%" y1="26.656%" y2="69.437%">
        <Stop offset="0%" stopColor="#F58528" />
        <Stop offset="100%" stopColor="#BB4B1D" />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1="57.081%"
        x2="41.683%"
        y1="103.83%"
        y2="-13.225%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.27%" stopColor="#DF6254" />
      </LinearGradient>
      <LinearGradient
        id="x"
        x1="59.988%"
        x2="41.122%"
        y1="64.852%"
        y2="33.862%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.54%" stopColor="#FFE5AD" />
      </LinearGradient>
      <LinearGradient
        id="y"
        x1="-44.295%"
        x2="166.018%"
        y1="16.558%"
        y2="89.815%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.27%" stopColor="#DF6254" />
      </LinearGradient>
      <LinearGradient id="z" x1="48.329%" x2="51.486%" y1="98.901%" y2="1.826%">
        <Stop offset="0.266%" stopColor="#F7A283" />
        <Stop offset="99.27%" stopColor="#DF6254" />
      </LinearGradient>
      <LinearGradient id="A" x1="37.889%" x2="60.948%" y1="24.46%" y2="73.087%">
        <Stop offset="0%" stopColor="#F58528" />
        <Stop offset="100%" stopColor="#BB4B1D" />
      </LinearGradient>
      <LinearGradient id="B" x1="20.877%" x2="79.748%" y1="4.384%" y2="94.834%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="C" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#FFCA60" />
        <Stop offset="9%" stopColor="#FFCE52" />
        <Stop offset="23%" stopColor="#FFD146" />
        <Stop offset="43%" stopColor="#FFD43F" />
        <Stop offset="100%" stopColor="#FFD43F" />
      </LinearGradient>
      <LinearGradient id="D" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="E" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="F" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="G" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#F58528" />
        <Stop offset="100%" stopColor="#BB4B1D" />
      </LinearGradient>
      <LinearGradient id="H" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#9D3D12" />
        <Stop offset="43.33%" stopColor="#5D1C00" />
        <Stop offset="99.47%" stopColor="#C24E1F" />
      </LinearGradient>
      <LinearGradient id="I" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#9D3D12" />
        <Stop offset="43.33%" stopColor="#5D1C00" />
        <Stop offset="99.47%" stopColor="#C24E1F" />
      </LinearGradient>
      <LinearGradient id="J" x1="0%" x2="100%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#9D3D12" />
        <Stop offset="43.33%" stopColor="#5D1C00" />
        <Stop offset="99.47%" stopColor="#C24E1F" />
      </LinearGradient>
      <LinearGradient id="K" x1="0%" x2="99.896%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#9D3D12" />
        <Stop offset="43.33%" stopColor="#5D1C00" />
        <Stop offset="99.47%" stopColor="#C24E1F" />
      </LinearGradient>
      <LinearGradient
        id="L"
        x1="55.087%"
        x2="48.563%"
        y1="40.293%"
        y2="56.649%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="M" x1="55.069%" x2="48.87%" y1="40.939%" y2="55.965%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient
        id="N"
        x1="55.059%"
        x2="49.027%"
        y1="41.262%"
        y2="55.627%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G transform="translate(-39 -263)">
        <G transform="translate(39 263)">
          <G>
            <Circle cx="32.5" cy="32.5" r="32.5" fill="url(#a)" />
            <G transform="translate(6 3)">
              <Path
                fill="url(#b)"
                fillRule="nonzero"
                d="M45.61 55H7.39C6.625 55 6 54.324 6 53.5c0-.826.627-1.5 1.39-1.5h38.22c.765 0 1.39.676 1.39 1.5.002.826-.625 1.5-1.39 1.5z"
                opacity="0.29"
              />
              <G>
                <G>
                  <Path
                    fill="url(#c)"
                    fillRule="nonzero"
                    d="M8.935 32.982s6.55 4.779 8.51 4.65c1.962-.13 4.386-1.438 4.386-1.438l-.169-4.79-3.421-4.58s.948 1.244-1.612 2.895c-2.56 1.652-2.816-.308-2.816-.308l-.12 1.847-4.758 1.724z"
                  />
                  <Path
                    fill="url(#d)"
                    fillRule="nonzero"
                    d="M13.694 31.258s4.334 3.515 5.668 4.066c1.335.552 2.47.87 2.47.87l-.168-4.79-3.23-4.371s-.735 2.443-2.246 3.047c-1.512.605-2.399-.695-2.399-.695l-.095 1.873z"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.303 35.712L13.936 36.242"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.992522 28.5383023L18.139182 34.6086957 16.8492402 35.110559"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.869 36.242L14.719 36.671"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.7008234 27.3954451L18.9241466 35.1022774 17.5258764 35.6240166"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.453 36.648L15.429 37.025"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.3974586 28.3378882L19.6891121 35.4567288 18.0275204 36.0679089"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.086 36.939L16.064 37.304"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.16 29.368c.06.081.282 6.372.282 6.372l-1.878.67M17.71 37.22c-.544.193-.93.332-.922.334"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.94 30.375l.26 5.623-2.118.74"
                  />
                  <Path
                    fill="url(#e)"
                    fillRule="nonzero"
                    d="M21.757 34.108l18.866 15.793-.24.529S24.816 39.405 21.207 36.502c-.116-.093 0 0 0 0l.624-.308-.074-2.086z"
                  />
                  <Path
                    fill="url(#f)"
                    fillRule="nonzero"
                    d="M14.904 23.49s1.747-.986 3.26.826c1.837 2.202.352 4.524-.766 5.387-.834.642-2.959 1.38-3.61-.32 0 0 2.64-.328 3.458-2.481.692-1.815-.295-2.957-2.342-3.412z"
                  />
                  <Path
                    fill="url(#g)"
                    fillRule="nonzero"
                    d="M13.788 29.383l.34-5.891s2.903-.302 3.715 1.767c.668 1.702-.704 3.142-.704 3.142s-1.653 1.792-3.351.982z"
                  />
                  <Path
                    fill="url(#h)"
                    fillRule="nonzero"
                    d="M13.2944005 30.9548654L5.37475763 24.9391304 3.70983271 25.8219462 2.62988141 25.1047619 0.0816629842 26.5391304 8.9162646 32.4587992z"
                  />
                  <Path
                    fill="url(#i)"
                    fillRule="nonzero"
                    d="M5.37475763 24.9391304L5.51475132 21.9942029 4.35147044 23.0310559 3.05486224 21.9080745 2.62988141 25.1047619 3.70983271 25.8219462z"
                  />
                  <Path
                    fill="url(#j)"
                    fillRule="nonzero"
                    d="M0.0816629842 26.5391304L0.961623303 18.2144928 3.54317356 16.7320911 4.72145376 16.7006211 4.35147044 23.0310559 3.05486224 21.9080745 2.62988141 25.1047619z"
                  />
                  <Path
                    fill="url(#k)"
                    fillRule="nonzero"
                    d="M5.51475132 21.9942029L5.03643955 21.4708075 5.37475763 16.5184265 4.72145376 16.7006211 4.35147044 23.0310559z"
                  />
                  <Path
                    fill="url(#l)"
                    fillRule="nonzero"
                    d="M5.37475763 16.5184265L9.43124138 20.0761905 13.7177147 23.8691511 13.2944005 30.9548654 5.37475763 24.9391304 5.51475132 21.9942029 5.03643955 21.4708075z"
                  />
                  <Path
                    fill="url(#m)"
                    fillRule="nonzero"
                    d="M18.238 11.78c-.397.011-2.037-1.776-1.744-2.578 0 0 1.105.945 1.894.822l-.15 1.756z"
                  />
                  <Path
                    fill="url(#n)"
                    fillRule="nonzero"
                    d="M18.388 10.024l.196-1.48s-1.773-.305-2.09.66c0-.002 1.124.986 1.894.82z"
                  />
                  <Path
                    fill="url(#o)"
                    fillRule="nonzero"
                    d="M21.1423799 3.10724638L19.4907878 3.03271222 19.3741263 0.695652174 20.7807296 0.520082816z"
                  />
                  <Path
                    fill="url(#p)"
                    fillRule="nonzero"
                    d="M20.822 2.079c-.078-.116-.041-1.559-.041-1.559L22.39 0l.518 1.345-2.087.734z"
                  />
                  <Path
                    fill="url(#q)"
                    fillRule="nonzero"
                    d="M22.390657 0L20.8057285 0.498550725 19.3991252 0.674120083 21.2323759 0.117598344z"
                  />
                  <Path
                    fill="#9A4910"
                    fillRule="nonzero"
                    d="M8.93459711 32.9821946L8.9162646 32.4587992 13.2944005 30.9548654 13.7643793 23.0956522 14.1276963 23.4915114 13.6943825 31.257971z"
                  />
                  <Path
                    fill="url(#r)"
                    fillRule="nonzero"
                    d="M16.462591 27.2298137L9.44457411 23.6488613 9.87955449 19.6753623 16.3025982 24.5515528z"
                  />
                  <Path
                    fill="url(#s)"
                    fillRule="nonzero"
                    d="M9.44457411 23.6488613L9.01959327 24.026501 9.43124138 20.0761905 9.87955449 19.6753623z"
                  />
                  <Path
                    fill="url(#t)"
                    fillRule="nonzero"
                    d="M16.462591 27.2298137L16.062609 27.5859213 9.01959327 24.026501 9.44457411 23.6488613z"
                  />
                  <Path
                    fill="url(#u)"
                    fillRule="nonzero"
                    d="M18.94 20.641l2.93 1.226.53-9.77-4.084-1.54s-.85 6.3.623 10.084z"
                  />
                  <Path
                    fill="url(#v)"
                    fillRule="nonzero"
                    d="M25.814 9.892L22.4 12.096l-.53 9.77 1.893-1.689c.002 0 2.253-5.187 2.05-10.285z"
                  />
                  <Path
                    fill="#9A4910"
                    fillRule="nonzero"
                    d="M18.2625098 11.0592133L18.3158407 10.5573499 22.3756577 11.6074534 22.4006565 12.0944099z"
                  />
                  <Path
                    fill="#9A4910"
                    fillRule="nonzero"
                    d="M25.813836 9.89151139L25.5905127 9.41614907 22.3756577 11.6074534 22.4006565 12.0944099z"
                  />
                  <Path
                    fill="url(#w)"
                    fillRule="nonzero"
                    d="M22.3756577 11.6074534L23.1872877 2.93498965 26.3254796 1.51718427 25.5905127 9.41614907z"
                  />
                  <Path
                    fill="url(#x)"
                    fillRule="nonzero"
                    d="M22.3756577 11.6074534L18.3158407 10.5573499 19.3441277 2.82236025 20.1157596 2.97308489 20.5040754 2.17805383 23.1872877 2.93498965z"
                  />
                  <Path
                    fill="url(#y)"
                    fillRule="nonzero"
                    d="M26.3254796 1.51718427L23.9489201 0.96563147 20.5040754 2.17805383 23.1872877 2.93498965z"
                  />
                  <Path
                    fill="url(#z)"
                    fillRule="nonzero"
                    d="M19.292 3.208s-.751 1.01-1.218 2.511c-.466 1.5-.875 3.984-.875 3.984s.332.205.66.29c.359.09.529.03.529.03l.904-6.815z"
                  />
                  <Path
                    fill="url(#A)"
                    fillRule="nonzero"
                    d="M23.6289345 3.26625259L25.7955034 2.30062112 25.4388529 5.97267081 23.2372855 7.20496894z"
                  />
                  <Path
                    fill="url(#B)"
                    fillRule="nonzero"
                    d="M22.427 21.37l-.556.497-1.954-.817s-.116 6.223 3.769 11.568C27.57 37.963 38.545 48.16 38.545 48.16l.868.12S27.01 36.473 23.843 29.096c-1.69-3.934-1.416-7.725-1.416-7.725z"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.306 14.855L18.073 14.552"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M25.5488479 13.8269151L22.2239978 15.5693582 21.0490508 15.2811594"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.316 15.687L18.081 15.364"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M25.3638562 14.8703934L22.1656671 16.4322981 21.0290517 16.1341615"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.314 16.532L18.114 16.2"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M25.1638653 15.7863354L22.1190026 17.3084886 20.9640547 16.9888199"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.366 17.472L18.186 17.145"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24.932209 16.7055901L22.0690048 18.226087 20.8640592 17.8898551"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.496 18.297L18.281 17.943"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24.6655544 17.6347826L22.0256734 19.0343685 20.9390558 18.7180124"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.441 19.056L18.411 18.738"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24.3705677 18.5556936L21.9806755 19.8443064 20.8990576 19.5080745"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.491 19.795L18.579 19.498"
                  />
                  <Path
                    stroke="#672B0B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24.0722478 19.3987578L21.9406773 20.5913043 20.9390558 20.2650104"
                  />
                </G>
                <G fillRule="nonzero" transform="translate(4.5 40.248)">
                  <Path
                    fill="url(#C)"
                    d="M38.772.108H3.738C1.742.108.122 1.718.122 3.702v3.65c0 1.985 1.618 3.595 3.616 3.595h35.034c1.996 0 3.616-1.609 3.616-3.595v-3.65c0-1.984-1.62-3.594-3.616-3.594z"
                  />
                  <Path
                    fill="url(#D)"
                    d="M3.145 3.82h36.382c1.23 0 2.183.425 2.861 1.084v-1.2c0-1.985-1.618-3.595-3.616-3.595H3.738C1.742.11.122 1.72.122 3.704v1.37C.81 4.32 1.815 3.818 3.145 3.818z"
                  />
                  <Path
                    fill="url(#E)"
                    d="M3.738 0.108H5.105V2.9370000000000003H3.738z"
                  />
                  <Path
                    fill="url(#E)"
                    d="M6.426 0.108H7.793V2.9370000000000003H6.426z"
                  />
                  <Path
                    fill="url(#E)"
                    d="M9.113 0.108H10.48V2.9370000000000003H9.113z"
                  />
                  <Path
                    fill="url(#F)"
                    d="M11.799 0.108H13.164V2.9370000000000003H11.799z"
                  />
                  <Path
                    fill="url(#E)"
                    d="M14.488 0.108H15.855V2.9370000000000003H14.488z"
                  />
                  <Path
                    fill="url(#G)"
                    d="M39.502 5.527c0 2.099-1.714 3.801-3.825 3.801-2.114 0-3.825-1.702-3.825-3.8 0-2.1 1.711-3.802 3.825-3.802 2.113.002 3.825 1.703 3.825 3.801z"
                  />
                  <Path
                    fill="url(#H)"
                    d="M25.086 6.869h4.871c.472 0 .855.38.855.85v.761c0 .47-.383.85-.855.85h-4.871a.853.853 0 01-.855-.85v-.762c0-.468.383-.85.855-.85z"
                  />
                  <Path
                    fill="url(#I)"
                    d="M17.223 6.869h4.871c.472 0 .855.38.855.85v.761c0 .47-.383.85-.855.85h-4.871a.853.853 0 01-.855-.85v-.762c0-.468.383-.85.855-.85z"
                  />
                  <G fill="#672600">
                    <Path
                      d="M3.26 2.105H2.133A2.097 2.097 0 01.03.015h5.331c0 1.154-.94 2.09-2.101 2.09zM31.045 2.105H29.92a2.095 2.095 0 01-2.102-2.09h5.332a2.098 2.098 0 01-2.104 2.09z"
                      transform="translate(4.666 10.932)"
                    />
                  </G>
                  <Path
                    fill="url(#J)"
                    d="M4.421 9.328a.681.681 0 01-.683-.679V7.546c0-.374.305-.679.683-.679.377 0 .684.303.684.68v1.102a.68.68 0 01-.684.68z"
                  />
                  <Path
                    fill="url(#K)"
                    d="M6.818 9.328a.681.681 0 01-.683-.679V7.546c0-.374.305-.679.683-.679.377 0 .683.303.683.68v1.102a.682.682 0 01-.683.68z"
                  />
                  <Path
                    fill="url(#J)"
                    d="M9.213 9.328a.681.681 0 01-.683-.679V7.546c0-.374.305-.679.683-.679.377 0 .683.303.683.68v1.102c0 .376-.306.68-.683.68z"
                  />
                  <G fill="#ECEFF0">
                    <Path
                      d="M3.292 3.655c0 .337-.275.61-.614.61a.61.61 0 01-.613-.61c0-.336.275-.609.613-.609a.61.61 0 01.614.61zM3.327 3.011a.94.94 0 00-1.295 0l-.412-.409c.567-.563 1.553-.563 2.12 0l-.413.41z"
                      transform="translate(32.999 3.478)"
                    />
                    <Path
                      d="M1.3 2.286l-.412-.41A2.525 2.525 0 012.68 1.14c.677 0 1.311.261 1.79.737l-.412.409c-.738-.732-2.021-.732-2.758 0z"
                      transform="translate(32.999 3.478)"
                    />
                    <Path
                      d="M4.831 1.517a3.061 3.061 0 00-4.304 0l-.412-.409a3.646 3.646 0 015.128 0l-.412.41z"
                      transform="translate(32.999 3.478)"
                    />
                  </G>
                </G>
                <G fillRule="nonzero">
                  <Path
                    fill="url(#L)"
                    d="M11.21 6.433c-2.4-.546-4.8.13-6.539 1.613a.684.684 0 00-.031 1.007l.031.032a.692.692 0 00.937.035 6.061 6.061 0 015.282-1.302 6.02 6.02 0 014.183 3.458.694.694 0 00.858.376l.043-.015a.685.685 0 00.412-.919 7.438 7.438 0 00-5.177-4.285z"
                    transform="translate(32.832 29.814)"
                  />
                  <Path
                    fill="url(#M)"
                    d="M11.91 3.4a10.643 10.643 0 00-9.465 2.45.688.688 0 00-.03 1.004l.032.031a.698.698 0 00.96.015 9.2 9.2 0 018.18-2.115 9.146 9.146 0 016.439 5.446c.14.343.52.522.871.4l.042-.014a.688.688 0 00.413-.916 10.566 10.566 0 00-7.443-6.3z"
                    transform="translate(32.832 29.814)"
                  />
                  <Path
                    fill="url(#N)"
                    d="M12.59.45A13.698 13.698 0 00.267 3.729a.684.684 0 00-.013.99l.033.03a.695.695 0 00.96.014A12.259 12.259 0 0112.27 1.835c4.079.93 7.212 3.8 8.637 7.406a.694.694 0 00.87.404l.043-.015a.683.683 0 00.422-.895A13.608 13.608 0 0012.589.451z"
                    transform="translate(32.832 29.814)"
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

export default FixInternetSVG;
