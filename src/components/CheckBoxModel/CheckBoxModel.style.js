import {Dimensions, StyleSheet} from 'react-native';

const sizeDevice = Dimensions.get('screen');

export default StyleSheet.create({
  container: {backgroundColor: '#fff', padding: 10},
  title_text: {color: '#7b7b7b', paddingBottom: 10, fontSize: 15},
  flatList: {height: sizeDevice.height / 10, maxWidth: sizeDevice.width / 1},
  checkBox: {borderRadius: 5},
  render_container: {flexDirection: 'row', padding: 4, marginLeft: 10},
  render_text: {color: '#000', marginLeft: 10},
});
