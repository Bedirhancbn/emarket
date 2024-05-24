import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import CheckBox from 'expo-checkbox';
import styles from './CheckBoxModel.style';
import {ProductContext} from '../../context/ProductContext';
import CheckBoxHeader from '../CheckBoxHeader';
import {useNavigation} from '@react-navigation/native';

const CheckBoxModel = () => {
  const {mainData, chechkBoxBrands, filteredModels, setFilteredModels} =
    useContext(ProductContext);
  const [selectedModels, setSelectedModels] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      setSelectedModels([]);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const selectedBrands = chechkBoxBrands
      .filter(brand => brand.isChecked)
      .map(brand => brand.brand);

    const models = mainData
      .filter(item => selectedBrands.includes(item.brand))
      .map(item => ({
        model: item.model,
        isChecked: selectedModels.includes(item.model),
      }));
    setFilteredModels(models);
  }, [chechkBoxBrands, mainData, setFilteredModels, selectedModels]);

  const onChangeValue = (item, index, newValue) => {
    const updatedModels = filteredModels.map((model, indexx) => {
      if (indexx === index) {
        return {...model, isChecked: newValue};
      }
      return model;
    });
    setFilteredModels(updatedModels);

    if (newValue) {
      setSelectedModels([...selectedModels, item.model]);
    } else {
      setSelectedModels(selectedModels.filter(model => model !== item.model));
    }
  };

  const renderModel = ({item, index}) => {
    return (
      <View style={styles.render_container}>
        <CheckBox
          value={item.isChecked}
          style={styles.checkBox}
          onValueChange={newValue => onChangeValue(item, index, newValue)}
          color={'blue'}
        />
        <Text style={styles.render_text}>{item.model}</Text>
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
        ListHeaderComponent={
          <CheckBoxHeader /* searchModel={filteredModels} */ />
        }
      />
    </View>
  );
};

export default CheckBoxModel;
