import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CartCard from '../../components/CartCard';
import TotalCost from '../../components/TotalCost/TotalCost';

const Cart = () => {
  const data = [
    {id: 1, name: 'samsung', price: 200, quantity: 1},
    {id: 2, name: 'iphone', price: 250, quantity: 2},
  ];

  let sum = 0;
  data.forEach(item => {
    sum += item.price * item.quantity;
  });

  const renderCart = item => {
    return <CartCard cartData={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderCart} />
      <TotalCost cost={sum} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
});

export default Cart;
