import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './CartCard.style';
import {ProductContext} from '../../context/ProductContext';

const CartCard = ({cartData}) => {
  const {increaseQuantity, decreaseQuantity} = useContext(ProductContext);

  const increase = () => {
    increaseQuantity(cartData.id);
  };
  const decrease = () => {
    decreaseQuantity(cartData.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.text_name}>{cartData.name}</Text>
        <Text style={styles.text_price}>{cartData.price}₺</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={decrease}>
          <Text style={styles.buttons_text}>-</Text>
        </TouchableOpacity>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{cartData.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.buttons} onPress={increase}>
          <Text style={styles.buttons_text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;
