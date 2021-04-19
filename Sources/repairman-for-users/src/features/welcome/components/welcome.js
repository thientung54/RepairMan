/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, Text, StatusBar } from 'react-native';
import WelcomeSvg from '../../../assets/svgIcon/welcome';
import { styles } from './style';
import { stylesCommon } from '../../../style';
import { translate } from '../../../locale/index';
import ButtonCustom from '../../../components/buttonCustom/index';

var _callFnNumber = 0;
class WelcomeScreen extends React.Component {
    static navigationOptions = {
        //title: 'WelcomeScreen',
        headerStyle: {
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
    };
    handleBtnLogin = () => {
        console.log(++_callFnNumber, 'handleBtnLogin');
        const { navigate } = this.props.navigation;
        navigate('LoginScreen');
    }
    handleBtnRegister = () => {
        console.log(++_callFnNumber, 'handleBtnRegister');
        const { navigate } = this.props.navigation;
        navigate('SignUpScreen');
    }
    render() {
        console.log(++_callFnNumber, '###### Render Welcome Screen ######');
        return (
            <SafeAreaView style={[stylesCommon.container, stylesCommon.regular]}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" hidden={false} />
                <View style={[styles.containerView]}>
                    <View style={[styles.iconCenter, styles.mrBottomStd]}><WelcomeSvg /></View>
                    <Text style={[stylesCommon.bold, styles.titleWelcome]}>{translate('welcome.title')}</Text>
                    <Text style={[styles.subTitleWelcome, styles.mrBottomStd]}>{translate('welcome.subTitle')}</Text>
                    <ButtonCustom bgButton="bgBlack" colorText="txtYellow"
                        textButton={translate('common.btnLogin')} handleButtonCustom={this.handleBtnLogin} />
                    <ButtonCustom bgButton="bgYellow" colorText="txtBlack"
                        textButton={translate('common.btnRegister')} handleButtonCustom={this.handleBtnRegister} />
                </View>
            </SafeAreaView>
        );
    }
}

export default WelcomeScreen;
