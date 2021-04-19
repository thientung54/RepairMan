/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { stylesCommon } from '../../../src/style';

class ButtonCustom extends React.Component {
    render() {
        const { bgButton, colorText, textButton, disabledVal } = this.props;
        return (
            <TouchableOpacity disabled={disabledVal || false} style={disabledVal ? [styles.bgGrey,styles.btnCustom, styles.mrBottom19] : [styles.btnCustom, styles.mrBottom19, bgButton === 'bgBlack' ? styles.bgBlack : styles.bgYellow]} onPress={this.props.handleButtonCustom} >
                <Text style={disabledVal ? [styles.txtGreyishBrown,styles.txtButton, stylesCommon.medium] : colorText === 'txtBlack' ? [styles.txtBlack,styles.txtButton, stylesCommon.medium] : [styles.txtYellow,styles.txtButton, stylesCommon.medium]}>{textButton}</Text>
            </TouchableOpacity >
        );
    }
}
export default ButtonCustom;
