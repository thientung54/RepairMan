/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const fontFamily = {
    medium: 'Roboto-Medium',
};
export const stylesCommon = StyleSheet.create({
    //FONT FAMILY
    blackRegular: {
        fontFamily: 'Roboto-Black',
    },
    blackItalic: {
        fontFamily: 'Roboto-BlackItalic',
    },
    bold: {
        fontFamily: 'Roboto-Bold',
    },
    boldItalic: {
        fontFamily: 'Roboto-BoldItalic',
    },
    italic: {
        fontFamily: 'Roboto-Italic',
    },
    light: {
        fontFamily: 'Roboto-Light',
    },
    lightItalic: {
        fontFamily: 'Roboto-LightItalic',
    },
    medium: {
        fontFamily: 'Roboto-Medium',
    },
    mediumItalic: {
        fontFamily: 'Roboto-MediumItalic',
    },
    regular: {
        fontFamily: 'Roboto-Regular',
    },
    thin: {
        fontFamily: 'Roboto-Thin',
    },
    thinItalic: {
        fontFamily: 'Roboto-ThinItalic',
    },
    //MARGIN
    mrBottomStd: {
        marginBottom: 25,
    },
    mrBottomStd2x: {
        marginBottom: 50,
    },
    paddingLR: {
        padding: 25,
    },
    //CONTAINER
    container: {
        flex: 1,
        padding: 10,
    },
    containerFull: {
        flex: 1,
    },
    // Text Link
    textLink: {
        color: '#0064bd',
        fontSize: 14,
    },
    middleCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dFlexWRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    dFlexRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        display: 'flex',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between',
    },
    flexItems: {
        backgroundColor: '#D8D8D8',
        padding: 16,
        marginLeft: 6,
        marginRight: 6,
    },
    paddingB92: {
        paddingBottom: 92,
    },
    photoVerifyAccount: {
        width: 71,
        height: 73,
    },
    photoLoading: {
        width: 167,
        height: 167,
    },
    iconMainTabs: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'red',
        borderRadius: 6,
        width: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeCount: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    iconWithBadge: {
        width: 24,
        height: 24,
    },
    shadowHeader: {
        shadowColor: '#747474',
        shadowOpacity: 0.5,
        elevation: 5,
        backgroundColor: '#FFD43F',
    },
    progressBar: {
        backgroundColor: '#061423',
        height: 3,
    },
    step1: {
        flex: 0.33,
    },
    step2: {
        flex: 0.66,
    },
    step3: {
        flex: 1,
    },
    colorWhite: {
        color: '#ffffff',
    },
    colorBlack: {
        color: 'rgb(74, 74, 74)',
    },
    errorsText: {
        color: '#FF0000',
        fontSize: 12,
        textAlign: 'right',
        paddingTop: 5,
        fontFamily: 'Roboto-Medium',
    },
});
