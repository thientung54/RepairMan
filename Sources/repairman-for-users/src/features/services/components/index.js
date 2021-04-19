/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StatusBar } from 'react-native';
import { translate } from '../../../locale/index';
import { styles } from './style';
import { stylesCommon } from '../../../style';
import { getAsyncStorage } from '../../../utilities/storage';
import API_SERVICES from '../../../store/services';
import { commonConstant } from '../../../constants';

import BridgesSVG from '../../../assets/svgIcon/fix_bridges';
import CameraSVG from '../../../assets/svgIcon/fix_camera';
import ElectricSVG from '../../../assets/svgIcon/fix_electric';
import ElectricEquipmentSVG from '../../../assets/svgIcon/fix_electric_equipment';
import InternetSVG from '../../../assets/svgIcon/fix_internet';
import WaterSVG from '../../../assets/svgIcon/fix_water';
import SysElectricElectronicSVG from '../../../assets/svgIcon/system_electric_electronic';
import SysLightSVG from '../../../assets/svgIcon/system_lights';
import SysNetworkComputerSVG from '../../../assets/svgIcon/system_network_computer';
import SysNetworkSecuritySVG from '../../../assets/svgIcon/system_network_security';
import SysRefrigerationSVG from '../../../assets/svgIcon/system_refrigeration';
import SysWaterSupplySVG from '../../../assets/svgIcon/system_water_supply';

export default class ServicesScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = () => ({
        tabBarLabel: translate('common.tabHome'),
    });
    renderLog = () => {
        getAsyncStorage(commonConstant.AUTH_TOKEN).then((authToken) => {
            console.log('HEADERS of ServiceScreen: ', API_SERVICES.HEADERS(authToken));
        });
    }
    render() {
        this.renderLog();
        return (
            // style={[stylesCommon.regular, styles.homeWrap, styles.container]}
            <SafeAreaView>
                <ScrollView>
                    <StatusBar
                        backgroundColor="#FFD43F"
                        barStyle="dark-content"
                        hidden={false}
                    />
                    <View>
                        <View style={[styles.serviceSection, { marginHorizontal: 8 }]}>
                            <Text style={[stylesCommon.bold, styles.serviceTitle]}>{translate('services.Repair')}</Text>
                            <View style={[stylesCommon.dFlexWRow, { marginHorizontal: 8 }]}>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><ElectricSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('home.ElecRepairTxt')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><WaterSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('home.WaterRepairTxt')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><ElectricEquipmentSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('home.RepairOfEUTxt')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><InternetSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('home.FixInternetTxt')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><CameraSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('home.FixCameraTxt')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><BridgesSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('services.FixBridgesTxt')}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.serviceSection, { marginHorizontal: 8 }]}>
                            <Text style={[stylesCommon.bold, styles.serviceTitle]}>{translate('services.RepairAdvice')}</Text>
                            <View style={[stylesCommon.dFlexWRow, { marginHorizontal: 8 }]}>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><SysLightSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('services.LightingSystems')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><SysRefrigerationSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('services.RefrigerationSystems')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><SysWaterSupplySVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('services.WaterSupplySystem')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><SysElectricElectronicSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('services.ElectricElectronicSystem')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><SysNetworkSecuritySVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('services.NetworkSecuritySystem')}</Text>
                                </View>
                                <View style={[styles.width33, styles.serviceItem]}>
                                    <View style={[styles.ImgService]}><SysNetworkComputerSVG /></View>
                                    <Text style={[styles.serviceTxt]}>{translate('services.ComputerNetworkSystem')}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
