import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
    height: deviceSize.height / 18,
  },
  search_image: {
    marginTop: 7,
  },
  textInput: {
    paddingHorizontal: 5,
    padding: 10,
    width: deviceSize.width / 1.2,
  },
});
