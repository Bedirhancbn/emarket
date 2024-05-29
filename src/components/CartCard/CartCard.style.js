import {Dimensions, StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/themes/metric';

const sizeOfDevice = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
    paddingTop: verticalScale(20),
  },
  infoContainer: {flex: 1},
  text_name: {color: '#000', fontSize: moderateScale(17)},
  text_price: {color: '#2A59FE'},
  buttonContainer: {flexDirection: 'row'},
  quantityContainer: {
    backgroundColor: '#2A59FE',
    width: horizontalScale(50),
  },
  quantityText: {
    color: '#fff',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: moderateScale(18),
  },
  buttons: {backgroundColor: '#f3f3f5', width: horizontalScale(50)},
  buttons_text: {
    flex: 1,
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
  },
});
