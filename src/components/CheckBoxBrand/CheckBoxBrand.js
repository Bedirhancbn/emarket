import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import styles from './CheckBoxBrand.style';
import CheckBox from 'expo-checkbox';
import CheckBoxHeader from '../CheckBoxHeader';
import {ProductContext} from '../../context/ProductContext';
import {useNavigation} from '@react-navigation/native';

const CheckBoxBrand = () => {
  const {chechkBoxBrands, setChechkBoxBrands} = useContext(ProductContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      const chechkBoxBrandData = chechkBoxBrands.reduce((array, nextItem) => {
        if (!array.some(item => item.brand === nextItem.brand)) {
          array.push(nextItem);
        }
        return array;
      }, []);
      setChechkBoxBrands(chechkBoxBrandData);
    });
    return unsubscribe;
  }, [navigation]);

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
          isChecked={chechkBoxBrands.includes(item.brand)}
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
          ListHeaderComponent={<CheckBoxHeader searchData={chechkBoxBrands} />}
        />
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default CheckBoxBrand;
