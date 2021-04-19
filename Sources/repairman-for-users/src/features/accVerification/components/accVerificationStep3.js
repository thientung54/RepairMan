/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, SafeAreaView, Text, ScrollView, Picker, Linking, Alert } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons } from 'react-native-fontawesome';
import CheckBox from 'react-native-check-box';

import { styles } from './style';
import { stylesCommon } from '../../../style';
import { translate } from '../../../locale/index';
import ButtonCustom from '../../../components/buttonCustom/index';
import LoadingOverlayCustom from '../../../components/loadingOverlayCustom/index';
import { accVerificationStep3Action } from '../actions/accVerificationStep3';
import { getAllRegServiceAction } from '../actions/regService';
import { getAllRegAdvisorAction } from '../actions/regAdvisor';
import ProvincesData from '../../../constants/provinces.json';
import { TransferError } from '../../../utilities/errors';
import { ShowErrorMessage, HideMessage } from '../../../utilities/showMessage';
import { commonConstant } from '../../../constants/index';
import { getAsyncStorage } from '../../../utilities/storage';

var _callFnNumber = 0,
    TOKEN_JWT;
class AccVerificationStep3Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RegCictyData: '',
            ServicesData: [],
            AdvisorServicesData: [],
            ServicesChecked: [],
            AdvisorServicesChecked: [],
            modalVisible: false,
            processType: false,
            errors: {},
            actionAdd: false,
            timer: null,
        };
    }

    static navigationOptions = () => ({
        title: translate('common.btnVerifyAccount'),
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#FFD43F',
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
    });

    async UNSAFE_componentWillMount() {
        TOKEN_JWT = await getAsyncStorage(commonConstant.AUTH_TOKEN);
    }

    componentDidMount() {
        console.log(++_callFnNumber, 'ComponentDidMount');
        this.props.getAllRegServiceAction();
        this.props.getAllRegAdvisorAction();
    }

    requestAction = (nextProps) => {
        const { accVerificationStep3Model } = nextProps;
        console.log(++_callFnNumber, 'RequestAction', accVerificationStep3Model);
        return false;
    }

    responseAction = (nextProps) => {
        const { accVerificationStep3Model } = nextProps;
        let { modalVisible, processType, actionAdd, timer } = this.state;
        console.log(++_callFnNumber, 'ResponseAction', accVerificationStep3Model);
        if (actionAdd && this.handleValidation()) {
            if (accVerificationStep3Model &&
                accVerificationStep3Model.responseData && accVerificationStep3Model.responseData.Success === true) {
                modalVisible = false;
                processType = true;
                this.setState({
                    ...this.state,
                    modalVisible: modalVisible,
                    processType: processType,
                });
                const { navigate } = this.props.navigation;
                navigate('HomeScreen');
            }
            if ((accVerificationStep3Model && accVerificationStep3Model.isError)) {
                let errorMsg = TransferError(accVerificationStep3Model.responseData.status);
                ShowErrorMessage(true, errorMsg);
                StatusBar.setBackgroundColor('#FF0000');
                StatusBar.setBarStyle('light-content');
                timer = setTimeout(function () {
                    HideMessage('error');
                }, 2200);
                this.setState({
                    ...this.state,
                    timer: timer,
                });
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { accVerificationStep3Model, regServiceModel, regAdvisorModel } = nextProps;
        //request action
        if (!accVerificationStep3Model || accVerificationStep3Model.isLoading || !regServiceModel || regServiceModel.isLoading || !regAdvisorModel || regAdvisorModel.isLoading) {
            this.requestAction(nextProps);
        }
        //response action
        if ((accVerificationStep3Model && !accVerificationStep3Model.isLoading) || (regServiceModel && !regServiceModel.isLoading) || (regAdvisorModel && regAdvisorModel.isLoading)) {
            this.responseAction(nextProps);
        }
    }

    handleValidation = () => {
        const { ServicesData, RegCictyData } = this.state;
        let isValidForm = true, errors = {};
        if (RegCictyData === '') {
            isValidForm = false;
            errors.regCityLabel = translate('accVerification.regCityLabel');
        }
        if (ServicesData && ServicesData.length === 0) {
            isValidForm = false;
            errors.repairServiceLabel = translate('accVerification.repairServiceLabel');
        }
        this.setState({
            errors: errors,
        });
        return isValidForm;
    }

    handleBtnContinue = () => {
        console.log(++_callFnNumber, 'handleBtnContinue');
        let { ServicesData, AdvisorServicesData, RegCictyData, actionAdd, timer } = this.state,
            { registerPayload } = this.props.navigation.state.params;
        actionAdd = true;
        if (this.handleValidation()) {
            let ServicesMergedData = [...ServicesData, ...AdvisorServicesData];
            let payload = {
                phone_number: registerPayload.phone_number,
                area: RegCictyData,
                services: ServicesMergedData,
                authToken: 'jwt ' + TOKEN_JWT,
            };
            console.log('payload: ', payload);
            this.props.accVerificationStep3Action(payload);
        } else {
            ShowErrorMessage(false);
            StatusBar.setBackgroundColor('#FF0000');
            StatusBar.setBarStyle('light-content');
            timer = setTimeout(function () {
                HideMessage('error');
            }, 2200);
            this.setState({
                ...this.state,
                timer: timer,
            });
        }
        this.setState({
            actionAdd: actionAdd,
        });
    }

    checkBoxChanged = (id, value, label, fieldName) => {
        let { ServicesChecked, ServicesData, AdvisorServicesChecked, AdvisorServicesData } = this.state;
        if (fieldName === 'Services') {
            ServicesChecked[id] = !value;
            if (!value) {
                ServicesData.push(label);
            } else {
                ServicesData = ServicesData.slice(0, id).concat(ServicesData.slice(id + 1, ServicesData.length));
            }
            this.setState({
                ServicesChecked: ServicesChecked,
                ServicesData: ServicesData,
            });
        }
        if (fieldName === 'AdvisorServices') {
            AdvisorServicesChecked[id] = !value;
            if (!value) {
                AdvisorServicesData.push(label);
            } else {
                AdvisorServicesData = AdvisorServicesData.slice(0, id).concat(AdvisorServicesData.slice(id + 1, AdvisorServicesData.length));
            }
            this.setState({
                AdvisorServicesChecked: AdvisorServicesChecked,
                AdvisorServicesData: AdvisorServicesData,
            });
        }
    }

    componentWillUnMount() {
        let { timer } = this.state;
        timer !== undefined ? clearTimeout(timer) : null;
    }

    render() {
        console.log(++_callFnNumber, '###### Render Welcome Screen ######');
        let cityItems, serviceItems, AdvisorItems = [],
            { modalVisible, ServicesChecked, AdvisorServicesChecked, processType, errors } = this.state;
        const { accVerificationStep3Model, regServiceModel, regAdvisorModel } = this.props;
        if (ProvincesData) {
            cityItems = ProvincesData;
        }
        if (regServiceModel && regServiceModel.responseData && regServiceModel.responseData.Data && regServiceModel.responseData.Data.length > 0) {
            serviceItems = regServiceModel.responseData.Data.map((item) => {
                return { id: item.id, name: item.name };
            });
        }
        if (regAdvisorModel && regAdvisorModel.responseData && regAdvisorModel.responseData.Data && regAdvisorModel.responseData.Data.length > 0) {
            AdvisorItems = regAdvisorModel.responseData.Data.map((item) => {
                return { id: item.id, name: item.name };
            });
        }
        if ((regServiceModel && regServiceModel.isLoading) || (regAdvisorModel && regAdvisorModel.isLoading)) {
            modalVisible = true;
            processType = false;
        }
        if (accVerificationStep3Model && accVerificationStep3Model.isLoading) {
            processType = true;
            modalVisible = true;
        }
        return (
            <SafeAreaView style={[stylesCommon.regular, styles.bgColorLGrey, styles.container]}>
                <StatusBar backgroundColor="#FFD43F" barStyle="dark-content" hidden={false} />
                <View style={[stylesCommon.dFlexRow, stylesCommon.shadowHeader]}>
                    <View style={[stylesCommon.progressBar, stylesCommon.step3]} />
                </View>
                <ScrollView>
                    <View style={styles.bgColorLWhite}>
                        <Text style={[stylesCommon.medium, styles.textCenter, styles.fontSize18, styles.paddingTop30, styles.colorBrown]}>3/3</Text>
                        <FontAwesome icon={SolidIcons.checkCircle} style={[styles.colorGreen, styles.fontSize29, styles.textCenter, styles.paddingTop30]} />
                        <Text style={[stylesCommon.medium, styles.textCenter, styles.fontSize22, styles.padding30, styles.colorBrown]}>{translate('accVerification.titleStep3')}</Text>
                    </View>
                    <View style={styles.padding16}>
                        <Text style={[styles.fontSize16, styles.paddingTop4, styles.colorLRBrown, styles.paddingBottom11]}>{translate('accVerification.regCityLabel')}</Text>
                        <View style={styles.coverPickerStyle}>
                            <Picker
                                selectedValue={this.state.RegCictyData}
                                style={styles.pickerStyle}
                                onValueChange={(itemValue) =>
                                    this.setState({ RegCictyData: itemValue })
                                }>
                                <Picker.Item label="Please select a value" value=""></Picker.Item>
                                {
                                    cityItems && cityItems.map((item, index) =>
                                        <Picker.Item key={index} label={item.display} value={item.display}></Picker.Item>
                                    )
                                }
                            </Picker>
                        </View>
                        {
                            errors && errors.regCityLabel ?
                                <Text style={[stylesCommon.errorsText]}>{errors.regCityLabel}{translate('common.fieldRequiredMsg')}</Text>
                                :
                                <></>
                        }
                        <Text style={[styles.fontSize16, styles.paddingTop15, styles.colorLRBrown]}>{translate('accVerification.repairServiceLabel')}</Text>
                        <View style={[styles.paddingLR15, styles.bgColorLWhite, styles.mrTop11, styles.borderRadius11]}>
                            {
                                serviceItems && serviceItems.map((item, index) => {
                                    ServicesChecked[index] = ServicesChecked[index] ? ServicesChecked[index] : false;
                                    return (
                                        <CheckBox
                                            key={index}
                                            style={[styles.checkBoxStyle]}
                                            onClick={() => this.checkBoxChanged(index, ServicesChecked[index], item.id, 'Services')}
                                            isChecked={ServicesChecked[index]}
                                            leftText={item.name}
                                            leftTextStyle={{ fontSize: 17, color: '#4A4A4A' }}
                                            checkedImage={<FontAwesome icon={SolidIcons.checkSquare} style={[styles.colorGreen, styles.fontSize24]} />}
                                            unCheckedImage={<FontAwesome icon={RegularIcons.square} style={[styles.colorBrown, styles.fontSize24]} />}
                                        />
                                    );
                                })
                            }
                        </View>
                        {
                            errors && errors.repairServiceLabel ?
                                <Text style={[stylesCommon.errorsText]}>{errors.repairServiceLabel}{translate('common.fieldRequiredMsg')}</Text>
                                :
                                <></>
                        }
                        <Text style={[styles.fontSize16, styles.paddingTop4, styles.mrTop11, styles.colorLRBrown]}>{translate('accVerification.repairCSLabel')}</Text>
                        <View style={[styles.paddingLR15, styles.bgColorLWhite, styles.mrTop11, styles.borderRadius11]}>
                            {
                                AdvisorItems && AdvisorItems.map((item, index) => {
                                    AdvisorServicesChecked[index] = AdvisorServicesChecked[index] ? AdvisorServicesChecked[index] : false;
                                    return (
                                        <CheckBox
                                            key={index}
                                            style={[styles.checkBoxStyle]}
                                            onClick={() => this.checkBoxChanged(index, AdvisorServicesChecked[index], item.id, 'AdvisorServices')}
                                            isChecked={AdvisorServicesChecked[index]}
                                            leftText={item.name}
                                            leftTextStyle={{ fontSize: 17, color: '#4A4A4A' }}
                                            checkedImage={<FontAwesome icon={SolidIcons.checkSquare} style={[styles.colorGreen, styles.fontSize24]} />}
                                            unCheckedImage={<FontAwesome icon={RegularIcons.square} style={[styles.colorBrown, styles.fontSize24]} />}
                                        />
                                    );
                                })
                            }
                        </View>
                        <Text style={[styles.fontSize14, styles.paddingTop15, styles.colorLBrown, styles.paddingBottom30]}>
                            {translate('accVerification.note_1')}
                            <Text style={stylesCommon.textLink} onPress={() => { Linking.openURL('http://google.com'); }}>
                                {translate('accVerification.note_2')}
                            </Text>
                            {translate('accVerification.note_3')}
                        </Text>
                        <ButtonCustom bgButton="bgYellow" colorText="txtBlack"
                            textButton={translate('common.btnContinue')} handleButtonCustom={this.handleBtnContinue} />
                    </View>
                </ScrollView>
                <LoadingOverlayCustom visible={modalVisible} processType={processType} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    accVerificationStep3Model: state.accVerification3Reducer,
    regServiceModel: state.regServiceReducer,
    regAdvisorModel: state.regAdvisorReducer,
});

const mapDispatchToProps = {
    accVerificationStep3Action,
    getAllRegServiceAction,
    getAllRegAdvisorAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccVerificationStep3Screen);
