import React from 'react';
import {translate} from '../../../locale/index';
import {Text, View} from 'react-native';

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = () => ({
    tabBarLabel: translate('common.tabHistory'),
  });
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>HistoryScreen!</Text>
      </View>
    );
  }
}
