import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ProductDetail from '../../../components/ProductDetail';
import {useNavigation} from '@react-navigation/native';
import useFetch from '../../../hooks/useFetch';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {id} = route.params;
  const navigation = useNavigation();
  const {data: productHeader} = useFetch(Config.URL);

  useEffect(() => {
    if (productHeader) {
      navigation.setOptions({title: productHeader[id].name});
    }
  }, [productHeader, id, navigation]);

  return (
    <View>
      <ProductDetail productId={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Detail;
