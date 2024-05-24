import {View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import ProductDetail from '../../../components/ProductDetail';
import {useNavigation} from '@react-navigation/native';
import {ProductContext} from '../../../context/ProductContext';

const Detail = ({route}) => {
  const {id} = route.params;
  const navigation = useNavigation();
  const {originData} = useContext(ProductContext);

  useEffect(() => {
    navigation.setOptions({title: originData[id].name});
  }, [originData, id, navigation]);

  return (
    <View>
      <ProductDetail productId={id} />
    </View>
  );
};

export default Detail;
