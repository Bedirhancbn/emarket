import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './PrimaryButton.style';
import {ProductContext} from '../../context/ProductContext';

const PrimaryButton = () => {
  const {
    radioButtonValue,
    setRadioButtonValue,
    mainData,
    mainFilterData,
    setMainFilterData,
    chechkBoxBrands,
  } = useContext(ProductContext);

  const [copyData, setCopyData] = useState(mainData);
  const [copyData2, setCopyData2] = useState(mainData);
  const [copyData3, setCopyData3] = useState(mainData);
  const [copyData4, setCopyData4] = useState(mainData);

  const handleFilterClick = () => {
    setCopyData2([]);
    console.log(copyData2);
    if (radioButtonValue !== 0) {
      let sortedData = [...mainData];
      switch (radioButtonValue) {
        case 1:
          sortedData.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
          );
          break;
        case 2:
          sortedData.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );
          break;
        case 3:
          sortedData.sort((a, b) => b.price - a.price);
          break;
        case 4:
          sortedData.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
      setMainFilterData(sortedData);
      setRadioButtonValue(0);
    }

    const selectedBrands = chechkBoxBrands
      .filter(brand => brand.isChecked)
      .map(brand => brand.brand);

    const filteredData = mainFilterData.filter(item =>
      selectedBrands.includes(item.brand),
    );
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
