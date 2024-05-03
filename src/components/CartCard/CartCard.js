import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './CardCard.style';
import {ProductContext} from '../../context/ProductContext';

const CartCard = ({cartData}) => {
  const {increaseQuantity} = useContext(ProductContext);
  const increase = () => {
    increaseQuantity(cartData);
    console.log(cartData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.text_name}>{cartData.item.name}</Text>
        <Text style={styles.text_price}>{cartData.item.price}₺</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttons_text}>-</Text>
        </TouchableOpacity>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{cartData.item.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.buttons} onPress={increase}>
          <Text style={styles.buttons_text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;
