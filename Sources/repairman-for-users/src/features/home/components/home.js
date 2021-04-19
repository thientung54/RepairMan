/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { translate } from '../../../locale/index';
import { View, SafeAreaView, Text, ScrollView, StatusBar, Linking, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../../components/sliderEntry/styles/sliderEntry.style';
import SliderEntry from '../../../components/sliderEntry/index';
import PropTypes from 'prop-types';
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc';

import { styles } from './style';
import { stylesCommon } from '../../../style';
import { getAsyncStorage } from '../../../utilities/storage';
import API_SERVICES from '../../../store/services';
import { commonConstant } from '../../../constants';
import IndexStyles from '../../../components/sliderEntry/styles/index.style';
import FixElectricSVG from '../../../assets/svgIcon/fix_electric';
import FixWaterSVG from '../../../assets/svgIcon/fix_water';
import FixElectricEquipmentSVG from '../../../assets/svgIcon/fix_electric_equipment';
import FixInternetSVG from '../../../assets/svgIcon/fix_internet';
import FixCameraSVG from '../../../assets/svgIcon/fix_camera';
import MoreSVG from '../../../assets/svgIcon/more';
import EntriesData from '../../../constants/entries.json';

const SLIDER_1_FIRST_ITEM = 0,
  icon_pro = '../../../assets/images/icon_promotion.png',
  var_entries = EntriesData;
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      entries: var_entries,
    };
  }

  setStatusBar = () => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('#FFD43F');
    StatusBar.setBarStyle('dark-content');
  }

  static navigationOptions = () => ({
    tabBarLabel: translate('common.tabHome'),
  });

  renderLog = () => {
    getAsyncStorage(commonConstant.AUTH_TOKEN).then((authToken) => {
      console.log('HEADERS of HomeScreen: ', API_SERVICES.HEADERS(authToken));
    });
  }
  _renderItem = ({ item, index }) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }
  redirectServiceScreen() {
    const { navigate } = this.props.navigation;
    navigate('ServicesScreen');
  }
  redirectMapSearchScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('SearchMapScreen');
  }

  static propTypes = {
    isFocused: PropTypes.bool.isRequired,
    focusedRouteKey: PropTypes.string.isRequired,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // screen enter (refresh data, update ui ...)
      this.setStatusBar();
    }
    if (this.props.isFocused && !nextProps.isFocused) {
      // screen exit
    }
  }

  shouldComponentUpdate(nextProps) {
    // Update only once after the screen disappears
    if (this.props.isFocused && !nextProps.isFocused) {
      return true;
    }

    // Don't update if the screen is not focused
    if (!this.props.isFocused && !nextProps.isFocused) {
      return false;
    }

    // Update the screen if its re-enter
    return !this.props.isFocused && nextProps.isFocused;
  }

  render() {
    this.renderLog();
    const { entries, slider1ActiveSlide } = this.state;
    return (
      <SafeAreaView
        style={[stylesCommon.regular, styles.homeWrap, styles.container]}>
        <StatusBar backgroundColor="#FFD43F" barStyle="dark-content" hidden={false} />
        <ScrollView>
          <Image source={require('../../../assets/images/top_background.png')} style={[styles.imageBg]} />
          <View style={[stylesCommon.dFlexWRow]}>
            <View style={[styles.width60]}>
              <Text style={[stylesCommon.medium, styles.welcomeTitle]}>{translate('home.GreetingText')} ABCD!</Text>
              <Text style={[stylesCommon.bold, styles.whatHelpTitle]}>{translate('home.HelpText')}</Text>
            </View>
            <View style={[styles.width40, stylesCommon.middleCenter, styles.paddingTop10]}>
              <Image source={require('../../../assets/images/logo_white.png')} resizeMode={'contain'} />
            </View>
          </View>
          <View style={{ marginHorizontal: 16 }}>
            <View style={[styles.serviceSection, stylesCommon.dFlexWRow]}>
              <View style={[styles.width33, styles.serviceItem]}>
                <TouchableOpacity style={[styles.ImgService]} activeOpacity={1} onPress={() => { this.redirectMapSearchScreen(); }}>
                  <FixElectricSVG />
                </TouchableOpacity>
                <Text style={[styles.serviceTxt]} onPress={() => { this.redirectMapSearchScreen(); }}>{translate('home.ElecRepairTxt')}</Text>
              </View>
              <View style={[styles.width33, styles.serviceItem]}>
                <View style={[styles.ImgService]}><FixWaterSVG /></View>
                <Text style={[styles.serviceTxt]}>{translate('home.WaterRepairTxt')}</Text>
              </View>
              <View style={[styles.width33, styles.serviceItem]}>
                <View style={[styles.ImgService]}><FixElectricEquipmentSVG /></View>
                <Text style={[styles.serviceTxt]}>{translate('home.RepairOfEUTxt')}</Text>
              </View>
              <View style={[styles.width33, styles.serviceItem]}>
                <View style={[styles.ImgService]}><FixInternetSVG /></View>
                <Text style={[styles.serviceTxt]}>{translate('home.FixInternetTxt')}</Text>
              </View>
              <View style={[styles.width33, styles.serviceItem]}>
                <View style={[styles.ImgService]}><FixCameraSVG /></View>
                <Text style={[styles.serviceTxt]}>{translate('home.FixCameraTxt')}</Text>
              </View>
              <View style={[styles.width33, styles.serviceItem]}>
                <TouchableOpacity style={[styles.ImgService]} activeOpacity={1} onPress={() => { this.redirectServiceScreen(); }}>
                  <MoreSVG />
                </TouchableOpacity>
                <Text style={[styles.serviceTxt]} onPress={() => { this.redirectServiceScreen(); }}>{translate('home.More')}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.paddingLR16, stylesCommon.dFlexRow, stylesCommon.justifyContentSpaceBetween, styles.marginT36]}>
            <View style={[stylesCommon.medium, styles.promotionTitle, stylesCommon.dFlexRow]}>
              <Image style={styles.promIcon} resizeMode={'contain'} source={require(icon_pro)} />
              <Text>{translate('home.PromotionTitle')}</Text>
            </View>
            <Text style={styles.moreLink} onPress={() => { Linking.openURL('http://google.com'); }}>
              {translate('home.MoreLink')}
            </Text>
          </View>
          <Carousel
            // eslint-disable-next-line no-return-assign
            ref={c => this._slider1Ref = c}
            data={entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            enableMomentum={true}
            activeSlideAlignment={'start'}
            containerCustomStyle={IndexStyles.slider}
            contentContainerCustomStyle={IndexStyles.sliderContentContainer}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
            activeAnimationType={'spring'}
            loop={true}
          />
          <Pagination
            dotsLength={entries.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={IndexStyles.paginationContainer}
            dotColor={'rgba(255, 212, 63, 1)'}
            dotStyle={IndexStyles.paginationDot}
            inactiveDotColor={'rgba(158, 158, 158, 1)'}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default withNavigationFocus(HomeScreen);
