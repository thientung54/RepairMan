/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import * as RNLocalize from 'react-native-localize';
import configureStore from './src/store/index';
import setI18nConfig from './src/locale/index';
import AppNavigation from './src/index';
import FlashMessage from 'react-native-flash-message';
import { updateFocus } from '@patwoz/react-navigation-is-focused-hoc';

const store = configureStore();
//const App: () => React$Node = () => {
class App extends React.Component {
  constructor(props) {
    super(props);
    setI18nConfig(); // set initial config
  }
  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }
  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }
  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
  render() {
    return (
      <Provider store={store}>
        {/* <AppNavigation /> */}
        <AppNavigation onNavigationStateChange={(prevState, currentState) => {
            // update HOC state
            updateFocus(currentState);
          }}/>
        {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
        <FlashMessage position="top" />
      </Provider>
    );
  }
}

export default App;
