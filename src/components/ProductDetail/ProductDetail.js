import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './ProductDetail.style';
import {ProductContext} from '../../context/ProductContext';

const ProductDetail = ({productId}) => {
  const {data: detailData} = useFetch(Config.URL);
  const {addCart} = useContext(ProductContext);
  const handleClick = () => {
    addCart(detailData[productId]);
  };
  return (
    <View>
      {detailData ? (
        <View style={styles.container}>
          <Image
            source={{uri: detailData[productId].image}}
            style={styles.image}
          />
          <Text style={styles.text_name}>{detailData[productId].name}</Text>
          <Text style={styles.text_description}>
            {detailData[productId].description}
          </Text>
          <View style={styles.container_bottom}>
            <View style={styles.container_price}>
              <Text style={styles.text_price}>Price:</Text>
              <Text style={styles.text_product_price}>
                {detailData[productId].price} ₺
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
          <Text>NO data</Text>
        </View>
      )}
    </View>
  );
};

export default ProductDetail;
