/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StatusBar } from 'react-native';
import { styles } from '../style';
import { commonConstant } from '../../../../constants/index';
import OtpForm from '../../../../components/otp/index';

class VerifyOTP extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = () => ({
        headerStyle: {
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
    });
    render() {
        return (
            <View style={styles.normalUserVerifyOTPContainer}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" hidden={false} />
                <OtpForm {...this.props} userType={commonConstant.USER_TYPE} otpType={commonConstant.OTP_SIGNUP_TYPE} />
            </View>
        );
    }
}
export default VerifyOTP;
