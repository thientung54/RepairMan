/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    btnYellow: {
        alignItems: 'center',
        backgroundColor: '#FFD43F',
        padding: 10,
        borderRadius: 5,
    },
    btnBlack: {
        alignItems: 'center',
        backgroundColor: '#051B32',
        padding: 10,
        borderRadius: 5,
    },
    textYellow: {
        color: '#FFD43F',
    },
    textBlack: {
        color: '#051B32',
    },
    bgBlack: {
        backgroundColor: '#051B32',
    },

    //
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    userOption: {
        backgroundColor: '#FFD43F',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 40,
    },

    flexOption: {
        flex: 1,
    },

    userType: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        opacity: 0.3,
    },

    userActive: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 3,
        opacity: 1,
    },

    signupForm: {
        marginHorizontal: 16,
    },

    inputGroup: {
        position: 'relative',
    },

    inputName: {
        marginTop: 20,
        borderBottomColor: '#BBB',
        borderBottomWidth: 1,
        color: '#051B32',
        fontSize: 18,
        fontWeight: 'bold',
    },

    inputNameFocus: {
        marginTop: 20,
        borderBottomColor: '#FFD43F',
        borderBottomWidth: 2,
        color: '#051B32',
        fontSize: 18,
        fontWeight: 'bold',
    },

    labelName: {
        position: 'absolute',
        top: 35,
        left: 4,
        fontSize: 17,
        color: '#BBB',
        zIndex: -1,
    },

    labelNameFocus: {
        position: 'absolute',
        top: 10,
        left: 4,
        fontSize: 17,
        color: '#BBB',
    },

    inputCheckCircle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        right: 0,
        bottom: 10,
    },

    inputCheckCircleValid: {
        color: '#FFD43F',
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        right: 0,
        bottom: 10,
    },

    inputPhoneNumberGroup: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
    },

    inputPhoneNumber: {
        marginTop: 20,
        marginLeft: 10,
        borderBottomColor: '#BBB',
        borderBottomWidth: 1,
        color: '#051B32',
        fontSize: 18,
        flex: 1,
        fontWeight: 'bold',
    },

    inputPhoneNumberFocus: {
        marginTop: 20,
        marginLeft: 10,
        borderBottomColor: '#FFD43F',
        borderBottomWidth: 2,
        color: '#051B32',
        fontSize: 18,
        flex: 1,
        fontWeight: 'bold',
    },

    labelPhoneNumber: {
        position: 'absolute',
        top: 35,
        left: 104,
        fontSize: 17,
        color: '#BBB',
        zIndex: -1,
    },

    labelPhoneNumberFocus: {
        position: 'absolute',
        top: 10,
        left: 104,
        fontSize: 17,
        color: 'white',
    },

    informationText: {
        color: '#545454',
        fontSize: 14,
        marginTop: 25,
        marginBottom: 40,
    },

    textLink: {
        color: '#0064bd',
        fontSize: 14,
    },

    normalUserOTPFormContainer: {
        marginTop: 70,
        backgroundColor: 'red',
        flex: 1,
    },

    normalUserVerifyOTPContainer: {
        flex: 1,
    },


    signUpSuccessVerifyContainerView: {
        flex: 1,
    },

    signUpSuccessVerifyIconCenter: {
        alignItems: 'center',
    },

    signUpSuccessVerifyTitleWelcome: {
        color: '#545454',
        fontSize: 22,
        textAlign: 'center',
    },

    signUpSuccessVerifyMrBottomStd: {
        marginBottom: 25,
    },

    signUpSuccessVerifyLaterButton: {
        fontSize: 17,
        lineHeight: 20,
        color: '#9e9e9e',
        textAlign: 'center',
    },

    policyContent: {
        margin: 16,
        paddingTop: 15,
        color: '#333333',
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },

});
