import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './MainFlatListHeader.style';
import {useNavigation} from '@react-navigation/native';

const MainFlatListHeader = ({onData, onSearchData}) => {
  const navigation = useNavigation();
  let text = useState();
  const handleSearch = query => {
    const filtredText = query.trim().toLowerCase();
    const filtredResult = onData.filter(item => {
      return item.name.toLowerCase().includes(filtredText);
    });
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
      <View style={styles.containerFilter}>
        <Text style={styles.filterText}>Filters:</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            navigation.navigate('Filter');
          }}>
          <Text style={styles.filterButtonText}>Select Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainFlatListHeader;
