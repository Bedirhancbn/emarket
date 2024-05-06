import {View, FlatList, StyleSheet, Button} from 'react-native';
import React, {useContext, useEffect} from 'react';
import CartCard from '../../components/CartCard';
import TotalCost from '../../components/TotalCost/TotalCost';
import {ProductContext} from '../../context/ProductContext';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const {cartData, getData} = useContext(ProductContext);
  const navigation = useNavigation();

  let sum = 0;
  cartData.forEach(item => {
    sum += item.price * item.quantity;
  });
  useEffect(() => {
    navigation.setOptions({tabBarBadge: 1});
  }, [cartData, navigation]);

  const renderCart = ({item}) => {
    return <CartCard cartData={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        renderItem={renderCart}
        style={styles.containerFlatList}
      />
      <TotalCost cost={sum} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  containerFlatList: {marginBottom: 5},
});

export default Cart;
