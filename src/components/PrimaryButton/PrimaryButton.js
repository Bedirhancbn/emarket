import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import styles from './PrimaryButton.style';
import {ProductContext} from '../../context/ProductContext';

const PrimaryButton = () => {
  const {searchedData, setSearchedData, radioButtonValue, setRadioButtonValue} =
    useContext(ProductContext);

  const selectFilter = () => {
    if (radioButtonValue === 1 || radioButtonValue === 2) {
      const sortedData = [...searchedData];
      if (radioButtonValue === 1) {
        sortedData.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
      } else {
        sortedData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      }
      setSearchedData(sortedData);
      setRadioButtonValue(0);
    }
    if (radioButtonValue === 3 || radioButtonValue === 4) {
      const sortedData = [...searchedData];
      if (radioButtonValue === 3) {
        sortedData.sort((a, b) => b.price - a.price);
      } else {
        sortedData.sort((a, b) => a.price - b.price);
      }
      setSearchedData(sortedData);
      setRadioButtonValue(0);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={selectFilter}>
        <Text style={styles.buttonText}>Primary</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
