import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext} from 'react';
import styles from './ProductCard.style';
import {ProductContext} from '../../context/ProductContext';

function ProductCard({productList, navigationToDetail}) {
  const {addCart} = useContext(ProductContext);
  const onClick = () => {
    addCart(productList.item);
  };
  return (
    <View style={styles.container}>
      <View style={styles.feedback_container}>
        <TouchableWithoutFeedback onPress={navigationToDetail}>
          <View>
            <Image
              source={{uri: productList.item.image}}
              style={styles.image}
            />
            <Text style={styles.price}>{productList.item.price} ₺</Text>
            <Text style={styles.name}>{productList.item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={onClick}>
              <Text style={styles.button_text}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default ProductCard;
