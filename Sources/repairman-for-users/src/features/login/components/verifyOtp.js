/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { translate } from '../../../locale/index';
import { styles } from './style';
import { commonConstant } from '../../../constants/index';
import OtpForm from '../../../components/otp/index';

class VerifyOTP extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = () => ({
        /* title: translate('login.title'),
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#FFD43F',
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        }, */
    });
    render() {
        return (
            <View style={styles.containerView}>
                <OtpForm {...this.props} otpType={commonConstant.OTP_LOGIN_TYPE} />
            </View>
        );
    }
}
export default VerifyOTP;
