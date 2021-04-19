/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    containerInput: {
        flexDirection: 'row',
    },
    titleLogin: {
        color: '#545454',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 30,
    },
    subTitleLogin: {
        color: '#000000',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 30,
        width: '68%',
    },
    itemCenter: {
        alignItems: 'center',
    },
    selectCode: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flagVn: {
        flex: 1,
    },
    countryCode: {
        flex: 0.5,
        paddingLeft: 3,
    },
    inputPhone: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        flex: 3,
        fontWeight: 'bold',
        fontSize: 16,
    },
});
