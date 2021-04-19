/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { translate } from '../../../../locale/index';
import { styles } from '../style';
import { commonConstant } from '../../../../constants/index';
import OtpForm from '../../../../components/otp/index';

class VerifyOTP extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = () => ({
        title: translate('common.typeTechnician'),
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
    render() {
        return (
            <View style={styles.normalUserVerifyOTPContainer}>
                <OtpForm {...this.props} userType={commonConstant.TECHNICIAN_TYPE} otpType={commonConstant.OTP_SIGNUP_TYPE} />
            </View>
        );
    }
}
export default VerifyOTP;
