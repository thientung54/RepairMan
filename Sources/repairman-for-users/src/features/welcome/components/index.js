/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import LogoSvg from '../../../assets/svgIcon/logo';
import { styles } from './style';
import { stylesCommon } from '../../../style';

var _callFnNumber = 0;
class LogoScreen extends React.Component {
    static navigationOptions = {
    };
    handleButton = () => {
        console.log(++_callFnNumber, 'handleButton');
        const { navigate } = this.props.navigation;
        navigate('WelcomeScreen');
    }
    UNSAFE_componentWillMount() {
        setTimeout(this.handleButton, 1500);
    }
    render() {
        console.log(++_callFnNumber, '###### Render ######');
        return (
            <SafeAreaView style={[stylesCommon.container, styles.bgBlack]}>
                <StatusBar hidden={true} />
                <TouchableOpacity style={styles.containerView}
                    onPress={this.handleButton}>
                    <View style={[styles.containerView, styles.middleCenter]}>
                        <LogoSvg />
                    </View>
                </TouchableOpacity >
            </SafeAreaView >
        );
    }
}

export default LogoScreen;
