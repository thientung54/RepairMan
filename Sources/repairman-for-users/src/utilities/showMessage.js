import {translate} from '../locale/index';
import {StatusBar} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';
export const ShowErrorMessage = (msgType, msgText) => {
  let varMessage = translate('common.messageValidateTitle'),
    varDescription = translate('common.messageValidateDesc');
  if (msgType) {
    varMessage = translate('common.messageProcessDataTitle');
    varDescription = msgText;
  }
  showMessage({
    message: varMessage,
    description: varDescription,
    type: 'danger',
    autoHide: false,
    icon: {icon: 'auto', position: 'right'},
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    onPress: () => {
      StatusBar.setBackgroundColor('#FFD43F');
      StatusBar.setBarStyle('dark-content');
    },
  });
};
export const ShowSuccessMessage = msgText => {
  let varMessage = translate('common.messageValidateTitle');
  showMessage({
    message: varMessage,
    description: msgText,
    type: 'success',
    autoHide: false,
    icon: {icon: 'auto', position: 'right'},
    backgroundColor: '#5CB85C',
    color: '#FFFFFF',
    onPress: () => {
      StatusBar.setBackgroundColor('#5CB85C');
      StatusBar.setBarStyle('dark-content');
    },
  });
};
export const ShowWarningMessage = msgText => {
  let varMessage = translate('common.messageValidateTitle');
  showMessage({
    message: varMessage,
    description: msgText,
    type: 'success',
    autoHide: false,
    icon: {icon: 'auto', position: 'right'},
    backgroundColor: '#F0AD4E',
    color: '#FFFFFF',
    onPress: () => {
      StatusBar.setBackgroundColor('#F0AD4E');
      StatusBar.setBarStyle('dark-content');
    },
  });
};
export const ShowSignUpError = (msgTitel, msgSubtitle) => {
  showMessage({
    message: msgTitel,
    description: msgSubtitle ? msgSubtitle : '',
    type: 'danger',
    autoHide: false,
    icon: {icon: 'auto', position: 'right'},
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    onPress: () => {
      StatusBar.setBackgroundColor('#F0AD4E');
      StatusBar.setBarStyle('dark-content');
    },
  });
};
export const HideMessage = msgType => {
  hideMessage();
  if (msgType === 'error') {
    StatusBar.setBackgroundColor('#FFD43F');
    StatusBar.setBarStyle('dark-content');
  }
  if (msgType === 'warning') {
    StatusBar.setBackgroundColor('#F0AD4E');
    StatusBar.setBarStyle('dark-content');
  }
  if (msgType === 'success') {
    StatusBar.setBackgroundColor('#5CB85C');
    StatusBar.setBarStyle('dark-content');
  }
};
