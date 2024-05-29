import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import styles from './PrimaryButton.style';
import {ProductContext} from '../../context/ProductContext';
import {useNavigation} from '@react-navigation/native';

const PrimaryButton = () => {
  const {
    radioButtonValue,
    setRadioButtonValue,
    mainData,
    originData,
    setMainFilterData,
    chechkBoxBrands,
    filteredModels,
  } = useContext(ProductContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setMainFilterData(originData);
    });

    return unsubscribe;
  }, [navigation, setMainFilterData, originData]);

  const sortData = data => {
    switch (radioButtonValue) {
      case 1:
        return data.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
      case 2:
        return data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      case 3:
        return data.sort((a, b) => b.price - a.price);
      case 4:
        return data.sort((a, b) => a.price - b.price);
      default:
        return data;
    }
  };

  const filterByBrands = data => {
    const selectedBrands = chechkBoxBrands
      .filter(brand => brand.isChecked)
      .map(brand => brand.brand);

    return selectedBrands.length > 0
      ? data.filter(item => selectedBrands.includes(item.brand))
      : data;
  };

  const filterByModels = data => {
    const selectedModels = filteredModels
      .filter(model => model.isChecked)
      .map(model => model.model);

    return selectedModels.length > 0
      ? data.filter(item => selectedModels.includes(item.model))
      : data;
  };

  const applyFilters = () => {
    let filteredData = [...mainData];

    if (radioButtonValue !== 0) {
      filteredData = sortData(filteredData);
      setRadioButtonValue(0);
    }

    filteredData = filterByBrands(filteredData);
    filteredData = filterByModels(filteredData);

    setMainFilterData(filteredData);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={applyFilters}>
        <Text style={styles.buttonText}>Primary</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
