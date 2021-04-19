/* eslint-disable prettier/prettier */
import React from 'react';
import { translate } from '../../../locale/index';
import { View, SafeAreaView, Text, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './style';
import UserSignUpForm from './user/signUpForm';
import TechnicianSignUpForm from './technician/signUpForm';
import { commonConstant } from '../../../constants/index';

class UserSignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchUser: commonConstant.USER_TYPE,
        };
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FFD43F',
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
    };


    changeToNormalUser = () => {
        this.setState({ switchUser: commonConstant.USER_TYPE });
    }
    changeToEngineerUser = () => {
        this.setState({ switchUser: commonConstant.TECHNICIAN_TYPE });
    }
    renderSignUpForm = () => {
        if (this.state.switchUser === commonConstant.USER_TYPE) {
            return <UserSignUpForm {...this.props} />;
        } else {
            return <TechnicianSignUpForm {...this.props} />;
        }
    }

    render() {
        console.log('###### Render Sign Up Index And',this.state.switchUser,'######');
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#FFD43F" barStyle="dark-content" hidden={false} />
                <View style={styles.userOption}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.flexOption} onPress={this.changeToNormalUser}>
                        <Text style={this.state.switchUser === commonConstant.USER_TYPE ? styles.userActive : styles.userType} >
                            {translate('common.typeUser')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.flexOption} onPress={this.changeToEngineerUser}>
                        <Text style={this.state.switchUser === commonConstant.TECHNICIAN_TYPE ? styles.userActive : styles.userType} >
                            {translate('common.typeTechnician')}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupForm}>
                    {this.renderSignUpForm()}
                </View>
            </SafeAreaView>
        );
    }
}

export default UserSignupScreen;
