/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {BLACK, BRAND, LIGHTGRAY, WHITE} from '../../constants/color';
import {BOLD, EXTRABOLD, MEDIUM} from '../../constants/fontfamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {HEIGHT, WIDTH} from '../../constants/config';
export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    width: WIDTH,
    alignItems: 'center',
    padding: RFValue(16),
  },
  text: {
    fontSize: RFValue(15),
  },
});
