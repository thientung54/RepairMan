/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { styles } from './style';
import { translate } from '../../locale/index';
import { commonConstant } from '../../constants/index';
import { registerAction } from '../../features/signup/actions/registerUser';
import { loginAction } from '../../features/login/actions/index';
import { reSendOtpAction } from './actions/reSendOtp';
import { setAsyncStorage } from '../../utilities/storage';
import LoadingOverlayCustom from '../loadingOverlayCustom/index';
import { ShowSignUpError } from '../../utilities/showMessage';


import DotOtp from './dotOtp';

class OtpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countDownTime: commonConstant.COUNT_DOWN_TIME,
            otpValue: '',
            timeOut: false,
        };
        console.log('\n-------------OTP-----------------');
    }

    requestRegisterAction(nextProps) {
        console.log('requestRegisterAction');
        return false;
    }
    responseRegisterAction(nextProps) {
        const { userType } = this.props;
        const { registerModel } = nextProps;
        const { registerPayload } = this.props.navigation.state.params;
        let resetAction;
        console.log('responseRegisterAction');
        console.log(registerModel);
        if (registerModel.isError) {
            if (registerModel.responseData && registerModel.responseData.Message === 'OTP is invalid') {
                ShowSignUpError(translate('signUp.inCorrectOtp'));
            } else {
                ShowSignUpError(translate('signUp.registerFail'));
            }
            return clearTimeout(this.requestTimeOut);
        }
        if (registerModel && registerModel.responseData && registerModel.responseData.Data) {
            setAsyncStorage(commonConstant.AUTH_TOKEN, registerModel.responseData.Data.token);
            console.log('Set AUTH_TOKEN in AsyncStorage: ', registerModel.responseData.Data.token);
        }
        if (userType == commonConstant.TECHNICIAN_TYPE) {
            resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({
                    routeName: 'SignUpSuccessScreen',
                    params: {
                        registerPayload: registerPayload,
                    },
                })],
            });
        } else {
            resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
            });
        }
        this.setState({
            modalVisible: false,
        });
        clearTimeout(this.requestTimeOut);
        this.props.navigation.dispatch(resetAction);
    }

    requestLoginAction(nextProps) {
        console.log('requestLoginAction');
        return false;
    }
    responseLoginAction(nextProps) {
        const { loginModel } = nextProps;
        if (loginModel && loginModel.responseData && loginModel.responseData.Data) {
            setAsyncStorage(commonConstant.AUTH_TOKEN, loginModel.responseData.Data.token);
            console.log('Set AUTH_TOKEN in AsyncStorage: ', loginModel.responseData.Data.token);
        }
        let resetAction;
        resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
        });
        this.setState({
            modalVisible: false,
        });
        clearTimeout(this.requestTimeOut);
        this.props.navigation.dispatch(resetAction);
    }

    requestReSendOtpAction(nextProps) {
        console.log('requestSendOtp');
        return false;
    }
    responseReSendOtpAction(nextProps) {
        console.log('responseSendOtpAction');
        const { Data } = nextProps.reSendOtpModel.responseData;
        const { reSendOtpModel } = nextProps.reSendOtpModel;
        const { registerPayload } = this.props.navigation.state.params;
        console.log('SEND OTP MODEL:', Data);
        console.log('REGISTER PAYLOAD:', registerPayload);

        if (reSendOtpModel.isError) {
            return ShowSignUpError(translate('signUp.reSendOtpFail'));
        }
        this.state.countDownTime = commonConstant.COUNT_DOWN_TIME;
        registerPayload.otp = Data ? Data.otp : '';
        this.setState({
            modalVisible: false,
        });
        clearTimeout(this.requestTimeOut);
        console.log('NEW REGISTER PAYLOAD:', registerPayload);
        console.log('------------------DONE----------------');
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { otpType, registerModel, loginModel, reSendOtpModel } = nextProps;
        console.log('RESEND OTP MODEL:', reSendOtpModel);
        if (!reSendOtpModel || reSendOtpModel.isLoading) {
            return this.requestReSendOtpAction(nextProps);
        }
        if (reSendOtpModel.responseData || reSendOtpModel.isError) {
            if (reSendOtpModel.responseData.ErrorNumber === 200 || reSendOtpModel.isError) {
                return this.responseReSendOtpAction(nextProps);
            }
            return this.requestReSendOtpAction(nextProps);
        }
        if (otpType === commonConstant.OTP_SIGNUP_TYPE) {
            console.log('REGISTER MODEL:', registerModel);
            if (!registerModel || registerModel.isLoading) {
                return this.requestRegisterAction(nextProps);
            }
            if (registerModel.isError || (registerModel.responseData && registerModel.responseData.ErrorNumber === 200)) {
                return this.responseRegisterAction(nextProps);
            }
        } else if (otpType === commonConstant.OTP_LOGIN_TYPE) {
            console.log('LOGIN MODEL:', loginModel);
            if (!loginModel || loginModel.isLoading) {
                return this.requestLoginAction(nextProps);
            }
            if (loginModel.responseData && (loginModel.responseData.ErrorNumber === 200 || loginModel.responseData.status === 401)) {
                return this.responseLoginAction(nextProps);
            }
        }
    }
    verifyOtp = () => {
        const { userType, otpType } = this.props;
        const { registerPayload, loginPayload } = this.props.navigation.state.params;
        const otpValue = this.state.otpValue;

        if (otpValue && otpValue.length < 6) {
            return ShowSignUpError(translate('signUp.shortOtp'));
        }
        console.log('VERIFY OTP WITH OTP_TYPE:', otpType, 'AND USER_TYPE:', userType);
        this.setState({
            timeOut: false,
        });
        if (registerPayload && otpType === commonConstant.OTP_SIGNUP_TYPE) {
            const registerBody = {
                phone_number: registerPayload.phone_number,
                full_name: registerPayload.full_name,
                role: registerPayload.role,
                otp: otpValue,
            };
            console.log('REGISTER_BODY:', registerBody);

            this.requestTimeOut = setTimeout(() => {
                this.setState({
                    timeOut: true,
                });
                ShowSignUpError(translate('common.requestTimeOut'));
            }, commonConstant.REQUEST_TIME_OUT);

            this.props.registerAction(registerBody);
        } else if (loginPayload) {
            const loginBody = {
                phone_number: loginPayload.phone_number,
                otp: otpValue,
            };
            console.log('LOGIN_BODY:', loginBody);

            this.requestTimeOut = setTimeout(() => {
                this.setState({
                    timeOut: true,
                });
                ShowSignUpError(translate('common.requestTimeOut'));
            }, commonConstant.REQUEST_TIME_OUT);

            this.props.loginAction(loginBody);
        }
    }

    reSendOtp = () => {
        console.log('RESEND OTP');
        /* const { registerPayload } = this.props.navigation.state.params;
        console.log('REGISTER PAYLOAD', registerPayload);
        const getOtpPayload = {
            phone_number: registerPayload.phone_number,
        };
        console.log('GET OTP CODE WITH PHONE NUMBER:', getOtpPayload);
        this.props.reSendOtpAction(getOtpPayload); */
    }

    updateOtpValue = (latestText) => {
        console.log('UPDATE_LATEST_OTP_TEXT:', latestText);
        this.setState({
            otpValue: latestText,
        });
    }

    componentWillUnmount() {
        clearImmediate(this.countDown);
        console.log('Clear interval');
    }
    componentDidMount() {
        this.countDown = setInterval(() => {
            if (this.state.countDownTime == 0) {
                this.state.countDownTime = 0;
            } else {
                this.setState({ countDownTime: this.state.countDownTime - 1 });
            }
        }, 1000);
    }

    render() {
        const { userType, otpType } = this.props;
        const { registerModel } = this.props;
        const { loginModel } = this.props;
        const { reSendOtpModel } = this.props;
        let btnVerify = styles.OTPFormConfirmNormalUser,
            otpContent = translate('common.otpContentForLogin'),
            { modalVisible, timeOut } = this.state;
        //console.log('PHONE_NUMBER', this.state.phoneNumber);
        if (userType && userType === commonConstant.TECHNICIAN_TYPE) {
            btnVerify = styles.OTPFormConfirmTechinician;
        }
        if (otpType && otpType === commonConstant.OTP_SIGNUP_TYPE) {
            otpContent = translate('common.otpContentForSignUp');
        }
        if (!registerModel || registerModel.isLoading || !loginModel || loginModel.isLoading || !reSendOtpModel || reSendOtpModel.isLoading) {
            timeOut ? modalVisible = false : modalVisible = true;
        }
        return (
            <View style={styles.OTPFormContainer}>
                <ScrollView scrollEnabled={false} keyboardShouldPersistTaps={'handled'}>
                    <Text style={styles.OTPFormHeader}>{translate('common.otpHeader')}</Text>
                    <Text style={styles.OTPFormContent}>{otpContent}</Text>
                    <View style={styles.OTPFormDotContainer}><DotOtp updateOtpValue={this.updateOtpValue} otpValue={this.state.otpValue} /></View>
                    <View style={styles.OTPFormCountDownBlock}>
                        <Text style={styles.OTPFormCountDownTimeText}>
                            00:{this.state.countDownTime < 10 ? '0' + this.state.countDownTime : this.state.countDownTime}
                        </Text>
                        <TouchableOpacity activeOpacity={1} onPress={this.reSendOtp}>
                            <Text style={styles.OTPFormResendOTP}>{this.state.countDownTime == 0 ? translate('common.btnResendOtp') : ''}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView>
                    <TouchableOpacity activeOpacity={1} onPress={this.verifyOtp}>
                        <Text style={btnVerify}>{translate('common.btnConfirm')}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <LoadingOverlayCustom visible={modalVisible} processType={true}/>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    registerModel: state.registerUserReducer,
    loginModel: state.loginReducer,
    reSendOtpModel: state.reSendOtpReducer,
});

const mapDispatchToProps = {
    registerAction,
    loginAction,
    reSendOtpAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(OtpForm);
