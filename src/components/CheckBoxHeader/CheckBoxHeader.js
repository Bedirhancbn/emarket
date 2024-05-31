import {View, TextInput, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './CheckBoxHeader.style';
import {ProductContext} from '../../context/ProductContext';

const CheckBoxHeader = ({searchType}) => {
  const {
    chechkBoxBrands,
    setChechkBoxBrands,
    filteredModels,
    setFilteredModels,
  } = useContext(ProductContext);

  const [originalBrands] = useState([...chechkBoxBrands]);
  const [originalModels, setOriginalModels] = useState([...filteredModels]);

  useEffect(() => {
    setOriginalModels([...filteredModels]);
  }, [filteredModels]);

  const [searchText, setSearchText] = useState('');

  const handleSearch = query => {
    setSearchText(query);
    const formattedText = query.trim().toLowerCase();
    if (searchType === 'brand') {
      const filteredResult = originalBrands.filter(item => {
        return item.brand.toLowerCase().includes(formattedText);
      });
      setChechkBoxBrands([...filteredResult]);
    } else if (searchType === 'model') {
      const filteredResult = originalModels.filter(item => {
        return item.model.toLowerCase().includes(formattedText);
      });
      setFilteredModels([...filteredResult]);
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
