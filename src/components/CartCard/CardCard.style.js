import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  infoContainer: {flex: 1},
  text_name: {color: '#000', fontSize: 17},
  text_price: {color: '#2A59FE'},
  buttonContainer: {flexDirection: 'row'},
  quantityContainer: {
    backgroundColor: '#2A59FE',
    width: 50,
  },
  quantityText: {
    color: '#fff',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  buttons: {backgroundColor: '#f3f3f5', width: 50},
  buttons_text: {
    flex: 1,
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
  },
});
