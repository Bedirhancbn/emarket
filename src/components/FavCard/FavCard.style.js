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
    padding: 5,
    borderRadius: 20,
    flexDirection: 'row',
    flex: 1,
  },
  middleContainer: {
    marginLeft: 5,
    justifyContent: 'space-between',
  },
  rightContainer: {
    justifyContent: 'space-between',
    marginRight: 8,
  },
  image: {
    width: sizeOfDevice.width / 3,
    height: sizeOfDevice.height / 10,
    borderRadius: 25,
  },
  price: {
    color: '#000',
    height: sizeOfDevice.height / 20,
    fontWeight: '900',
  },
  name: {
    color: '#000',
  },
  button: {backgroundColor: '#2A59FE', borderRadius: 3},
  button_image: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontWeight: '300',
    fontSize: 18,
  },
  button_text: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    padding: 4,
  },
  feedback_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  feedback_container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  favButton: {flexDirection: 'row-reverse'},
});
