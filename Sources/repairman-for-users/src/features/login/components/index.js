/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import { translate } from '../../../locale/index';
import { View, SafeAreaView, Text, TextInput, StatusBar, Alert } from 'react-native';
import { styles } from './style';
import { stylesCommon } from '../../../style';
import { sendOtpAction } from '../../../components/otp/actions/sendOtp';
import ButtonCustom from '../../../components/buttonCustom/index';
//import commonConstant from '../../../constants/index';
import { CHECK_PHONE_NUMBER } from '../../signup/actionTypes/checkPhoneNumber';
import { OTP } from '../../../components/otp/actionTypes/sendOtp';
import FlagVnSvg from '../../../assets/svgIcon/flagVn';
import LoadingOverlayCustom from '../../../components/loadingOverlayCustom/index';
import { checkPhoneNumberAction } from '../../signup/actions/checkPhoneNumber';

function Separator() {
    return <View style={styles.separator} />;
}
var _callFnNumber = 0;
var _currentUserAction = null;
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phoneNumber: '' };
        console.log('\n\n-------------------------------------------------');
    }
    static navigationOptions = {
        headerStyle: {
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
    };
    componentDidMount() {
        console.log(++_callFnNumber, 'ComponentDidMount');
    }
    responseSendOtpAction = (sendOtpModel) => {
        console.log(++_callFnNumber, 'ResponseSendOtpAction', sendOtpModel);
        if (sendOtpModel.responseData) {
            if (sendOtpModel.responseData.Success) {
                const { navigate } = this.props.navigation;
                const loginPayload = { phone_number: this.state.phoneNumber };
                navigate('LoginVerifyOtpScreen', { loginPayload });
            } else {
                Alert.alert(sendOtpModel.responseData.Message);
            }
        }
    }
    responseCheckPhoneAction = (checkPhoneModel) => {
        console.log(++_callFnNumber, 'responseCheckPhoneAction', JSON.stringify(checkPhoneModel));
        const { navigate } = this.props.navigation;
        if (checkPhoneModel.responseData && checkPhoneModel.responseData.Success) {
            this.props.sendOtpAction({ phone_number: this.state.phoneNumber });
        } else {
            //Alert.alert(translate('login.phoneNumberNotRegister'));
            navigate('HomeScreen');
        }
    }
    requestAction = (nextProps) => {
        let result = false;
        const { checkPhoneModel, sendOtpModel } = nextProps;
        if (checkPhoneModel && checkPhoneModel.isLoading) {
            _currentUserAction = CHECK_PHONE_NUMBER.FIND;
            result = true;
        }
        if (sendOtpModel && sendOtpModel.isLoading) {
            _currentUserAction = OTP.SEND;
            result = true;
        }
        console.log(++_callFnNumber, 'RequestAction: ', _currentUserAction, result);
        return result;
    }
    responseAction = (nextProps) => {
        const { checkPhoneModel, sendOtpModel } = nextProps;
        switch (_currentUserAction) {
            case (CHECK_PHONE_NUMBER.FIND):
                if (checkPhoneModel && !checkPhoneModel.isLoading) {
                    this.responseCheckPhoneAction(checkPhoneModel);
                }
                break;
            case (OTP.SEND):
                if (sendOtpModel && !sendOtpModel.isLoading) {
                    this.responseSendOtpAction(sendOtpModel);
                }
                break;
            //DEFAULT
            default:
                break;
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.requestAction(nextProps)) { return; }
        this.responseAction(nextProps);
    }
    validateInput(phoneNumber) {
        let result = true;
        if (!phoneNumber || phoneNumber.trim() === '' || phoneNumber.length < 9) {
            Alert.alert(translate('login.phoneNumberInvalid'));
            result = false;
        } else if (phoneNumber.length > 13) {
            Alert.alert(translate('login.phoneNumberExceeding'));
            result = false;
        }
        return result;
    }
    handleBtnLogin = () => {
        let { phoneNumber } = this.state;
        if (phoneNumber && phoneNumber.indexOf('0') !== 0 || phoneNumber.length <= 9) {
            console.log('+84');
            phoneNumber = '+84' + phoneNumber;
        }
        if (!this.validateInput(phoneNumber)) { return; }
        else {
            //this.setState({ phoneNumber: phoneNumber });
            console.log(++_callFnNumber, 'handleBtnLogin', phoneNumber);
            this.props.checkPhoneNumberAction({ phone_number: phoneNumber });
        }
    }
    render() {
        const { sendOtpModel, checkPhoneModel } = this.props;
        console.log(++_callFnNumber, '###### Render Login Screen ######');
        if ((sendOtpModel && sendOtpModel.isLoading) || (checkPhoneModel && checkPhoneModel.isLoading)) {
            return <LoadingOverlayCustom visible={true} processType={true} />;
        }
        return (
            <SafeAreaView style={[stylesCommon.container, stylesCommon.regular]}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" hidden={false} />
                <View style={[styles.containerView]}>
                    <Text style={[stylesCommon.bold, styles.titleLogin]}>{translate('login.title')}</Text>
                    <View style={[styles.itemCenter, stylesCommon.mrBottomStd]}>
                        <Text style={[styles.subTitleLogin, stylesCommon.mrBottomStd]}>{translate('login.subTitle')}</Text>
                    </View>
                    <View style={[styles.containerInput, stylesCommon.mrBottomStd2x]}>
                        <View style={[styles.containerInput, styles.selectCode]}>
                            <FlagVnSvg style={styles.flagVn} />
                            <Text style={styles.countryCode}>+84</Text>
                        </View>
                        <TextInput style={styles.inputPhone} placeholder={translate('login.yourPhoneNumber')}
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                            value={this.state.phoneNumber} keyboardType={'numeric'} />
                    </View>
                    <ButtonCustom bgButton="bgBlack" colorText="txtYellow"
                        textButton={translate('common.btnLogin')} handleButtonCustom={this.handleBtnLogin} />
                </View>
                <Separator />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    sendOtpModel: state.sendOtpReducer,
    checkPhoneModel: state.checkPhoneNumberReducer,
});

const mapDispatchToProps = {
    sendOtpAction,
    checkPhoneNumberAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
