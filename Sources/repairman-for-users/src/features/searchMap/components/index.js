/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { translate } from '../../../locale/index';
import { StatusBar, SafeAreaView, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';

import { stylesCommon } from '../../../style';
import ElectricSVG from '../../../assets/svgIcon/fix_electric';
import { ServiceStyles } from './style';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { styles } from './style';
import LocationIcon from '../../../assets/svgIcon/location';
import MapInput from '../autocomplete/MapInput';


export default class SearchMapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceListLayout: {},
      region: {
        latitude: 10.801834,
        longitude: 106.641430,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [{
        latlng: { latitude: 10.801834, longitude: 106.641430 },
        title: 'Title 01',
        description: 'Marker 01',
      }, {
        latlng: { latitude: 10.805894, longitude: 106.645490 },
        title: 'Title 02',
        description: 'Marker 02',
      }],
    };
  }

  render() {
    const screenHeight = Math.round(Dimensions.get('window').height);
    console.log('========SearchMapScreen===========');
    return (
      <SafeAreaView style={[stylesCommon.regular, stylesCommon.containerFull]}>
        <StatusBar hidden={true} />
        <MapView provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={this.state.region}
          showsUserLocation={true}>
          {this.state.markers.map((marker, index) => (
            <Marker key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        <TouchableOpacity onPress={() => this.RBSheet.open()}>
          <Text style={{ color: 'rgb(15,122,182)' }}>Dịch vụ</Text>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={500}
          duration={500}
          customStyles={{
            container: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <View style={ServiceStyles.dFlex1}>
            <View style={[ServiceStyles.headerSList, ServiceStyles.flexDirectionRow]}>
              <Text style={[ServiceStyles.titleSList, ServiceStyles.dFlex1]}>Sửa chữa</Text>
              <Image source={require('../../../assets/images/ico_info.png')} />
            </View>
            <View style={[ServiceStyles.bodySList]}>
              <TouchableOpacity style={[ServiceStyles.itemSList, ServiceStyles.selectedItemSList]} onPress={() => console.log('Trinh Service List')}>
                <View style={[ServiceStyles.itemInSList, ServiceStyles.flexDirectionRow, ServiceStyles.alignVCenter, ServiceStyles.selectedItemInSList]}>
                  <View style={[ServiceStyles.flexDirectionRow, ServiceStyles.dFlex1, ServiceStyles.alignVCenter]}>
                    <View><ElectricSVG /></View>
                    <Text style={ServiceStyles.nameItemSList}>{translate('home.ElecRepairTxt')}</Text>
                  </View>
                  <View style={[ServiceStyles.flexDirectionRow]}>
                    <Text style={ServiceStyles.priceItemSList}>54K</Text>
                    <Text style={ServiceStyles.unitItemSList}>VND</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[ServiceStyles.itemSList]} onPress={() => console.log('Trinh Service List')}>
                <View style={[ServiceStyles.itemInSList, ServiceStyles.flexDirectionRow, ServiceStyles.alignVCenter]}>
                  <View style={[ServiceStyles.flexDirectionRow, ServiceStyles.dFlex1, ServiceStyles.alignVCenter]}>
                    <View><ElectricSVG /></View>
                    <Text style={ServiceStyles.nameItemSList}>{translate('home.ElecRepairTxt')}</Text>
                  </View>
                  <View style={[ServiceStyles.flexDirectionRow]}>
                    <Text style={ServiceStyles.priceItemSList}>54K</Text>
                    <Text style={ServiceStyles.unitItemSList}>VND</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[ServiceStyles.itemSList]} onPress={() => console.log('Trinh Service List')}>
                <View style={[ServiceStyles.itemInSList, ServiceStyles.flexDirectionRow, ServiceStyles.alignVCenter]}>
                  <View style={[ServiceStyles.flexDirectionRow, ServiceStyles.dFlex1, ServiceStyles.alignVCenter]}>
                    <View><ElectricSVG /></View>
                    <Text style={ServiceStyles.nameItemSList}>{translate('home.ElecRepairTxt')}</Text>
                  </View>
                  <View style={[ServiceStyles.flexDirectionRow]}>
                    <Text style={ServiceStyles.priceItemSList}>54K</Text>
                    <Text style={ServiceStyles.unitItemSList}>VND</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[ServiceStyles.itemSList]} onPress={() => console.log('Trinh Service List')}>
                <View style={[ServiceStyles.itemInSList, ServiceStyles.flexDirectionRow, ServiceStyles.alignVCenter]}>
                  <View style={[ServiceStyles.flexDirectionRow, ServiceStyles.dFlex1, ServiceStyles.alignVCenter]}>
                    <View><ElectricSVG /></View>
                    <Text style={ServiceStyles.nameItemSList}>{translate('home.ElecRepairTxt')}</Text>
                  </View>
                  <View style={[ServiceStyles.flexDirectionRow]}>
                    <Text style={ServiceStyles.priceItemSList}>54K</Text>
                    <Text style={ServiceStyles.unitItemSList}>VND</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>

        <TouchableOpacity onPress={() => this.SearchMap.open()}>
          <LocationIcon />
          <Text style={{ color: 'rgb(15,122,182)' }}>Your location</Text>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.SearchMap = ref;
          }}
          height={screenHeight}
          duration={500}
          customStyles={{
            container: {
            },
          }}
        >
          <View style={{ marginTop: 30, marginLeft: 16, marginBottom: 16 }}>
            <TouchableOpacity onPress={() => this.SearchMap.close()}>
              <Image source={require('../../../assets/images/backArrow.png')} />
            </TouchableOpacity>
          </View>
          <MapInput />
          <View style={{marginTop: 17, backgroundColor: 'rgb(244,244,244)', height: 9, width: '100%'}} />
        </RBSheet>
      </SafeAreaView>
    );
  }
}
