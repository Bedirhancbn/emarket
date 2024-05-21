import {View, TextInput, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './CheckBoxHeader.style';
import {ProductContext} from '../../context/ProductContext';

const CheckBoxHeader = () => {
  const {chechkBoxBrands, setChechkBoxBrands} = useContext(ProductContext);
  const [originalCheckBoxData, setOriginalCheckBoxData] = useState([
    ...chechkBoxBrands,
  ]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setOriginalCheckBoxData([...chechkBoxBrands]);
  }, [chechkBoxBrands]);

  const handleSearch = query => {
    setSearchText(query);
    const formattedText = query.trim().toLowerCase();
    if (formattedText.length === 0) {
      setChechkBoxBrands([...originalCheckBoxData]);
    } else {
      const filteredResult = originalCheckBoxData.filter(item => {
        return item.brand.toLowerCase().includes(formattedText);
      });
      setChechkBoxBrands([...filteredResult]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.search_image}>
        <Image source={require('../../assets/images/Search.png')} />
      </View>
      <View>
        <TextInput
          value={searchText}
          onChangeText={handleSearch}
          placeholder="Search"
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default CheckBoxHeader;
