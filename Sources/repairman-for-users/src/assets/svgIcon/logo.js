import React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const LogoSvg = () => (
  <Svg width={157} height={164}>
    <Defs>
      <LinearGradient
        x1=".033%"
        y1="49.991%"
        x2="100.012%"
        y2="49.991%"
        id="prefix__a">
        <Stop stopColor="#FFCC5D" offset="0%" />
        <Stop stopColor="#FFCF51" offset="9%" />
        <Stop stopColor="#FFD346" offset="23%" />
        <Stop stopColor="#FFD43F" offset="43%" />
        <Stop stopColor="#FFD53D" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1=".001%"
        y1="49.993%"
        x2="99.999%"
        y2="49.993%"
        id="prefix__b">
        <Stop stopColor="#FFCC5D" offset="0%" />
        <Stop stopColor="#FFCF51" offset="9%" />
        <Stop stopColor="#FFD346" offset="23%" />
        <Stop stopColor="#FFD43F" offset="43%" />
        <Stop stopColor="#FFD53D" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M68.398 34.655c-2.902-1.317-3.349-3.917-1.033-5.981 1.497-1.334.296-2.172-.232-3.119-.529-.947-.912-1.882-2.502-1.237-2.902 1.14-5.154-.417-5.06-3.479.04-1.414-.61-1.847-1.742-1.933-1.132-.085-2.403-1.22-3.296.725-1.248 2.72-3.906 3.17-5.967 1.02-1.294-1.345-2.182-.57-3.204.086-1.021.656-1.996.98-1.282 2.634 1.16 2.657-.58 4.955-3.54 4.83-1.585-.063-1.898.78-2.096 1.887-.197 1.106-.969 2.28.749 3.096 2.275 1.107 2.954 2.646 2.13 4.425-1.358.918-2.71 1.825-4.063 2.771a.8.8 0 01-.922.092 13.521 13.521 0 00-5.909-1.107c-7.116.256-13.004 5.522-13.929 12.46.006.11.017.22.035.33.191-.114.319-.2.458-.297 2.36-1.6 4.717-3.214 7.07-4.84a.689.689 0 01.824-.052 652.772 652.772 0 007.545 4.054c.296.134.489.421.499.742.4 2.782.795 5.576 1.23 8.359a.607.607 0 01-.32.684c-2.367 1.608-4.718 3.216-7.08 4.83-.145.096-.284.205-.464.342.947.219 1.906.382 2.873.49a13.795 13.795 0 008.81-2.418c4.753-3.273 6.924-7.766 6.28-13.468a.73.73 0 01.36-.838l3.418-2.32c.14 1.328 1.248 1.385 2.2 1.624.952.24 2.037.736 2.774-.758 1.433-2.942 3.836-3.324 6.204-.952 1.312 1.311 2.113.234 3-.302.889-.536 2.026-.804 1.376-2.418-1.16-2.954.407-5.132 3.668-5.064 1.88.063 1.7-1.271 1.974-2.24.272-.97.69-1.956-.836-2.658zm-9.286.086c-.415 2.872-3.122 4.87-6.045 4.462-2.923-.408-4.957-3.067-4.541-5.939a5.27 5.27 0 013.297-4.134 5.424 5.424 0 015.293.738 5.208 5.208 0 011.996 4.873z"
        fill="url(#prefix__a)"
        transform="translate(23.5 -.5)"
      />
      <Path
        d="M109.418 43.698a24.255 24.255 0 00-.69-8.058 15.459 15.459 0 00-2.973-5.583c-.765-.887-14.303-9.344-14.303-9.344L90.664.5h-11.82l-.511 13.128L67.705 6.43S60.86 1.95 58.877 1.308a16.832 16.832 0 00-3.75-.797h-.633a10.157 10.157 0 00-2.484.2c-1.674.358-7.62 3.8-9.507 4.945C31.604 12.29 13.407 23.66 13.407 23.66L5.96 28.077S1.491 31.025.6 34.855c-.293 4.256.15 80.665.219 86.384l75.237.04v-21.141h21.251v14.744c0 2.191.53 3.842 1.6 4.951a5.785 5.785 0 004.307 1.662 5.93 5.93 0 004.336-1.645c1.15-1.098 1.685-2.754 1.685-4.968V72.658c0-2.208-.575-3.864-1.662-4.951a5.989 5.989 0 00-4.36-1.622 5.785 5.785 0 00-4.278 1.639c-1.085 1.1-1.628 2.745-1.628 4.934V89.218h-3.525v-.097H64.007v.08H43.596l20.41-27.316v22.837H76.01l-.212-14.557v-17.38h.074c0-5.424-2.404-8.139-7.212-8.142a5.397 5.397 0 00-3.818 1.485 36.746 36.746 0 00-4.06 4.769L35.623 84.193c-.696.91-3.916 5.565-4.13 6.18a5.21 5.21 0 00-.338 1.804 6.996 6.996 0 002.26 5.497c1.5 1.349 3.761 2.014 6.763 2.014h22.43v.222h1.392c0 1.104.034 8.992.052 9.202H11.285l-.857-65.443v-5.867s39.264-25.528 42.105-26.416a5.087 5.087 0 013.767.188c5.59 3.124 29.464 18.05 38.027 23.417 1.927 1.207 4.268 2.424 4.268 4.484v4.843l10.823-.62z"
        fill="url(#prefix__b)"
        fillRule="nonzero"
        transform="translate(23.5 -.5)"
      />
      <G fill="#FFD43F" fillRule="nonzero">
        <Path d="M12.94 145.378H4.362v5.538h7.178a2.145 2.145 0 011.506.447c.335.307.515.75.49 1.204a1.52 1.52 0 01-.498 1.197c-.43.33-.967.486-1.506.44h-7.17v7.128a2.852 2.852 0 01-.61 2.008 2.02 2.02 0 01-1.56.659 2.02 2.02 0 01-1.573-.667 2.86 2.86 0 01-.61-2v-16.666c-.016-.52.079-1.036.278-1.515.181-.392.5-.703.897-.871.477-.198.99-.29 1.506-.273h10.25a2.25 2.25 0 011.552.462c.35.32.536.783.505 1.258a1.58 1.58 0 01-.505 1.227 2.25 2.25 0 01-1.552.424zM27.434 142.006a11.466 11.466 0 015.716 1.314 8.753 8.753 0 013.615 3.823 12.994 12.994 0 011.23 5.884c.018 1.52-.21 3.032-.675 4.48a9.696 9.696 0 01-2.018 3.502 8.725 8.725 0 01-3.3 2.24 11.982 11.982 0 01-4.5.747 11.899 11.899 0 01-4.5-.807 9.002 9.002 0 01-3.316-2.277 9.695 9.695 0 01-2.003-3.532 14.076 14.076 0 01-.682-4.48 13.779 13.779 0 01.705-4.48 9.847 9.847 0 012.07-3.45 9.002 9.002 0 013.27-2.24 11.877 11.877 0 014.388-.724zm6.158 10.961a9.884 9.884 0 00-.75-4.054 5.673 5.673 0 00-2.175-2.606 6.021 6.021 0 00-3.233-.881 5.836 5.836 0 00-2.408.5 5.173 5.173 0 00-1.897 1.419 6.613 6.613 0 00-1.253 2.374 10.655 10.655 0 00-.465 3.248 10.9 10.9 0 00.465 3.286 6.658 6.658 0 001.298 2.441 5.42 5.42 0 001.927 1.441 5.843 5.843 0 002.386.486 5.954 5.954 0 003.06-.83 5.743 5.743 0 002.25-2.56 9.81 9.81 0 00.795-4.264zM46.892 154.355h-1.514v6.938a2.876 2.876 0 01-.606 2.01 2.054 2.054 0 01-1.582.65 2.031 2.031 0 01-1.598-.673 3.02 3.02 0 01-.575-1.987v-16.628a2.8 2.8 0 01.575-2.025 2.813 2.813 0 012.052-.627h7.118c.842-.009 1.684.032 2.521.12a6.514 6.514 0 011.939.507 5.52 5.52 0 011.802 1.224c.52.526.924 1.154 1.189 1.844.272.725.408 1.494.4 2.268a5.405 5.405 0 01-1.362 3.862 7.827 7.827 0 01-4.134 2.04c.846.471 1.6 1.09 2.226 1.83a17.423 17.423 0 011.893 2.57c.495.784.93 1.605 1.302 2.455.237.475.393.986.462 1.512a1.51 1.51 0 01-.273.847c-.188.285-.45.514-.757.665-.34.164-.713.247-1.09.241a2.108 2.108 0 01-1.242-.347 3.283 3.283 0 01-.863-.877c-.242-.348-.568-.869-.985-1.557l-1.749-2.917a16.46 16.46 0 00-1.703-2.48 4.24 4.24 0 00-1.515-1.148 5.21 5.21 0 00-1.93-.317zm2.507-9.07h-4.021v5.933H49.3a11.03 11.03 0 002.65-.272 3.098 3.098 0 001.644-.93 2.665 2.665 0 00.568-1.806 2.785 2.785 0 00-.455-1.58 2.755 2.755 0 00-1.287-1.012 9.004 9.004 0 00-3.021-.325v-.008zM74.332 144.61v6.095h9.32v-6.095a2.85 2.85 0 01.605-1.96c.395-.432.96-.669 1.546-.648a2.086 2.086 0 011.583.641c.445.555.661 1.259.605 1.967v16.765a2.797 2.797 0 01-.612 1.967c-.405.437-.98.676-1.576.656a1.966 1.966 0 01-1.553-.656 2.909 2.909 0 01-.583-1.967v-7.153h-9.335v7.153a2.76 2.76 0 01-.613 1.967 2.041 2.041 0 01-1.568.656 1.981 1.981 0 01-1.56-.656 2.909 2.909 0 01-.583-1.967V144.61c-.05-.7.154-1.396.575-1.96.4-.438.975-.676 1.568-.648a2.071 2.071 0 011.576.641c.444.555.66 1.259.605 1.967zM102.439 142.012c1.987-.065 3.956.39 5.714 1.317a8.764 8.764 0 013.614 3.833 13.057 13.057 0 011.23 5.838c.017 1.523-.21 3.04-.675 4.491a9.726 9.726 0 01-2.017 3.51 8.721 8.721 0 01-3.3 2.246 11.95 11.95 0 01-4.499.749 11.799 11.799 0 01-4.499-.809 8.999 8.999 0 01-3.322-2.283 9.726 9.726 0 01-2.002-3.54 14.146 14.146 0 01-.682-4.491c0-1.528.253-3.046.75-4.491a9.727 9.727 0 012.047-3.496 8.924 8.924 0 013.277-2.245 11.807 11.807 0 014.364-.63zM108.625 153a9.932 9.932 0 00-.75-4.064 5.684 5.684 0 00-2.204-2.613 6.007 6.007 0 00-3.232-.883 5.82 5.82 0 00-2.407.494 5.173 5.173 0 00-1.897 1.422c-.574.702-1 1.511-1.253 2.38a10.708 10.708 0 00-.465 3.256 10.955 10.955 0 00.465 3.294 6.8 6.8 0 001.298 2.448 5.488 5.488 0 001.927 1.444 5.828 5.828 0 002.384.487 5.917 5.917 0 003.06-.831 5.752 5.752 0 002.25-2.568 9.85 9.85 0 00.824-4.266zM123.182 160.375l-3.311-13.755v14.881a2.806 2.806 0 01-.53 1.853 1.903 1.903 0 01-1.394.616 1.903 1.903 0 01-1.395-.616 2.774 2.774 0 01-.536-1.86V144.42a2.172 2.172 0 01.725-1.906 3.252 3.252 0 011.905-.492h1.297a4.692 4.692 0 011.703.22c.353.142.636.429.782.794a12.4 12.4 0 01.58 1.867l3.007 11.827 3.007-11.827c.142-.637.333-1.262.572-1.867.143-.363.416-.653.76-.81a4.692 4.692 0 011.703-.219h1.297a3.23 3.23 0 011.906.492 2.18 2.18 0 01.724 1.905v17.097a2.806 2.806 0 01-.529 1.853c-.367.426-.9.654-1.449.62a1.713 1.713 0 01-1.369-.62 2.766 2.766 0 01-.536-1.853v-14.904l-3.304 13.778c-.217.892-.391 1.55-.529 1.966a2.741 2.741 0 01-.725 1.141c-.428.363-.97.546-1.521.515a2.25 2.25 0 01-1.246-.333 2.346 2.346 0 01-.79-.847 4.807 4.807 0 01-.442-1.142c-.138-.438-.246-.87-.362-1.3zM154.68 145.253h-9.442v5.153h8.715a2.022 2.022 0 011.452.434c.32.295.492.719.472 1.156.019.438-.151.862-.464 1.163a2 2 0 01-1.453.457h-8.715v5.977h9.783a2.159 2.159 0 011.496.464c.333.329.505.79.472 1.259.016.457-.168.899-.501 1.207a2.159 2.159 0 01-1.496.464h-11.41a2.67 2.67 0 01-1.975-.61 2.794 2.794 0 01-.603-1.996v-15.798a3.568 3.568 0 01.276-1.472c.168-.374.465-.673.835-.84.46-.19.955-.28 1.453-.265h11.09a2.158 2.158 0 011.488.45c.335.3.519.738.502 1.192.019.45-.16.887-.487 1.193-.43.316-.96.463-1.489.412z" />
      </G>
    </G>
  </Svg>
);

export default LogoSvg;