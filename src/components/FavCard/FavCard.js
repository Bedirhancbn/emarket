import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext} from 'react';
import styles from './FavCard.style';
import {ProductContext} from '../../context/ProductContext';

const Favcard = ({favList, navigationToDetail}) => {
  const {removeFav, addCart} = useContext(ProductContext);

  const onClickAddCart = () => {
    addCart(favList);
  };

  const onClickRemoveFav = () => {
    removeFav(favList);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={navigationToDetail}>
        <View style={styles.feedback_container}>
          <View style={styles.feedback_container2}>
            <View>
              <Image source={{uri: favList.image}} style={styles.image} />
            </View>
            <View style={styles.middleContainer}>
              <Text style={styles.name}>{favList.name}</Text>
              <Text style={styles.price}>{favList.price} ₺</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <TouchableOpacity
              style={styles.favButton}
              onPress={onClickRemoveFav}>
              <Image source={require('../../assets/images/star_open.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClickAddCart}>
              <Text style={styles.button_text}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Favcard;
