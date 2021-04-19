/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React from 'react';
import { Text, View, Image } from 'react-native';

import LogoScreen from './features/welcome/components/index';
import WelcomeScreen from './features/welcome/components/welcome';
import LoginScreen from './features/login/components/index';
import SignUpScreen from '../src/features/signup/components/index';
import CustomerPolicyScreen from './features/signup/components/user/CustomerPolicy';
import TechnicianPolicyScreen from './features/signup/components/technician/technicianPolicy';
import UserVerifyOtpScreen from '../src/features/signup/components/user/verifyOtp';
import TechnicianVerifyOtpScreen from '../src/features/signup/components/technician/verifyOtp';
import LoginVerifyOtpScreen from '../src/features/login/components/verifyOtp';
import AccVerificationStep1Screen from './features/accVerification/components/accVerificationStep1';
import AccVerificationStep2Screen from './features/accVerification/components/accVerificationStep2';
import AccVerificationStep3Screen from './features/accVerification/components/accVerificationStep3';
import SignUpSuccessScreen from './features/signup/components/signUpSuccess';
import HomeScreen from './features/home/components/home';
import HistoryScreen from './features/history/components/history';
import SearchMapScreen from './features/searchMap/components/index';
import InboxScreen from './features/inbox/components/inbox';
import AccountScreen from './features/account/components/account';
import ServicesScreen from './features/services/components/index';

import HomeSVG from './assets/svgIcon/home';
import OrderSvg from './assets/svgIcon/order';
import InboxSvg from './assets/svgIcon/inbox';
import AccountSvg from './assets/svgIcon/account';
import { stylesCommon } from './style';


class IconMainTabs extends React.Component {
    render() {
        const { name } = this.props;
        let IconMenu;
        switch (name) {
            case 'Home':
                IconMenu = HomeSVG;
                break;
            case 'History':
                IconMenu = OrderSvg;
                break;
            case 'Inbox':
                IconMenu = InboxSvg;
                break;
            case 'Account':
                IconMenu = AccountSvg;
                break;
        }
        return (
            <IconMenu {...this.props} />
        );
    }
}

class IconWithBadge extends React.Component {
    render() {
        const { badgeCount } = this.props;
        return (
            <View style={stylesCommon.iconWithBadge}>
                <IconMainTabs {...this.props} />
                {badgeCount > 0 && (
                    <View style={stylesCommon.iconMainTabs}>
                        <Text style={stylesCommon.badgeCount}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName, badgeCount;
    switch (routeName) {
        case 'Home':
            iconName = 'Home';
            badgeCount = 0;
            break;
        case 'History':
            iconName = 'History';
            badgeCount = 0;
            break;
        case 'Inbox':
            iconName = 'Inbox';
            badgeCount = 3;
            break;
        case 'Account':
            iconName = 'Account';
            badgeCount = 0;
            break;
    }
    // You can return any component that you like here!
    return <IconWithBadge focused={focused} name={iconName} size={25} color={tintColor} badgeCount={badgeCount} />;
};

const MainTabs = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        History: {
            screen: HistoryScreen,
        },
        Inbox: {
            screen: InboxScreen,
        },
        Account: {
            screen: AccountScreen,
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: '#FFD43F',
            inactiveTintColor: '#9E9E9E',
            labelStyle: {
                fontSize: 11,
                fontFamily: 'Roboto-Medium',
                fontWeight: 'bold',
            }
        },
    }
);

const MainNavigator = createStackNavigator(
    {
        LogoScreen: {
            screen: LogoScreen,
            navigationOptions: {
                header: null, //only hide it header-top
            },
        },
        WelcomeScreen: { screen: WelcomeScreen },
        LoginScreen: { screen: LoginScreen },
        LoginVerifyOtpScreen: { screen: LoginVerifyOtpScreen },
        SignUpScreen: { screen: SignUpScreen },
        CustomerPolicyScreen: {screen: CustomerPolicyScreen},
        TechnicianPolicyScreen: {screen: TechnicianPolicyScreen},
        UserVerifyOtpScreen: { screen: UserVerifyOtpScreen },
        TechnicianVerifyOtpScreen: { screen: TechnicianVerifyOtpScreen },
        AccVerificationStep1Screen: { screen: AccVerificationStep1Screen },
        AccVerificationStep2Screen: { screen: AccVerificationStep2Screen },
        AccVerificationStep3Screen: { screen: AccVerificationStep3Screen },
        SignUpSuccessScreen: { screen: SignUpSuccessScreen },
        HomeScreen: {
            screen: MainTabs,
            navigationOptions: {
                header: null, //only hide it header-top
            },
        },
        ServicesScreen: { screen: ServicesScreen },
        SearchMapScreen: {
            screen: SearchMapScreen,
            navigationOptions: {
                headerTransparent: true,
                headerBackImage: <Image source={require('./assets/images/backArrow2.png')} />,
            },
        },
    },
    {
        initialRouteName: 'LogoScreen',
        //headerMode: 'none', //hide all header-top,
        headerLayoutPreset: 'center',
    }
);

const AppNavigation = createAppContainer(MainNavigator);
export default AppNavigation;
