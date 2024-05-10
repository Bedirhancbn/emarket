import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#fbf9f9',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
    height: deviceSize.height / 16,
  },
  search_image: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 5,
    padding: 10,
    width: deviceSize.width / 1.2,
  },
  marginTop: 10,
});
