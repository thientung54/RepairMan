/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, SafeAreaView, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { styles } from './style';
import { stylesCommon } from '../../../style';
import { translate } from '../../../locale/index';
import DocumentSvg from '../../../assets/svgIcon/document';
import DocCheckSvg from '../../../assets/svgIcon/docCheck';
import ButtonCustom from '../../../components/buttonCustom/index';
import LoadingOverlayCustom from '../../../components/loadingOverlayCustom/index';
import { accVerificationStep2Action } from '../actions/accVerificationStep2';
import { TransferError } from '../../../utilities/errors';
import { ShowErrorMessage, HideMessage } from '../../../utilities/showMessage';
import { commonConstant } from '../../../constants/index';
import { getAsyncStorage } from '../../../utilities/storage';

var _callFnNumber = 0,
    sourceData1, sourceData2, sourceData3,
    TOKEN_JWT,
    NoAvailableImg = '../../../assets/images/group2Copy2.png';
const options = {
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
class AccVerificationStep2Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            takeCount: 0,
            modalVisible: false,
            processType: false,
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
            shadowColor: 'transparent',
            elevation: 0,
        },
    });

    componentDidMount() {
        console.log(++_callFnNumber, 'ComponentDidMount');
    }

    async UNSAFE_componentWillMount() {
        TOKEN_JWT = await getAsyncStorage(commonConstant.AUTH_TOKEN);
    }


    requestAction = (nextProps) => {
        const { accVerificationStep2Model } = nextProps;
        console.log(++_callFnNumber, 'RequestAction', accVerificationStep2Model);
        return false;
    }

    responseAction = (nextProps) => {
        const { accVerificationStep2Model } = nextProps,
            { registerPayload } = this.props.navigation.state.params;
        let { modalVisible, actionAdd, takeCount, timer } = this.state;
        console.log(++_callFnNumber, 'ResponseAction', accVerificationStep2Model);
        if (actionAdd) {
            if (accVerificationStep2Model &&
                accVerificationStep2Model.responseData && accVerificationStep2Model.responseData.Success === true) {
                modalVisible = false;
                this.setState({
                    ...this.state,
                    modalVisible: modalVisible,
                });
                const { navigate } = this.props.navigation;
                navigate('AccVerificationStep3Screen', { registerPayload });
            }
            if ((accVerificationStep2Model && accVerificationStep2Model.isError)) {
                let errorMsg = TransferError(accVerificationStep2Model.responseData.status);
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
            if (takeCount === 0) {
                const { navigate } = this.props.navigation;
                navigate('AccVerificationStep3Screen', { registerPayload });
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { accVerificationStep2Model } = nextProps;
        //request action
        if (!accVerificationStep2Model || accVerificationStep2Model.isLoading) {
            this.requestAction(nextProps);
        }
        //response action
        if ((accVerificationStep2Model && !accVerificationStep2Model.isLoading)) {
            this.responseAction(nextProps);
        }
    }

    handleBtnContinue = () => {
        console.log(++_callFnNumber, 'handleBtnContinue');
        const { registerPayload } = this.props.navigation.state.params;
        let { actionAdd, takeCount } = this.state,
            var_content = [];
        if (sourceData1 && sourceData1.uri) {
            var_content.push(sourceData1.uri);
        }
        if (sourceData2 && sourceData2.uri) {
            var_content.push(sourceData2.uri);
        }
        if (sourceData3 && sourceData3.uri) {
            var_content.push(sourceData3.uri);
        }
        actionAdd = true;
        if (takeCount > 0) {
            let payload = {
                phone_number: registerPayload.phone_number,
                content: var_content,
                authToken: 'jwt ' + TOKEN_JWT,
            };
            this.props.accVerificationStep2Action(payload);
        }

        this.setState({
            actionAdd: actionAdd,
        });
    }

    showCamera = () => {
        let { takeCount } = this.state;
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
        if (takeCount < 3) {
            this.showCamera();
        }
    }

    componentWillUnMount() {
        let { timer } = this.state;
        timer !== undefined ? clearTimeout(timer) : null;
    }

    render() {
        console.log(++_callFnNumber, '###### Render Welcome Screen ######');
        let { takeCount, avatarSource, modalVisible, processType } = this.state;
        const { accVerificationStep2Model } = this.props;
        if (takeCount === 1 && avatarSource) {
            sourceData1 = avatarSource;
        }
        if (takeCount === 2 && avatarSource) {
            sourceData2 = avatarSource;
        }
        if (takeCount === 3 && avatarSource) {
            sourceData3 = avatarSource;
        }
        if ((accVerificationStep2Model && accVerificationStep2Model.isLoading)) {
            modalVisible = true;
            processType = true;
        }
        return (
            <SafeAreaView style={[stylesCommon.regular, styles.container]}>
                <StatusBar backgroundColor="#FFD43F" barStyle="dark-content" hidden={false} />
                <View style={[stylesCommon.dFlexRow, stylesCommon.shadowHeader]}>
                    <View style={[stylesCommon.progressBar, stylesCommon.step2]} />
                </View>
                <View style={styles.bgColorLWhite, stylesCommon.paddingLR}>
                    <Text style={[stylesCommon.medium, styles.textCenter, styles.fontSize18, styles.paddingTop30, styles.colorBrown, stylesCommon.mrBottomStd]}>2/3</Text>
                    <View style={stylesCommon.middleCenter}>
                        <Text
                            onPress={() => {
                                this.setModalVisible();
                            }}>
                            {
                                takeCount === 3 ?
                                    <DocCheckSvg />
                                    :
                                    <DocumentSvg />
                            }
                        </Text>
                    </View>
                    <Text style={[stylesCommon.medium, styles.textCenter, styles.fontSize22, styles.padding30, styles.colorBrown]}>{translate('accVerification.titleStep2')}</Text>
                    {
                        takeCount > 0 ?
                            takeCount > 1 ?
                                takeCount === 3 ?
                                    <View style={[stylesCommon.dFlexRow, stylesCommon.justifyContentCenter, stylesCommon.paddingB92]}>
                                        {
                                            sourceData1 &&
                                            <View style={[stylesCommon.flexItems]}>
                                                <Image resizeMode={'cover'}
                                                    style={[stylesCommon.photoVerifyAccount]} source={sourceData1} />
                                            </View>
                                        }
                                        {
                                            sourceData2 &&
                                            <View style={[stylesCommon.flexItems]}>
                                                <Image resizeMode={'cover'}
                                                    style={[stylesCommon.photoVerifyAccount]} source={sourceData2} />
                                            </View>
                                        }
                                        {
                                            sourceData3 &&
                                            <View style={[stylesCommon.flexItems]}>
                                                <Image resizeMode={'cover'}
                                                    style={[stylesCommon.photoVerifyAccount]} source={sourceData3} />
                                            </View>
                                        }
                                    </View>
                                    :
                                    <View style={[stylesCommon.dFlexRow, stylesCommon.justifyContentCenter, stylesCommon.paddingB92]}>
                                        {
                                            sourceData1 &&
                                            <View style={[stylesCommon.flexItems]}>
                                                <Image resizeMode={'cover'}
                                                    style={[stylesCommon.photoVerifyAccount]} source={sourceData1} />
                                            </View>
                                        }
                                        {
                                            sourceData2 &&
                                            <View style={[stylesCommon.flexItems]}>
                                                <Image resizeMode={'cover'}
                                                    style={[stylesCommon.photoVerifyAccount]} source={sourceData2} />
                                            </View>
                                        }
                                        <View style={[stylesCommon.flexItems]}>
                                            <Image resizeMode={'cover'}
                                                style={[stylesCommon.photoVerifyAccount]} source={require(NoAvailableImg)} />
                                        </View>
                                    </View>
                                :
                                <View style={[stylesCommon.dFlexRow, stylesCommon.justifyContentCenter, stylesCommon.paddingB92]}>
                                    {
                                        sourceData1 &&
                                        <View style={[stylesCommon.flexItems]}>
                                            <Image resizeMode={'cover'}
                                                style={[stylesCommon.photoVerifyAccount]} source={sourceData1} />
                                        </View>
                                    }
                                    <View style={[stylesCommon.flexItems]}>
                                        <Image resizeMode={'cover'}
                                            style={[stylesCommon.photoVerifyAccount]} source={require(NoAvailableImg)} />
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
                                <View style={[stylesCommon.flexItems]}>
                                    <Image resizeMode={'cover'}
                                        style={[stylesCommon.photoVerifyAccount]} source={require(NoAvailableImg)} />
                                </View>
                            </View>
                    }
                    <View>
                        <ButtonCustom bgButton="bgYellow" colorText="txtBlack"
                            textButton={translate('common.btnContinue')} handleButtonCustom={this.handleBtnContinue} />
                    </View>
                </View>
                <LoadingOverlayCustom visible={modalVisible} processType={processType} />
            </SafeAreaView >
        );
    }
}

const mapStateToProps = state => ({
    accVerificationStep2Model: state.accVerification2Reducer,
});

const mapDispatchToProps = {
    accVerificationStep2Action,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccVerificationStep2Screen);
