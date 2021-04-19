import React from 'react';
import {translate} from '../../../locale/index';
import {Text, View} from 'react-native';
import ButtonCustom from '../../../components/buttonCustom/index';

export default class AccountScreen extends React.Component {
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
  };
  static navigationOptions = () => ({
    tabBarLabel: translate('common.tabAccount'),
  });
  handleBtnLogout = () => {
    const {navigate} = this.props.navigation;
    navigate('LogoScreen');
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>AccountScreen!</Text>
        <ButtonCustom
          bgButton="bgBlack"
          colorText="txtYellow"
          textButton={'Logout'}
          handleButtonCustom={this.handleBtnLogout}
        />
      </View>
    );
  }
}
