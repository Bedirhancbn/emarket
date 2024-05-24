import {View, TextInput, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './CheckBoxHeader.style';
import {ProductContext} from '../../context/ProductContext';

const CheckBoxHeader = ({searchData}) => {
  const {chechkBoxBrands, setChechkBoxBrands} = useContext(ProductContext);
  const [originalCheckBoxData] = useState([...chechkBoxBrands]);

  const [searchText, setSearchText] = useState('');
  const handleSearch = query => {
    setSearchText(query);
    const formattedText = query.trim().toLowerCase();
    const filteredResult = originalCheckBoxData.filter(item => {
      return item.brand.toLowerCase().includes(formattedText);
    });
    setChechkBoxBrands([...filteredResult]);
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
