import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './ProductDetail.style';

const ProductDetail = ({productId}) => {
  const {data: detailData} = useFetch(Config.URL);
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
              <TouchableOpacity style={styles.button_container}>
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
