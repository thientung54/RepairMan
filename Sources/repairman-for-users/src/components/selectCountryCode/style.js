/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalDropDown: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 90,
        marginRight: 5,
    },
    codeSelected: {
        borderWidth: 1,
        borderColor: '#BBB',
        borderRadius: 2,
        paddingTop: 12,
        paddingBottom: 12,
        width: 90,
        textAlign: 'center',
    },
    rowCode: {
        fontSize: 18,
        padding: 5,
    },

    flag: {
        width: 24,
        height: 16,
    },

    rowLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
