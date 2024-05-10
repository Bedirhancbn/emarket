import {View, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './CheckBoxHeader.style';

const CheckBoxHeader = ({onData, searchData}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = query => {
    setSearchText(query);
    const formattedText = query.trim().toLowerCase();
    const filtredResult = onData.filter(item => {
      return item.brand.toLowerCase().includes(formattedText);
    });
    searchData(filtredResult);
    console.log(filtredResult);
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
