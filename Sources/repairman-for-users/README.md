# Install iso

cd ios && pob install

# install rxjs

npm install ---save rxjs

# link font

- Add to package json
  "rnpm": {
  "assets": [
  "app/fonts"
  ]
  }

# Fix font in iOS

1. delete build folder
   Delete Sub folder under
   Project -> ios -> build -> Build
   and delete ModuleCache.noindex from
   Project -> ios -> build
1. npm i --save react-native-vector-icons
1. react-native link
1. react-native link react-native-vector-icons
1. npm start -- -- reset-cache
1. react-native run-ios

# Google map

- Ref: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md

1. If you want to enable Google Maps on iOS, obtain the Google API key and edit your AppDelegate.m as follows:

- #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication _)application didFinishLaunchingWithOptions:(NSDictionary _)launchOptions
  {

* [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
  ...

2. Re-run npm install or yarn to ensure the postinstall script is run.
3. (React Native 0.60 and higher) Add the following to your Podfile above the use_native_modules! function and run pod install in the ios folder:

# React Native Maps dependencies

rn_maps_path = '../node_modules/react-native-maps'
pod 'react-native-google-maps', :path => rn_maps_path
pod 'GoogleMaps'
pod 'Google-Maps-iOS-Utils'
