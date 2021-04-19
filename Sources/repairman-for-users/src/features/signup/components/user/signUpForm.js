/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../style';
import { translate } from '../../../../locale/index';
import { checkPhoneNumberAction } from '../../actions/checkPhoneNumber';
import { sendOtpAction } from '../../../../components/otp/actions/sendOtp';
import { commonConstant } from '../../../../constants';
import { ShowSignUpError } from '../../../../utilities/showMessage';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';
import LoadingOverlayCustom from '../../../../components/loadingOverlayCustom/index';
import ButtonCustom from '../../../../components/buttonCustom/index';
import SelectCountryCode from '../../../../components/selectCountryCode/index';




class SignUpForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isInputNameFocus: false,
            isInputPhoneNumberFocus: false,
            inputNameValue: '',
            inputPhoneNumberValue: '',
            isUserNameValid: false,
            isPhoneNumberValid: false,
            modalVisible: false,
            timeOut: false,
            countryCodeValue: '+84',
        };

    }

    inputNameFocus = () => {
        this.setState({ isInputNameFocus: true });
    }
    inputPhoneNumberFocus = () => {
        this.setState({ isInputPhoneNumberFocus: true });
    }
    inputNameBlur = () => {
        this.setState({ isInputNameFocus: false });
    }
    inputPhoneNumberBlur = () => {
        this.setState({ isInputPhoneNumberFocus: false });
    }
    getInputNameValue = (latestText) => {
        if (latestText.length > 5) {
            this.setState({
                inputNameValue: latestText,
                isUserNameValid: true,
            });
        } else {
            this.setState({
                inputNameValue: latestText,
                isUserNameValid: false,
            });
        }
    }
    getInputPhoneNumberValue = (latestText) => {
        if (latestText.length > 8) {
            this.setState({
                inputPhoneNumberValue: latestText,
                isPhoneNumberValid: true,
            });
        } else {
            this.setState({
                inputPhoneNumberValue: latestText,
                isPhoneNumberValid: false,
            });
        }
    }

    requestCheckPhoneNumberAction = (nextProps) => {
        console.log('----> requestCheckPhoneNumberAction');
        return false;
    }
    responseCheckPhoneNumberAction = (nextProps) => {
        console.log('----> responseCheckPhoneNumberAction');
        const { checkPhoneNumberModel } = nextProps;
        const { navigate } = this.props.navigation;
        console.log('74-CHECK PHONE NUMBER MODEL:', checkPhoneNumberModel);

        if (checkPhoneNumberModel.isError) {
            console.log('VALID TO GET OTP CODE');
            const getOtpPayload = {
                phone_number: this.state.countryCodeValue + this.state.inputPhoneNumberValue,
            };
            checkPhoneNumberModel.isError = false;
            checkPhoneNumberModel.responseData = '';
            this.props.sendOtpAction(getOtpPayload);
        } else {
            clearTimeout(this.requestTimeOut);
            ShowSignUpError(translate('signUp.titleExistPhoneNumber'), translate('signUp.subtitleExistPhoneNumber'));
            navigate('LoginScreen');
        }

    }
    requestSendOtpAction = (nextProps) => {
        console.log('----> requestSendOtpAction');
        return false;
    }
    responseSendOtpAction = (nextProps) => {
        console.log('----> responseSendOtpAction');
        const { navigate } = this.props.navigation;
        const { sendOtpModel } = nextProps;


        if (sendOtpModel.responseData && sendOtpModel.responseData.ErrorNumber === 200) {
            const registerPayload = {
                phone_number: this.state.countryCodeValue + this.state.inputPhoneNumberValue,
                full_name: this.state.inputNameValue,
                role: 'customer',
            };

            console.log('REGISTER PAYLOAD:', registerPayload);
            this.setState({
                modalVisible: false,
            });
            clearTimeout(this.requestTimeOut);
            navigate('UserVerifyOtpScreen', { registerPayload });
        } else {
            ShowSignUpError(translate('signUp.SendOtpFail'));
        }

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { checkPhoneNumberModel } = nextProps;
        const { sendOtpModel } = nextProps;

        console.log('121-CHECK PHONE NUMBER MODEL:', checkPhoneNumberModel);
        console.log('REGISTER MODEL:', sendOtpModel);



        if (!checkPhoneNumberModel || checkPhoneNumberModel.isLoading) {
            return this.requestCheckPhoneNumberAction(nextProps);
        }
        if (!sendOtpModel || sendOtpModel.isLoading) {
            return this.requestSendOtpAction(nextProps);
        }
        if (sendOtpModel.responseData || sendOtpModel.isError) {
            return this.responseSendOtpAction(nextProps);
        }
        if (checkPhoneNumberModel.responseData || checkPhoneNumberModel.isError) {
            return this.responseCheckPhoneNumberAction(nextProps);
        }
    }

    checkPhoneNumber = () => {

        if (!this.state.isUserNameValid) {
            return ShowSignUpError(translate('signUp.invalidUser'));
        } else if (!this.state.isPhoneNumberValid) {
            return ShowSignUpError(translate('signUp.invalidPhoneNumber'));
        } else {
            const checkPhoneNumberPayload = {
                phone_number: this.state.countryCodeValue + this.state.inputPhoneNumberValue,
            };
            console.log('CALL CHECK PHONE NUMBER API WITH:', checkPhoneNumberPayload);
            this.setState({
                timeOut: false,
            });
            this.requestTimeOut = setTimeout(() => {
                this.setState({
                    timeOut: true,
                });
                ShowSignUpError(translate('common.requestTimeOut'));
            }, commonConstant.REQUEST_TIME_OUT);
            this.props.checkPhoneNumberAction(checkPhoneNumberPayload);
        }
    }

    openPolicyScreen = () => {
        const { navigate } = this.props.navigation;
        navigate('CustomerPolicyScreen');
    }
    getCountryCode = (code) => {
        console.log('Receive countryCode:',code);
        this.setState({
            countryCodeValue: code,
        });
    }
    render() {
        const { checkPhoneNumberModel, sendOtpModel } = this.props;
        let { modalVisible, timeOut } = this.state;

        if (!checkPhoneNumberModel || checkPhoneNumberModel.isLoading || !sendOtpModel || sendOtpModel.isLoading) {
            timeOut ? modalVisible = false : modalVisible = true;
        }

        let styleInputName = this.state.isInputNameFocus ? styles.inputNameFocus : styles.inputName,
            styleInputNameLabel = this.state.isInputNameFocus || this.state.inputNameValue ? styles.labelNameFocus : styles.labelName,
            styleInputNameValid = this.state.isUserNameValid ? styles.inputCheckCircleValid : styles.inputCheckCircle,
            styleInputPhoneNumber = this.state.isInputPhoneNumberFocus ? styles.inputPhoneNumberFocus : styles.inputPhoneNumber,
            styleInputPhoneNumberLabel = this.state.isInputPhoneNumberFocus || this.state.inputPhoneNumberValue ? styles.labelPhoneNumberFocus : styles.labelPhoneNumber,
            styleInputPhoneNumberValid = this.state.isPhoneNumberValid ? styles.inputCheckCircleValid : styles.inputCheckCircle;
        return (
            <ScrollView scrollEnabled={false} keyboardShouldPersistTaps={'handled'}>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styleInputName}
                        onFocus={this.inputNameFocus}
                        onChangeText={this.getInputNameValue}
                        onBlur={this.inputNameBlur}
                        maxLength={40} >
                        {this.state.inputNameValue}
                    </TextInput>
                    <Text
                        style={styleInputNameLabel}>
                        {translate('common.userName')}
                    </Text>
                    <FontAwesome
                        icon={SolidIcons.checkCircle}
                        style={styleInputNameValid} />
                </View>
                <View style={styles.inputPhoneNumberGroup}>
                    <SelectCountryCode getCountryCode={this.getCountryCode}/>
                    <TextInput
                        style={styleInputPhoneNumber}
                        onFocus={this.inputPhoneNumberFocus}
                        onChangeText={this.getInputPhoneNumberValue}
                        onBlur={this.inputPhoneNumberBlur}
                        maxLength={9}
                        keyboardType={'numeric'} >
                        {this.state.inputPhoneNumberValue}
                    </TextInput>
                    <Text
                        style={styleInputPhoneNumberLabel}>
                        {translate('common.phoneNumber')}
                    </Text>
                    <FontAwesome
                        icon={SolidIcons.checkCircle}
                        style={styleInputPhoneNumberValid} />
                </View>
                <Text style={styles.informationText}>
                    {translate('signUp.agreePolicy_1')}
                    <Text style={styles.textLink} onPress={this.openPolicyScreen}>
                        {translate('signUp.agreePolicy_2')}
                    </Text>
                    {translate('signUp.agreePolicy_3')}
                </Text>
                <ButtonCustom
                    bgButton="bgYellow"
                    colorText="txtBlack"
                    textButton={translate('common.btnRegister')}
                    handleButtonCustom={this.checkPhoneNumber} />
                <LoadingOverlayCustom visible={modalVisible} />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    checkPhoneNumberModel: state.checkPhoneNumberReducer,
    sendOtpModel: state.sendOtpReducer,
});

const mapDispatchToProps = {
    checkPhoneNumberAction,
    sendOtpAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
