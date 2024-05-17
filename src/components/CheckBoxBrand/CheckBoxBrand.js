import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import styles from './CheckBoxBrand.style';
import CheckBox from 'expo-checkbox';
import CheckBoxHeader from '../CheckBoxHeader';
import {ProductContext} from '../../context/ProductContext';

const CheckBoxBrand = () => {
  const {chechkBoxBrands, setChechkBoxBrands} = useContext(ProductContext);

  useEffect(() => {
    const chechkBoxBrandData = chechkBoxBrands.reduce((array, nextItem) => {
      if (!array.some(item => item.brand === nextItem.brand)) {
        array.push(nextItem);
      }
      return array;
    }, []);
    setChechkBoxBrands(chechkBoxBrandData);
  }, []);

  const onChangeValue = (item, index, newValue) => {
    console.log('seçilen veri', item.brand);
    const newData = chechkBoxBrands.map(newItem => {
      if (newItem.id === item.id) {
        return {
          ...newItem,
          isChecked: newValue,
        };
      }
      return newItem;
    });
    setChechkBoxBrands(newData);
  };

  const renderBrand = ({item, index}) => {
    return (
      <View style={styles.render_container}>
        <CheckBox
          isChecked={false}
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
          data={chechkBoxBrands}
          renderItem={renderBrand}
          ListHeaderComponent={<CheckBoxHeader />}
        />
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default CheckBoxBrand;