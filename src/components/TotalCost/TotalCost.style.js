import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {paddingHorizontal: 15, flexDirection: 'row', marginBottom: 10},
  priceContainer: {flex: 1},
  totalText: {color: '#2A59FE', fontSize: 16},
  priceText: {color: '#000', fontWeight: 'bold', fontSize: 16},
  completeButton: {backgroundColor: '#2A59FE', borderRadius: 5},
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 50,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
