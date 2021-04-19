/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';

import {styles} from './style';

class ButtonRadioCustom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkListOption: 0
        }
        this.props.callBackSelectedVal(this.state.checkListOption);
    }
    setSelectedOption = (checkListOption) => {
        //console.log('checkListOption: ',checkListOption);
        this.setState({
            checkListOption,
        });
        this.props.callBackSelectedVal(checkListOption);
    }

    renderOption = (option, selected, onSelect, index) => {
        var style;
        var checkMark;

        if (index > 0) {
            style = [styles.baseStyle, styles.extendStyle];
        } else {
            style = styles.baseStyle;
        }

        if (selected) {
            checkMark = <FontAwesome icon={SolidIcons.check} style={styles.RadioStyle} />
        }

        return (
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
                <View style={style}>
                    <Text style={styles.textStyle}>{option}</Text>
                    {checkMark}
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderContainer = (options) => {
        return (
            <View>
                {options}
            </View>
        );
    }
    render() {
        const { cityItems } = this.props;
        return (
            <View>
                <RadioButtons
                    options={cityItems}
                    onSelection={this.setSelectedOption}
                    selectedOption={this.state.checkListOption}
                    renderOption={this.renderOption}
                    renderContainer={this.renderContainer}
                    selectedIndex={this.state.checkListOption}
                />
                {/* <Text style={{margin: 20,}}>Selected accent: {this.state.checkListOption || 'none'}</Text> */}
            </View>
        );
    }
}
export default ButtonRadioCustom;
