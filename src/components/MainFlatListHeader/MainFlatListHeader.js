import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './MainFlatListHeader.style';

const MainFlatListHeader = ({onData, onSearchData}) => {
  const [text, setText] = useState();
  const [filtredData, setFiltredData] = useState(onData);
  const handleSearch = query => {
    const filtredText = query.trim().toLowerCase();
    const filtredResult = onData.filter(item => {
      return item.name.toLowerCase().includes(filtredText);
    });
    setFiltredData(filtredResult);
    onSearchData(filtredResult);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.search_image}>
          <Image source={require('../../assets/images/Search.png')} />
        </View>
        <View>
          <TextInput
            value={text}
            onChangeText={handleSearch}
            placeholder="Search"
            style={styles.textInput}
          />
        </View>
      </View>
      <View>
        <Text>Filter</Text>
        <TouchableOpacity>
          <Text>Select Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainFlatListHeader;
