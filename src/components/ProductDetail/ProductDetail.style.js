import {Dimensions, StyleSheet} from 'react-native';

const sizeOfDevice = Dimensions.get('window');

export default StyleSheet.create({
  container: {height: sizeOfDevice.height / 1.2},
  container_price: {marginLeft: 15, flex: 1},
  container_bottom: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginRight: 15,
  },
  button_container: {
    backgroundColor: '#2A59FE',
    width: sizeOfDevice.width / 2.2,
    borderRadius: 5,
  },
  image: {
    width: sizeOfDevice.width / 1.08,
    height: sizeOfDevice.height / 3,
    marginTop: 15,
    marginLeft: 15,
  },
  text_name: {
    color: '#000',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  text_description: {
    color: '#000',
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'justify',
  },
  text_price: {color: '#2A59FE', fontSize: 15},
  text_product_price: {color: '#000', fontWeight: 'bold', fontSize: 18},
  button_text: {
    color: '#fff',
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
