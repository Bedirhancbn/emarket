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
    height: deviceSize.height / 18,
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
  containerFilter: {marginHorizontal: 10, flexDirection: 'row', marginTop: 10},
  filterText: {color: '#000', flex: 1, fontSize: 18},
  filterButton: {
    backgroundColor: '#e8e8e8',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 3,
  },
  filterButtonText: {color: '#000', fontSize: 16},
});
