import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import CheckBox from 'expo-checkbox';
import styles from './CheckBoxModel.style';
import {ProductContext} from '../../context/ProductContext';
import CheckBoxHeader from '../CheckBoxHeader';

const CheckBoxModel = ({onData}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {mainData, chechkBoxBrands, filteredModels, setFilteredModels} =
    useContext(ProductContext);

  useEffect(() => {
    const selectedBrands = chechkBoxBrands
      .filter(brand => brand.isChecked)
      .map(brand => brand.brand);

    const models = mainData
      .filter(item => selectedBrands.includes(item.brand))
      .map(item => item.model);

    setFilteredModels([...new Set(models)]);
  }, [chechkBoxBrands, mainData, setFilteredModels]);

  const onChangeValue = (item, index, newValue) => {
    console.log('seçilen veri', item.brand);
    const newData = filteredModels.map(newItem => {
      if (newItem.id === item.id) {
        return {
          ...newItem,
          isChecked: newValue,
        };
      }
      return newItem;
    });
    setFilteredModels(newData);
  };

  const renderModel = ({item, index}) => {
    return (
      <View style={styles.render_container}>
        <CheckBox
          isChecked={false}
          style={styles.checkBox}
          value={toggleCheckBox}
          onValueChange={newValue => onChangeValue(item, index, newValue)}
          color={'blue'}
        />
        <Text style={styles.render_text}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Model</Text>
      <FlatList
        data={filteredModels}
        renderItem={renderModel}
        style={styles.flatList}
        ListHeaderComponent={<CheckBoxHeader />}
      />
    </View>
  );
};
export default CheckBoxModel;
