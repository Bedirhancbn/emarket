import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './CheckBoxBrand.style';
import CheckBox from 'expo-checkbox';
import CheckBoxHeader from '../CheckBoxHeader';
import {ProductContext} from '../../context/ProductContext';

const CheckBoxBrand = ({onData}) => {
  const [data, setData] = useState(onData);

  useEffect(() => {
    if (onData) {
      const filtredData = onData.reduce((array, nextItem) => {
        if (!array.some(item => item.brand === nextItem.brand)) {
          array.push(nextItem);
        }
        return array;
      }, []);
      setData(filtredData);
    }
  }, [onData]);

  const onChangeValue = (item, index, newValue) => {
    const newData = data.map(newItem => {
      if (newItem.id === item.id) {
        return {
          ...newItem,
          selected: newValue,
        };
      }
      return newItem;
    });
    setData(newData);
    console.log(newData);
  };

  const renderBrand = ({item, index}) => {
    return (
      <View style={styles.render_container}>
        <CheckBox
          style={styles.chechkBox}
          value={item.selected}
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
          data={data}
          renderItem={renderBrand}
          ListHeaderComponent={
            <CheckBoxHeader onData={data} searchData={setData} />
          }
        />
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default CheckBoxBrand;
