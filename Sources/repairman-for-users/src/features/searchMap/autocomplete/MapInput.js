/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View} from 'react-native';
import LocationIcon from '../../../assets/svgIcon/location';

class MapInput extends React.Component {
  render() {
    return (
      <View style={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 6,
              marginRight: 8,
            }}>
            <LocationIcon />
          </View>
          <View style={{flex: 1}}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              minLength={2} // minimum length of text to search
              autoFocus={true}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
              listViewDisplayed="auto" // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              getDefaultValue={() => {
                return '';
              }}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyBzzl9B_PTiAoQ7TPReKhgy0i2doL1bq-8',
                language: 'en', // language of the results
                // types: '(cities)' // default: 'geocode'
              }}
              styles={{
                textInputContainer: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderTopWidth: 0,
                  borderBottomWidth: 1,
                  height: 42,
                  borderColor: 'rgb(244,244,244)',
                },
                listView: {
                  position: 'absolute',
                  top: '100%',
                  marginTop: 26,
                  left: 0,
                  marginLeft: -24,
                },
                description: {
                  fontFamily: 'Roboto-Medium',
                  fontSize: 17,
                  color: 'rgb(74, 74, 74)',
                  paddingLeft: 0,
                  marginLeft: 0,
                },
                row: {
                  borderBottomWidth: 0.5,
                  height: 'auto',
                  paddingLeft: 0,
                  marginLeft: 0,
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                  height: 26,
                  color: '#5d5d5d',
                  fontSize: 16,
                  fontFamily: 'Roboto-Medium',
                },
              }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={{}}
              GooglePlacesSearchQuery={{
                rankby: 'distance',
                type: 'cafe',
              }}
              GooglePlacesDetailsQuery={{
                fields: 'formatted_address',
              }}
              filterReverseGeocodingByTypes={[
                'locality',
                'administrative_area_level_3',
              ]}
              debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
          </View>
        </View>
      </View>
    );
  }
}
export default MapInput;
