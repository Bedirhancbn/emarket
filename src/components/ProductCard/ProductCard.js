import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from './ProductCard.style';
import {ProductContext} from '../../context/ProductContext';

function ProductCard({productList, navigationToDetail}) {
  const {addCart, addFav, favData, removeFav} = useContext(ProductContext);
  const [already, setAlready] = useState(false);

  useEffect(() => {
    const isFavorite = favData.some(
      favItem => favItem.id === productList.item.id,
    );
    setAlready(isFavorite);
  }, [favData, productList.item.id]);

  const onClickAddCart = () => {
    addCart(productList.item);
  };

  const onClickFav = () => {
    if (already) {
      removeFav(productList.item);
    } else {
      addFav(productList.item);
    }
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
            <TouchableOpacity style={styles.button} onPress={onClickAddCart}>
              <Text style={styles.button_text}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.imageContainer} onPress={onClickFav}>
          <Image
            source={
              already
                ? require('../../assets/images/star_open.png')
                : require('../../assets/images/star_close.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductCard;
