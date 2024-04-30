import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './TotalCost.style';

const TotalCost = ({cost}) => {
  let formattedCost = cost.toFixed(2);
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.priceText}>{formattedCost} ₺</Text>
      </View>
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalCost;
