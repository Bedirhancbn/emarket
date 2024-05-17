import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './MainFlatListHeader.style';
import {useNavigation} from '@react-navigation/native';
import {ProductContext} from '../../context/ProductContext';

const MainFlatListHeader = () => {
  const {originData, setHomeScreenData, mainFilterData} =
    useContext(ProductContext);
  const [originDataCopy, setOriginDataCopy] = useState(originData);
  useEffect(() => {
    if (mainFilterData.length > 0) {
      setOriginDataCopy(mainFilterData);
    } else {
      setOriginDataCopy(originData);
    }
  }, [mainFilterData, originData]);

  const navigation = useNavigation();
  const text = useState();
  const handleSearch = query => {
    const filtredResult = originDataCopy.filter(item => {
      const filtredText = query.trim().toLowerCase();
      return item.name.toLowerCase().includes(filtredText);
    });
    setHomeScreenData(filtredResult);
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
