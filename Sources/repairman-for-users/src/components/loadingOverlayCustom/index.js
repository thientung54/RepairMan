import React from 'react';
import {View, Image, Text} from 'react-native';
import OrientationLoadingOverlay from './orientationLoadingOverlay';

import {translate} from '../../locale/index';
import {styles} from './style';
import {stylesCommon} from '../../../src/style';

class LoadingOverlayCustom extends React.Component {
  render() {
    const {visible, processType} = this.props;
    return (
      <OrientationLoadingOverlay visible={visible}>
        <View>
          <Image
            style={[stylesCommon.photoLoading]}
            source={require('../../assets/images/loading.gif')}
          />
        </View>
        <View>
          <Text
            style={[
              styles.textCenter,
              styles.fontSize18,
              styles.paddingTop4,
              stylesCommon.colorBlack,
              stylesCommon.mrBottomStd,
            ]}>
            {processType === true
              ? translate('common.processingSpinner')
              : translate('common.loadingSpinner')}
          </Text>
        </View>
      </OrientationLoadingOverlay>
    );
  }
}
export default LoadingOverlayCustom;
