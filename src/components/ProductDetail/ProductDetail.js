import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './ProductDetail.style';
import {ProductContext} from '../../context/ProductContext';

const ProductDetail = ({productId}) => {
  const {addCart, addFav, favData, removeFav, originData} =
    useContext(ProductContext);
  const [already, setAlready] = useState(false);

  useEffect(() => {
    const isFavorite = favData.some(
      favItem => favItem.id === originData[productId].id,
    );
    setAlready(isFavorite);
  }, [favData, originData, productId]);

  const onClickFav = () => {
    if (already) {
      removeFav(originData[productId]);
    } else {
      addFav(originData[productId]);
    }
  };
  const handleClick = () => {
    addCart(originData[productId]);
  };
  return (
    <View>
      {originData ? (
        <View style={styles.container}>
          <Image
            source={{uri: originData[productId].image}}
            style={styles.image}
          />
          <TouchableOpacity style={styles.imageContainer} onPress={onClickFav}>
            <Image
              source={
                already
                  ? require('../../assets/images/star_open.png')
                  : require('../../assets/images/star_close.png')
              }
            />
          </TouchableOpacity>
          <Text style={styles.text_name}>{originData[productId].name}</Text>
          <Text style={styles.text_description}>
            {originData[productId].description}
          </Text>
          <View style={styles.container_bottom}>
            <View style={styles.container_price}>
              <Text style={styles.text_price}>Price:</Text>
              <Text style={styles.text_product_price}>
                {originData[productId].price} ₺
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button_container}
                onPress={handleClick}>
                <Text style={styles.button_text}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

export default ProductDetail;
