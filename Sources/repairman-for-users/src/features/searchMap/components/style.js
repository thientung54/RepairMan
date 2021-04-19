import {StyleSheet, Dimensions} from 'react-native';
import {fontFamily} from '../../../style';

const screenWidth = Math.round(Dimensions.get('window').width);

export const ServiceStyles = StyleSheet.create({
  headerSList: {
    backgroundColor: 'rgb(255, 212, 63)',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingLeft: 16,
    paddingRight: 27,
    paddingTop: 13,
    paddingBottom: 17,
  },
  titleSList: {
    fontSize: 16,
    color: '#000000',
    fontFamily: fontFamily.medium,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  dFlex1: {
    flex: 1,
  },
  itemSList: {
    paddingHorizontal: 16,
    borderBottomWidth: 0,
  },
  itemInSList: {
    borderColor: 'rgb(0, 0, 0)',
    borderBottomWidth: 0.6,
    paddingVertical: 9,
  },
  nameItemSList: {
    fontFamily: fontFamily.medium,
    fontSize: 17,
    color: 'rgb(74, 74, 74)',
    paddingLeft: 14,
  },
  priceItemSList: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: 'rgb(74, 74, 74)',
  },
  unitItemSList: {
    fontFamily: fontFamily.medium,
    fontSize: 10,
    color: 'rgb(144, 144, 144)',
    paddingTop: 2,
    paddingLeft: 2,
  },
  alignVCenter: {
    alignItems: 'center',
  },
  bodySList: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  selectedItemSList: {
    backgroundColor: 'rgb(255, 251, 232)',
    borderBottomWidth: 1,
    borderColor: 'rgb(255, 212, 63)',
  },
  selectedItemInSList: {
    borderBottomWidth: 0,
    borderColor: 'transparent',
  },

  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

