import {Dimensions, StyleSheet} from 'react-native';

const sizeOfDevice = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },
  image: {width: sizeOfDevice.width / 2.5, height: sizeOfDevice.height / 5.5},
  price: {color: '#2A59FE', marginTop: 10, fontSize: 16},
  name: {
    color: '#000',
    height: sizeOfDevice.height / 20,
    marginTop: 10,
    fontWeight: '500',
  },
  button: {backgroundColor: '#2A59FE', borderRadius: 3},
  button_text: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontWeight: '300',
    fontSize: 18,
  },
  feedback_container: {padding: 10, backgroundColor: '#fff'},
  imageContainer: {
    width: sizeOfDevice.width / 10,
    height: 0,
    top: -250,
    left: 115,
  },
});
