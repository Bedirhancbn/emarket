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

  const handleFilterClick = () => {
    let filteredData = [...mainData];

    if (radioButtonValue !== 0) {
      switch (radioButtonValue) {
        case 1:
          filteredData.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
          );
          break;
        case 2:
          filteredData.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );
          break;
        case 3:
          filteredData.sort((a, b) => b.price - a.price);
          break;
        case 4:
          filteredData.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
      setMainFilterData(filteredData);
      setRadioButtonValue(0);
    }

    const selectedBrands = chechkBoxBrands
      .filter(brand => brand.isChecked)
      .map(brand => brand.brand);

    filteredData = filteredData.filter(item =>
      selectedBrands.includes(item.brand),
    );
    console.log(filteredData);

    const selectedModels = filteredModels
      .filter(model => model.isChecked)
      .map(model => model.model);

    if (selectedModels.length > 0) {
      filteredData = filteredData.filter(item =>
        selectedModels.includes(item.model),
      );
    }

    setMainFilterData(filteredData);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleFilterClick}>
        <Text style={styles.buttonText}>Primary</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
