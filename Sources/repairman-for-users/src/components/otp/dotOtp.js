/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './style';

class DotOtp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const otpValue = this.props.otpValue;
        let firstDot  = otpValue.length > 0 ? styles.DotOTPHaveValue : styles.DotOTP;
        let secondDot = otpValue.length > 1 ? styles.DotOTPHaveValue : styles.DotOTP;
        let thirdDot  = otpValue.length > 2 ? styles.DotOTPHaveValue : styles.DotOTP;
        let fourthDot = otpValue.length > 3 ? styles.DotOTPHaveValue : styles.DotOTP;
        let fivethDot = otpValue.length > 4 ? styles.DotOTPHaveValue : styles.DotOTP;
        let sixthDot  = otpValue.length > 5 ? styles.DotOTPHaveValue : styles.DotOTP;
        return (
            <View style={styles.DotOTPContainer}>
                <View style={firstDot}  />
                <View style={secondDot} />
                <View style={thirdDot}  />
                <View style={fourthDot} />
                <View style={fivethDot} />
                <View style={sixthDot} />
                <TextInput
                    style={styles.DotOTPInput}
                    caretHidden={true}
                    maxLength={6}
                    onChangeText={this.props.updateOtpValue}
                    autoFocus
                    keyboardType={'numeric'}
                >
                    {otpValue}
                </TextInput>
            </View>
        );
    }
}

export default DotOtp;
