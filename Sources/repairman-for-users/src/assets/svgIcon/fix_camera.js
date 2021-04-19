import React from 'react';
import Svg, {
  G,
  Defs,
  LinearGradient,
  Path,
  Stop,
  Circle,
  Ellipse,
} from 'react-native-svg';
const FixCameraSVG = () => (
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
      <LinearGradient
        id="b"
        x1="-.053%"
        x2="100.021%"
        y1="50.025%"
        y2="50.025%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="c" x1=".056%" x2="100.014%" y1="50%" y2="50%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="d" x1=".006%" x2="99.96%" y1="49.999%" y2="49.999%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1="-.001%"
        x2="100.002%"
        y1="50.008%"
        y2="50.008%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="f" x1=".003%" x2="100%" y1="49.997%" y2="49.997%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="g" x1="-.002%" x2="100%" y1="49.985%" y2="49.985%">
        <Stop offset="0%" stopColor="#9D3D12" />
        <Stop offset="43.33%" stopColor="#5D1C00" />
        <Stop offset="99.47%" stopColor="#C24E1F" />
      </LinearGradient>
      <LinearGradient id="h" x1=".027%" x2="100.015%" y1="49.955%" y2="49.955%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="i" x1="-.007%" x2="99.99%" y1="49.996%" y2="49.996%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="j" x1="0%" x2="99.998%" y1="49.995%" y2="49.995%">
        <Stop offset="0%" stopColor="#FFCA60" />
        <Stop offset="9%" stopColor="#FFCE52" />
        <Stop offset="23%" stopColor="#FFD146" />
        <Stop offset="43%" stopColor="#FFD43F" />
        <Stop offset="100%" stopColor="#FFD43F" />
      </LinearGradient>
      <LinearGradient id="k" x1="0%" x2="100.001%" y1="49.998%" y2="49.998%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="l" x1="-.003%" x2="100.006%" y1="50.01%" y2="50.01%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="m" x1="0%" x2="99.994%" y1="50.001%" y2="50.001%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="n" x1=".026%" x2="100.018%" y1="49.972%" y2="49.972%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="o" x1=".027%" x2="100.02%" y1="49.991%" y2="49.991%">
        <Stop offset="1.75%" stopColor="#E06F27" />
        <Stop offset="85.96%" stopColor="#F89C1C" />
      </LinearGradient>
      <LinearGradient id="p" x1=".001%" x2="99.981%" y1="49.97%" y2="49.97%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="q" x1=".001%" x2="99.998%" y1="50.003%" y2="50.003%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="r" x1=".012%" x2="100.003%" y1="50.002%" y2="50.002%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="s" x1="-.033%" x2="100.019%" y1="50.01%" y2="50.01%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="t" x1="-.022%" x2="100.032%" y1="49.98%" y2="49.98%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="u" x1="-.004%" x2="99.994%" y1="50.002%" y2="50.002%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="v" x1="-.001%" x2="99.99%" y1="50.003%" y2="50.003%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1="-.025%"
        x2="100.048%"
        y1="49.976%"
        y2="49.976%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="x" x1="-.083%" x2="99.98%" y1="49.98%" y2="49.98%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="y" x1=".023%" x2="99.985%" y1="50.028%" y2="50.028%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="z" x1=".028%" x2="100.034%" y1="50.001%" y2="50.001%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="A" x1=".063%" x2="100.034%" y1="49.965%" y2="49.965%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="B" x1=".023%" x2="100.056%" y1="49.967%" y2="49.967%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="C" x1=".134%" x2="100.078%" y1="49.961%" y2="49.961%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="D" x1="-.055%" x2="99.958%" y1="49.979%" y2="49.979%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="E" x1="-.057%" x2="99.973%" y1="50.02%" y2="50.02%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="F" x1="-.025%" x2="99.901%" y1="50.005%" y2="50.005%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="G" x1="-.025%" x2="99.901%" y1="50.051%" y2="50.051%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="H" x1="-.039%" x2="99.94%" y1="50.062%" y2="50.062%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient
        id="I"
        x1="-.005%"
        x2="100.006%"
        y1="49.989%"
        y2="49.989%">
        <Stop offset="2.19%" stopColor="#B9421E" />
        <Stop offset="85.53%" stopColor="#E2671F" />
      </LinearGradient>
      <LinearGradient id="J" x1="-.051%" x2="99.98%" y1="49.995%" y2="49.995%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="K" x1="-.034%" x2="100%" y1="50.046%" y2="50.046%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="L" x1="-.073%" x2="99.933%" y1="50.025%" y2="50.025%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="M" x1=".082%" x2="100.053%" y1="50.017%" y2="50.017%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="N" x1=".013%" x2="99.97%" y1="50.014%" y2="50.014%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="O" x1=".013%" x2="100.004%" y1="50.029%" y2="50.029%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="P" x1=".083%" x2="100.009%" y1="50.028%" y2="50.028%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient
        id="Q"
        x1="-.057%"
        x2="100.017%"
        y1="49.982%"
        y2="49.982%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient
        id="R"
        x1="-.027%"
        x2="100.046%"
        y1="49.988%"
        y2="49.988%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="S" x1=".009%" x2="100.042%" y1="50.026%" y2="50.026%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
      <LinearGradient id="T" x1=".024%" x2="100.054%" y1="50.044%" y2="50.044%">
        <Stop offset="0%" stopColor="#F4941E" />
        <Stop offset="100%" stopColor="#FFC925" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <G transform="translate(-155 -263)">
        <G transform="translate(155 263)">
          <G>
            <Circle cx="32.5" cy="32.5" r="32.5" fill="url(#a)" />
            <G fillRule="nonzero" transform="translate(8 16)">
              <G>
                <Ellipse
                  cx="26.074"
                  cy="23.47"
                  fill="url(#b)"
                  rx="1"
                  ry="1.066"
                />
                <Path
                  fill="url(#c)"
                  d="M26.66 21.832c.29.395.472.977.472 1.628 0 .79-.27 1.479-.675 1.855v-.003s-.216.158-.534.288a.912.912 0 01-.166.016c-.76 0-1.377-.967-1.377-2.156 0-1.192.616-2.155 1.377-2.155.344 0 .662.199.903.527zm.102 1.638c0-.59-.309-1.065-.688-1.065-.38 0-.687.476-.687 1.065 0 .59.307 1.066.687 1.066.38.001.688-.476.688-1.066z"
                />
                <Path
                  fill="url(#d)"
                  d="M44.9757911 21.3045418L44.9757911 28.3066135 43.9704114 35.8866932 43.3153481 35.8866932 43.9704114 28.4514741 43.9704114 19.6981673z"
                />
                <Path
                  fill="url(#e)"
                  d="M43.97 19.698v8.753l-.655 7.434H38.73l-.565-2.992h3.098l1.24-1.247c.357.054.55.09.55.09v-7.2h-5.94v-4.84h6.857v.002z"
                />
                <Path
                  fill="url(#f)"
                  d="M43.053 24.537v7.2s-.193-.035-.55-.09a61.715 61.715 0 00-5.72-.587c-3.396-.195-7.73-.176-11.86.614l1.534-.964v-3.623l16.596-2.55z"
                />
                <Path
                  fill="url(#g)"
                  d="M43.0533228 24.5373705L26.4588608 27.0889243 26.4588608 26.2082869 37.1136076 24.5373705z"
                />
                <Path
                  fill="url(#h)"
                  d="M38.163 32.895h-1.291l-.09-1.833c2.68.153 4.773.44 5.72.586l-1.24 1.248h-3.099v-.001z"
                />
                <Path
                  fill="url(#i)"
                  d="M32.501 12.231H21.74s-.364-1.755-1.66-2.349c-1.295-.595-2.443-.419-2.443-.419h-1.682s.013-.774-.3-1.899c-.029-.103-.06-.21-.093-.318h19.602s-.16 1.588-1.804 2.76v2.225H32.5z"
                />
                <Path
                  fill="url(#j)"
                  d="M35.163 7.246H15.56a8.89 8.89 0 00-.117-.341c-.036-.1-.071-.201-.114-.303l-.019-.047a3.772 3.772 0 00-.075-.181c-.024-.06-.053-.122-.08-.184a8.653 8.653 0 00-.353-.704c-.019-.036-.04-.07-.061-.108a9.648 9.648 0 00-1.41-1.893 7.867 7.867 0 00-.369-.369 10.2 10.2 0 00-1.148-.949c-.047-.033-.092-.067-.14-.099-.046-.033-.093-.064-.14-.096a11.985 11.985 0 00-.507-.326A13.945 13.945 0 008.484.444H2.411A2.243 2.243 0 013.614.08h26.643c0-.001 4.862 1.283 4.906 7.166z"
                />
                <Path
                  fill="url(#k)"
                  d="M21.74 12.231H32.5c-.362 4.307-4.167 5.928-4.167 5.928l-.917 1.848H9.968c3.68 0 6.662-4.137 6.662-9.24 0-.442-.023-.878-.067-1.304h1.072s1.148-.176 2.444.42c1.297.591 1.66 2.348 1.66 2.348z"
                />
                <Path
                  fill="url(#l)"
                  d="M27.417 20.007l-.757 1.825c-.241-.328-.557-.527-.902-.527-.76 0-1.377.963-1.377 2.155 0 1.19.617 2.156 1.377 2.156a.924.924 0 00.167-.016c-.524.211-1.327.343-1.893-.457-.021-.032-.044-.065-.064-.1-.896-1.44-.198-2.991-.198-2.991l-2.402-2.047h6.05v.002z"
                />
                <Path
                  fill="url(#m)"
                  d="M26.459 27.089v3.623l-1.535.964c-.107.018-.211.04-.316.061h-2.964l-1.492-1.085v-5.747h2.986v.335h.83l.064-.099c.564.8 1.369.669 1.893.458.194-.038.374-.135.534-.286v1.776z"
                />
                <Path fill="url(#n)" d="M21.942 31.737H24.606V33.101H21.942z" />
                <Path
                  fill="url(#o)"
                  d="M23.967 25.044l.064.099-.064.099h-.83v-3.08H20.15v2.744c-1.317-1.196-.683-2.876-.683-2.876-.655-1.137-.611-2.023-.611-2.023h2.51l2.403 2.046c.001 0-.698 1.55.198 2.99z"
                />
                <Path fill="url(#p)" d="M20.152 22.162H23.138V24.906H20.152z" />
                <Path
                  fill="url(#q)"
                  d="M3.408 9.143c.552-4.328 3.28-7.616 6.56-7.616.36 0 .715.04 1.058.118a10.377 10.377 0 01.507.326c.047.031.094.063.14.096a9.365 9.365 0 01.332.24l.145.11a10.2 10.2 0 011.319 1.216c.53.58.945 1.17 1.271 1.744.022.036.042.072.062.108l.075.14a10.795 10.795 0 01.278.564l.08.183.075.181a11.666 11.666 0 01.132.35c.083.231.153.45.21.66.313 1.124.3 1.899.3 1.899-.46-3.777-2.886-6.657-5.81-6.657-3.252 0-5.891 3.562-5.891 7.955 0 4.393 2.637 7.954 5.891 7.954s5.89-3.561 5.89-7.954c0-.442-.026-.876-.078-1.298h.61c.043.426.066.862.066 1.304 0 5.103-2.982 9.24-6.662 9.24-3.68 0-6.663-4.137-6.663-9.24 0-.554.036-1.095.103-1.623z"
                />
                <Path
                  fill="url(#r)"
                  d="M15.954 9.463c.052.422.078.857.078 1.298 0 4.393-2.636 7.955-5.89 7.955-3.254 0-5.891-3.562-5.891-7.955 0-4.393 2.637-7.954 5.891-7.954 2.925 0 5.352 2.88 5.812 6.656zm-.527 1.298c0-3.941-2.366-7.137-5.283-7.137-2.92 0-5.285 3.196-5.285 7.137 0 3.942 2.365 7.137 5.285 7.137 2.916 0 5.283-3.195 5.283-7.137z"
                />
                <Path
                  fill="url(#s)"
                  d="M14.498 9.346c.094.529-.146 1.061-.54 1.189-.391.126-.786-.2-.88-.729-.094-.528.147-1.061.54-1.188.392-.129.786.197.88.728z"
                />
                <Path
                  fill="url(#t)"
                  d="M13.943 11.288c.386.157.604.708.487 1.23-.117.52-.526.815-.91.659-.386-.158-.604-.709-.487-1.231.117-.52.524-.815.91-.658z"
                />
                <Path
                  fill="url(#u)"
                  d="M10.144 3.624c2.917 0 5.283 3.196 5.283 7.137 0 3.942-2.366 7.137-5.283 7.137-2.92 0-5.285-3.195-5.285-7.137 0-3.941 2.365-7.137 5.285-7.137zm5.018 7.137c0-3.745-2.247-6.78-5.02-6.78-2.773 0-5.021 3.035-5.021 6.78s2.248 6.78 5.021 6.78c2.773 0 5.02-3.035 5.02-6.78z"
                />
                <Path
                  fill="url(#v)"
                  d="M10.144 3.982c2.772 0 5.02 3.034 5.02 6.78 0 3.744-2.248 6.779-5.02 6.779-2.773 0-5.022-3.035-5.022-6.78s2.249-6.78 5.022-6.78zm3.815 6.553c.393-.13.633-.66.54-1.19-.095-.529-.49-.854-.88-.727-.394.127-.635.66-.54 1.188.093.53.488.855.88.729zm.47 1.983c.118-.52-.1-1.071-.486-1.23-.386-.157-.793.137-.91.658-.117.52.101 1.071.487 1.23.384.157.793-.137.91-.658zm-1.08-4.56c.29-.38.3-1.003.019-1.395-.28-.393-.742-.404-1.033-.026-.29.379-.299 1.001-.018 1.394.28.393.742.402 1.032.026zm-.098 7.16c.29-.378.299-1.002.018-1.394-.279-.393-.74-.404-1.032-.025-.29.378-.298 1-.017 1.394.28.393.742.401 1.03.026zm-.28-4.357c0-.343-.207-.622-.46-.622-.256 0-.462.28-.462.622 0 .343.206.623.461.623.254.001.462-.28.462-.623zm-.553-1.081c.218-.174.293-.554.163-.852-.13-.296-.412-.396-.63-.222-.221.173-.294.556-.164.852.13.298.41.395.63.222zm.163 3.015c.13-.296.055-.677-.163-.852-.221-.174-.502-.076-.631.222-.13.295-.056.677.164.852.219.175.502.075.63-.222zM11.93 6.2c.117-.52-.1-1.071-.485-1.23-.386-.157-.794.137-.91.658-.117.52.1 1.071.485 1.23.385.157.792-.136.91-.658zm-.19 2.119c.129-.297.055-.677-.164-.852-.221-.174-.502-.076-.631.222-.13.296-.056.677.164.852.219.174.5.075.63-.222zm-.166 5.737c.221-.174.294-.554.164-.852-.13-.296-.41-.396-.63-.222-.222.173-.294.556-.165.851.13.299.412.396.631.223zm-.381 2.587c.391-.126.632-.66.538-1.189-.094-.528-.487-.853-.88-.727-.392.126-.632.66-.538 1.189.094.53.488.856.88.727zm.48-5.882c0-1.141-.684-2.066-1.53-2.066S8.61 9.62 8.61 10.76c0 1.142.686 2.067 1.532 2.067.846.001 1.53-.925 1.53-2.067zm-1.07-3.197c0-.342-.206-.622-.46-.622-.255 0-.461.28-.461.622 0 .343.206.621.461.621s.46-.278.46-.62zm0 6.394c0-.343-.206-.62-.46-.62-.255 0-.461.277-.461.62 0 .344.206.623.461.623.255.001.46-.277.46-.623zM9.436 6.796c.391-.127.632-.66.538-1.19-.094-.527-.487-.853-.88-.727-.392.127-.632.66-.538 1.19.094.527.488.856.88.727zm.316 9.099c.117-.521-.1-1.072-.486-1.228-.386-.158-.793.135-.91.657-.116.522.101 1.071.486 1.23.386.157.793-.139.91-.66zM9.177 8.54c.22-.174.293-.556.163-.852-.13-.297-.41-.396-.63-.222-.218.173-.294.553-.164.852.13.297.413.396.63.222zm.165 5.292c.13-.295.055-.677-.164-.851-.218-.174-.501-.075-.63.222-.13.297-.055.677.163.852.22.173.501.076.63-.223zm-.845-4.375c.13-.296.056-.677-.163-.852-.218-.174-.502-.075-.631.222-.128.297-.054.677.163.852.221.173.505.076.631-.222zm-.163 3.459c.22-.174.293-.557.163-.852-.128-.297-.41-.396-.63-.222-.218.173-.292.556-.164.852.13.297.411.397.63.222zm-.099-2.156c0-.343-.206-.622-.461-.622-.254 0-.46.28-.46.622 0 .343.206.623.46.623.255.001.461-.28.461-.623zm-.188-2.936c.29-.378.3-1 .019-1.394-.282-.393-.742-.403-1.033-.026-.29.38-.299 1.003-.018 1.395.279.391.742.403 1.032.025zm-.098 7.162c.29-.379.3-1.002.019-1.394-.28-.393-.742-.404-1.033-.025-.29.377-.299 1.001-.018 1.394.28.39.742.403 1.032.025zm-.698-5.409c.117-.52-.1-1.071-.485-1.228-.386-.157-.794.135-.91.657-.117.52.1 1.072.485 1.23.386.157.793-.138.91-.659zm-.585 3.329c.393-.13.634-.66.54-1.19-.094-.528-.49-.854-.88-.728-.392.13-.633.66-.539 1.19.096.529.489.854.879.728z"
                />
                <Path
                  fill="url(#w)"
                  d="M13.368 6.563c.279.39.27 1.016-.019 1.394-.29.378-.753.366-1.032-.026-.28-.391-.271-1.015.018-1.394.29-.378.753-.365 1.033.026z"
                />
                <Path
                  fill="url(#x)"
                  d="M13.27 13.724c.28.39.271 1.016-.018 1.395-.29.377-.752.365-1.03-.026-.28-.392-.273-1.016.016-1.394.292-.379.752-.366 1.033.025z"
                />
                <Ellipse cx="12.51" cy="10.761" fill="url(#y)" rx="1" ry="1" />
                <Path
                  fill="url(#z)"
                  d="M12.581 8.828c.13.297.055.677-.163.852-.221.173-.502.076-.631-.222-.13-.296-.056-.677.164-.852.219-.174.502-.074.63.222z"
                />
                <Path
                  fill="url(#A)"
                  d="M12.418 11.844c.218.174.293.557.163.852-.13.296-.412.396-.63.222-.221-.173-.294-.556-.164-.852.13-.298.41-.397.63-.222z"
                />
                <Path
                  fill="url(#B)"
                  d="M11.442 4.971c.386.158.603.709.486 1.23-.117.521-.524.815-.91.66-.385-.159-.602-.71-.486-1.232.117-.52.524-.814.91-.658z"
                />
                <Path
                  fill="url(#C)"
                  d="M11.573 7.468c.221.174.294.554.164.852-.13.296-.41.396-.63.222-.222-.173-.294-.556-.165-.851.13-.299.412-.398.631-.223z"
                />
                <Path
                  fill="url(#D)"
                  d="M11.738 13.204c.13.297.056.677-.163.852-.22.175-.502.076-.631-.223-.13-.295-.056-.677.164-.851.219-.174.5-.074.63.222z"
                />
                <Path
                  fill="url(#E)"
                  d="M11.73 15.454c.094.53-.147 1.063-.538 1.19-.392.128-.786-.197-.88-.728-.094-.53.146-1.063.538-1.189.391-.126.784.2.88.727z"
                />
                <Path
                  fill="#1D242D"
                  d="M10.144 8.695c.845 0 1.53.925 1.53 2.066 0 1.142-.685 2.067-1.53 2.067-.846 0-1.533-.925-1.533-2.067 0-1.141.687-2.066 1.533-2.066zm.96 2.066c0-.715-.432-1.296-.962-1.296-.531 0-.961.58-.961 1.296 0 .716.43 1.298.961 1.298.53.002.961-.58.961-1.298z"
                />
                <Path
                  fill="#11151A"
                  d="M10.144 9.465c.53 0 .96.58.96 1.296 0 .716-.43 1.298-.96 1.298-.532 0-.962-.582-.962-1.298 0-.715.43-1.296.962-1.296zm.06.956c0-.3-.177-.54-.4-.54-.22 0-.4.24-.4.54 0 .297.18.541.4.541.223 0 .4-.242.4-.54z"
                />
                <Path
                  fill="url(#F)"
                  d="M10.144 6.942c.253 0 .46.28.46.622 0 .343-.207.621-.46.621-.255 0-.462-.278-.462-.62 0-.343.207-.623.462-.623z"
                />
                <Path
                  fill="url(#G)"
                  d="M10.144 13.337c.253 0 .46.278.46.621 0 .344-.207.623-.46.623-.255 0-.462-.279-.462-.623 0-.343.207-.62.462-.62z"
                />
                <Ellipse cx="9.805" cy="10.421" fill="url(#H)" rx="1" ry="1" />
                <Path
                  fill="url(#I)"
                  d="M11.026 1.645a4.824 4.824 0 00-1.058-.118c-3.28 0-6.008 3.288-6.56 7.616H.12s-.323-7.012 2.29-8.7h6.072a13.9 13.9 0 012.543 1.202z"
                />
                <Path
                  fill="url(#J)"
                  d="M9.974 5.607c.094.529-.147 1.062-.538 1.189-.392.129-.786-.2-.88-.728-.094-.529.146-1.062.538-1.189.392-.126.785.2.88.728z"
                />
                <Path
                  fill="url(#K)"
                  d="M9.266 14.665c.386.157.603.707.486 1.228-.117.52-.524.816-.91.658-.385-.157-.602-.708-.486-1.23.117-.522.524-.813.91-.656z"
                />
                <Path
                  fill="url(#L)"
                  d="M9.342 7.69c.13.295.055.676-.164.851-.218.174-.501.075-.63-.222-.13-.297-.055-.677.163-.852.22-.174.501-.075.63.222z"
                />
                <Path
                  fill="url(#M)"
                  d="M9.177 12.982c.22.173.293.556.163.851-.13.297-.41.396-.63.223-.218-.174-.294-.554-.164-.852.13-.296.413-.396.63-.222z"
                />
                <Path
                  fill="url(#N)"
                  d="M8.334 8.606c.22.173.293.556.163.852-.128.296-.41.395-.63.222-.218-.174-.292-.554-.164-.852.13-.296.411-.396.63-.222z"
                />
                <Path
                  fill="url(#O)"
                  d="M8.497 12.065c.13.295.056.677-.163.852-.218.174-.502.075-.631-.222-.128-.296-.054-.677.163-.852.221-.174.505-.075.631.222z"
                />
                <Path
                  fill="url(#P)"
                  d="M7.774 10.139c.255 0 .461.28.461.622 0 .343-.206.623-.461.623-.254 0-.46-.28-.46-.623.001-.343.206-.622.46-.622z"
                />
                <Path
                  fill="url(#Q)"
                  d="M8.066 6.431c.279.393.27 1.016-.019 1.394-.289.379-.753.366-1.032-.025-.28-.39-.27-1.016.018-1.395.29-.377.752-.365 1.033.026z"
                />
                <Path
                  fill="url(#R)"
                  d="M7.968 13.593c.279.392.27 1.015-.019 1.394-.29.378-.752.365-1.032-.025-.28-.393-.271-1.017.018-1.394.29-.379.753-.367 1.033.025z"
                />
                <Path
                  fill="url(#S)"
                  d="M6.766 8.349c.384.156.602.707.485 1.228-.117.52-.524.816-.91.658-.386-.158-.602-.709-.485-1.23.116-.52.524-.814.91-.656z"
                />
                <Path
                  fill="url(#T)"
                  d="M7.206 11.716c.094.53-.147 1.062-.54 1.19-.392.126-.785-.2-.879-.73-.094-.528.147-1.06.539-1.188.391-.126.786.2.88.728z"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default FixCameraSVG;
