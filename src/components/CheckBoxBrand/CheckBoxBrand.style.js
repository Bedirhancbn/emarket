import {Dimensions, StyleSheet} from 'react-native';

const sizeDevice = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    height: sizeDevice.height / 4.2,
  },
  title_text: {color: '#7b7b7b', paddingBottom: 10, fontSize: 15},
  flatList: {
    height: sizeDevice.height / 10,
    maxWidth: sizeDevice.width / 1,
  },
  chechkBox: {borderRadius: 5},
  render_container: {
    flexDirection: 'row',
    padding: 4,
    marginLeft: 10,
  },
  render_text: {color: '#000', marginLeft: 10},
  seperator: {
    backgroundColor: '#8a8b8f',
    height: 2,
    marginLeft: 10,
    marginRight: 10,
  },
});
