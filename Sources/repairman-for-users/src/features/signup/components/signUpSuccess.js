/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './style';
import { stylesCommon } from '../../../style';
import { translate } from '../../../locale/index';
import ButtonCustom from '../../../components/buttonCustom/index';
import SignUpSuccessSVG from '../../../assets/svgIcon/signUpSuccess';


class signUpSuccess extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerStyle: {
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
        headerLeft: null,
    };

    verfyAccount = () => {
        const { registerPayload } = this.props.navigation.state.params;
        console.log('Verfy Account');
        const { navigate } = this.props.navigation;
        navigate('AccVerificationStep1Screen', { registerPayload });
    }
    verifyLater = () => {
        console.log('Handle Verify Later');
        const { navigate } = this.props.navigation;
        navigate('LoginScreen');
    }
    render() {
        console.log('###### Render Sign Up Success Screen ######');
        return (
            <SafeAreaView style={[stylesCommon.container, stylesCommon.regular]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" hidden={false} />
                <View style={[styles.signUpSuccessVerifyContainerView]}>
                    <View style={[styles.signUpSuccessVerifyIconCenter, styles.signUpSuccessVerifyMrBottomStd]}><SignUpSuccessSVG /></View>
                    <Text style={[stylesCommon.bold, styles.signUpSuccessVerifyTitleWelcome]}>{translate('signUp.welcomeTechnician')}</Text>
                    <Text style={[stylesCommon.bold, styles.signUpSuccessVerifyTitleWelcome, styles.signUpSuccessVerifyMrBottomStd]}>{translate('signUp.beingForHomeTechnician')}</Text>
                    <ButtonCustom bgButton="bgYellow" colorText="txtBlack"
                        textButton={translate('common.btnVerifyAccount')} handleButtonCustom={this.verfyAccount} />
                    <TouchableOpacity activeOpacity={1} onPress={this.verifyLater}>
                        <Text style={styles.signUpSuccessVerifyLaterButton}>
                            {translate('signUp.btnVerifyAccountLater')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
export default signUpSuccess;
