/* eslint-disable prettier/prettier */
import React from 'react';
import { translate } from '../../locale/index';
import { Text, View, Image } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import countryCode from '../../constants/countryCode.json';
import { styles } from './style';

class SelectCountryCode extends React.Component {
    constructor(props) {
        super(props);
    }

    renderText = (rowData) => {
        const { code } = rowData;
        let flag = '';
        switch (rowData.name) {
            case 'Vietnam':
                flag = require('../../assets/images/countryFlag/Vietnam.png');
                break;
            case 'Malaysia':
                flag = require('../../assets/images/countryFlag/Malaysia.png');
                break;
            case 'Thailand':
                flag = require('../../assets/images/countryFlag/Thailand.png');
                break;
            case 'Laos':
                flag = require('../../assets/images/countryFlag/Laos.png');
                break;
            case 'Cambodia':
                flag = require('../../assets/images/countryFlag/Cambodia.png');
                break;
        }
        this.props.getCountryCode(code);
        return (
            <Text>
                <Image
                    style={styles.flag}
                    source={flag}
                />
                <Text>{`   ${code}`}</Text>
            </Text>
        );
    }
    renderCountry = (rowData, rowID, highlighted) => {
        let flag = '';
        switch (rowData.name) {
            case 'Vietnam':
                flag = require('../../assets/images/countryFlag/Vietnam.png');
                break;
            case 'Malaysia':
                flag = require('../../assets/images/countryFlag/Malaysia.png');
                break;
            case 'Thailand':
                flag = require('../../assets/images/countryFlag/Thailand.png');
                break;
            case 'Laos':
                flag = require('../../assets/images/countryFlag/Laos.png');
                break;
            case 'Cambodia':
                flag = require('../../assets/images/countryFlag/Cambodia.png');
                break;
        }
        return (
            <View style={styles.rowLayout}>
                <Image
                    style={styles.flag}
                    source={flag}
                />
                <Text style={styles.rowCode}>
                    {`${rowData.name} (${rowData.code})`}
                </Text>
            </View>
        );
    }
    getDefaultCode = () => {
        const defaultCode = require('../../assets/images/countryFlag/Vietnam.png');
        const code = countryCode[0].code;
        return (
            <Text>
                <Image
                    style={styles.flag}
                    source={defaultCode}
                />
                <Text>{`   ${code}`}</Text>
            </Text>
        );
    }
    render() {
        return (
            <ModalDropdown
                style={styles.modalDropDown}
                options={countryCode}
                defaultValue={this.getDefaultCode()}
                textStyle={styles.codeSelected}
                renderButtonText={this.renderText}
                renderRow={this.renderCountry}
            />
        );
    }
}
export default SelectCountryCode;
