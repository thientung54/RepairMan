/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    DotOTPContainer: {
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
    },

    DotOTP: {
        width: 12,
        height: 12,
        backgroundColor: '#9e9e9e',
        borderRadius: 12,
        marginHorizontal: 14,
    },

    DotOTPHaveValue: {
        width: 12,
        height: 12,
        backgroundColor: '#FFD43F',
        borderRadius: 50,
        marginHorizontal: 14,
    },

    DotOTPInput: {
        color: 'white',
        textAlign: 'center',
        height: 10,
        fontSize: 1,
        position: 'absolute',
        width: 230,
        right: 0,
    },

    OTPFormContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },

    OTPFormHeader: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 42,
    },

    OTPFormContent: {
        fontSize: 17,
        marginTop: 8,
        marginHorizontal: 56,
        textAlign: 'center',
    },

    OTPFormDotContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 75,
    },

    OTPFormCountDownBlock: {
        flex: 1,
        alignItems: 'center',
    },

    OTPFormCountDownTimeText: {
        color: '#4e4e4e',
        marginTop: 40,
        fontStyle: 'italic',
    },

    OTPFormResendOTP: {
        marginTop: 40,
        color: '#0064bd',
        textAlign: 'center',
    },

    OTPFormConfirmNormalUser: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 15,
        color: '#FFD43F',
        backgroundColor: '#051B32',
    },

    OTPFormConfirmTechinician: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 15,
        color: '#051B32',
        backgroundColor: '#FFD43F',
    },
});
