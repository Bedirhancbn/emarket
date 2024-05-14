import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import styles from './CheckBoxBrand.style';
import CheckBox from 'expo-checkbox';
import CheckBoxHeader from '../CheckBoxHeader';
import {ProductContext} from '../../context/ProductContext';

const CheckBoxBrand = () => {
  const {mainFilterData, setMainFilterData, filtredBrands, setFiltredBrands} =
    useContext(ProductContext);

  const updatedBrands = filtredBrands.map(brand => ({
    ...brand,
    isChecked: false,
  }));

  useEffect(() => {
    if (updatedBrands) {
      const filtredData = updatedBrands.reduce((array, nextItem) => {
        if (!array.some(item => item.brand === nextItem.brand)) {
          array.push(nextItem);
        }
        return array;
      }, []);
      setFiltredBrands(filtredData);
    }
  }, []);

  const onChangeValue = (item, index, newValue) => {
    console.log('seçilen veri', item.brand);
    const newData = filtredBrands.map(newItem => {
      if (newItem.id === item.id) {
        return {
          ...newItem,
          isChecked: newValue,
        };
      }
      return newItem;
    });
    setFiltredBrands(newData);
    setMainFilterData([...mainFilterData, {...item}]);
    console.log(mainFilterData);
  };

  const renderBrand = ({item, index}) => {
    return (
      <View style={styles.render_container}>
        <CheckBox
          style={styles.chechkBox}
          value={item.isChecked}
          onValueChange={newValue => onChangeValue(item, index, newValue)}
          color={'blue'}
        />
        <Text style={styles.render_text}>{item.brand}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title_text}>Brand</Text>
        <FlatList
          style={styles.flatList}
          data={filtredBrands}
          renderItem={renderBrand}
          ListHeaderComponent={
            <CheckBoxHeader
              onData={filtredBrands}
              searchData={setFiltredBrands}
            />
          }
        />
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default CheckBoxBrand;
