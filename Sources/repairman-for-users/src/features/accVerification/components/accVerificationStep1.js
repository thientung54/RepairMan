/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, SafeAreaView, Text, Alert, Image, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { getAsyncStorage, setAsyncStorage } from '../../../utilities/storage';

import { styles } from './style';
import { stylesCommon } from '../../../style';
import { translate } from '../../../locale/index';
import CameraSvg from '../../../assets/svgIcon/camera';
import CameraCheckSvg from '../../../assets/svgIcon/cameraCheck';
import ButtonCustom from '../../../components/buttonCustom/index';
import { accVerificationStep1Action } from '../actions/accVerificationStep1';
import LoadingOverlayCustom from '../../../components/loadingOverlayCustom/index';
import { TransferError } from '../../../utilities/errors';
import { ShowErrorMessage, HideMessage } from '../../../utilities/showMessage';
import { commonConstant } from '../../../constants/index';

var _callFnNumber = 0,
    sourceData1, sourceData2,
    TOKEN_JWT,
    NoAvailableImg = '../../../assets/images/group2Copy2.png';

const options = {
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Example App',
                'message': 'Example App access to your location ',
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the location');
        } else {
            console.log('location permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
}
class AccVerificationStep1Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            takeCount: 0,
            modalVisible: false,
            processType: false,
            actionAdd: false,
            timer: null,
        };
    }

    static navigationOptions = () => ({
        title: translate('common.btnVerifyAccount'),
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#FFD43F',
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            elevation: 0,
        },
    });

    async UNSAFE_componentWillMount() {
        await requestLocationPermission();
        TOKEN_JWT = await getAsyncStorage(commonConstant.AUTH_TOKEN);
    }

    componentDidMount() {
        console.log(++_callFnNumber, 'ComponentDidMount');
    }

    requestAction = (nextProps) => {
        const { accVerificationStep1Model } = nextProps;
        console.log(++_callFnNumber, 'RequestAction', accVerificationStep1Model);
        return false;
    }

    responseAction = (nextProps) => {
        const { accVerificationStep1Model } = nextProps,
            { registerPayload } = this.props.navigation.state.params;
        let { modalVisible, actionAdd, timer } = this.state;
        console.log(++_callFnNumber, 'ResponseAction', accVerificationStep1Model);
        if (actionAdd) {
            if (accVerificationStep1Model &&
                accVerificationStep1Model.responseData && accVerificationStep1Model.responseData.Success === true) {
                modalVisible = false;
                this.setState({
                    ...this.state,
                    modalVisible: modalVisible,
                });
                const { navigate } = this.props.navigation;
                navigate('AccVerificationStep2Screen', { registerPayload });
            }
            if ((accVerificationStep1Model && accVerificationStep1Model.isError)) {
                let errorMsg = TransferError(accVerificationStep1Model.responseData.status);
                ShowErrorMessage(true, errorMsg);
                StatusBar.setBackgroundColor('#FF0000');
                StatusBar.setBarStyle('light-content');
                timer = setTimeout(function () {
                    HideMessage('error');
                }, 2200);
                this.setState({
                    ...this.state,
                    timer: timer,
                });
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { accVerificationStep1Model } = nextProps;
        //request action
        if (!accVerificationStep1Model || accVerificationStep1Model.isLoading) {
            this.requestAction(nextProps);
        }
        //response action
        if ((accVerificationStep1Model && !accVerificationStep1Model.isLoading)) {
            this.responseAction(nextProps);
        }
    }

    handleBtnContinue = () => {
        const { registerPayload } = this.props.navigation.state.params;
        let { actionAdd } = this.state;
        actionAdd = true;
        console.log(++_callFnNumber, 'handleBtnContinue');
        let payload = {
            phone_number: registerPayload.phone_number,
            front_side: sourceData1.uri,
            back_side: sourceData2.uri,
            authToken: 'jwt ' + TOKEN_JWT,
        };
        this.props.accVerificationStep1Action(payload);
        this.setState({
            actionAdd: actionAdd,
        });
    }

    showCamera = () => {
        let { takeCount } = this.state;
        console.log('aaa');
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // const source = { uri: response.uri };
                // You can also display the image using data:
                setAsyncStorage('AllowCamera', 'Allow');
                const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source,
                    takeCount: ++takeCount,
                });
            }
        });
    }

    setModalVisible() {
        const { takeCount } = this.state;

        getAsyncStorage('AllowCamera').then((AllowCamera) => {
            if (AllowCamera !== 'Allow') {
                Alert.alert(
                    translate('accVerification.alertTitle'),
                    [
                        {
                            text: translate('common.btnNotAllow'),
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: translate('common.btnAllow'), onPress: () => { this.showCamera(); } },
                    ],
                );
            } else {
                if (takeCount < 2) {
                    this.showCamera();
                }
            }
        });
    }

    componentWillUnMount() {
        let { timer } = this.state;
        timer !== undefined ? clearTimeout(timer) : null;
    }

    render() {
        console.log(++_callFnNumber, '###### Render Welcome Screen ######');
        let { takeCount, avatarSource, modalVisible, processType } = this.state;
        const { accVerificationStep1Model } = this.props;
        if (takeCount === 1 && avatarSource) {
            sourceData1 = avatarSource;
            console.log('takeCount: ', takeCount);
        }
        if (takeCount === 2 && avatarSource) {
            sourceData2 = avatarSource;
            console.log('takeCount: ', takeCount);
        }
        // debugger;
        if ((accVerificationStep1Model && accVerificationStep1Model.isLoading)) {
            modalVisible = true;
            processType = true;
        }
        return (
            <SafeAreaView style={[stylesCommon.regular, styles.container]}>
                <StatusBar backgroundColor="#FFD43F" barStyle="dark-content" hidden={false} />
                <View style={[stylesCommon.dFlexRow, stylesCommon.shadowHeader]}>
                    <View style={[stylesCommon.progressBar, stylesCommon.step1]} />
                </View>
                <View style={styles.bgColorLWhite, stylesCommon.paddingLR}>
                    <Text style={[stylesCommon.medium, styles.textCenter, styles.fontSize18, styles.paddingTop30, styles.colorBrown, stylesCommon.mrBottomStd]}>1/3</Text>
                    <View style={stylesCommon.middleCenter}>
                        <Text
                            onPress={() => {
                                this.setModalVisible();
                            }}>
                            {
                                takeCount === 2 ?
                                    <CameraCheckSvg />
                                    :
                                    <CameraSvg />
                            }
                        </Text>
                    </View>
                    <Text style={[stylesCommon.medium, styles.textCenter, styles.fontSize22, styles.padding30, styles.colorBrown]}>{translate('accVerification.titleStep1')}</Text>
                    {
                        takeCount > 0 ?
                            takeCount === 2 ?
                                <View style={[stylesCommon.dFlexRow, stylesCommon.justifyContentCenter, stylesCommon.paddingB92]}>
                                    <View style={[stylesCommon.flexItems]}>
                                        <Image resizeMode={'cover'}
                                            style={[stylesCommon.photoVerifyAccount]} source={sourceData1} />
                                    </View>
                                    <View style={[stylesCommon.flexItems]}>
                                        <Image resizeMode={'cover'}
                                            style={[stylesCommon.photoVerifyAccount]} source={sourceData2} />
                                    </View>
                                </View>
                                :
                                <View style={[stylesCommon.dFlexRow, stylesCommon.justifyContentCenter, stylesCommon.paddingB92]}>
                                    <View style={[stylesCommon.flexItems]}>
                                        <Image resizeMode={'cover'}
                                            style={[stylesCommon.photoVerifyAccount]} source={sourceData1} />
                                    </View>
                                    <View style={[stylesCommon.flexItems]}>
                                        <Image resizeMode={'cover'}
                                            style={[stylesCommon.photoVerifyAccount]} source={require(NoAvailableImg)} />
                                    </View>
                                </View>
                            :
                            <View style={[stylesCommon.dFlexRow, stylesCommon.justifyContentCenter, stylesCommon.paddingB92]}>
                                <View style={[stylesCommon.flexItems]}>
                                    <Image resizeMode={'cover'}
                                        style={[stylesCommon.photoVerifyAccount]} source={require(NoAvailableImg)} />
                                </View>
                                <View style={[stylesCommon.flexItems]}>
                                    <Image resizeMode={'cover'}
                                        style={[stylesCommon.photoVerifyAccount]} source={require(NoAvailableImg)} />
                                </View>
                            </View>
                    }
                    <View>
                        <ButtonCustom disabledVal={
                            takeCount === 2 ?
                                false
                                :
                                true
                        } bgButton="bgYellow" colorText="txtBlack"
                            textButton={translate('common.btnContinue')} handleButtonCustom={this.handleBtnContinue} />
                    </View>
                </View>
                <LoadingOverlayCustom visible={modalVisible} processType={processType} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    accVerificationStep1Model: state.accVerification1Reducer,
});

const mapDispatchToProps = {
    accVerificationStep1Action,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccVerificationStep1Screen);
