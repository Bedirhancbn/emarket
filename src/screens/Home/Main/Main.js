import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetch from '../../../hooks/useFetch';
import Config from 'react-native-config';
import ProductCard from '../../../components/ProductCard/ProductCard';
import SearchCard from '../../../components/MainFlatListHeader';

const Main = ({navigation}) => {
  const {data: productData} = useFetch(Config.URL);
  const [searchedData, setSearchedData] = useState(productData);

  useEffect(() => {
    setSearchedData(productData);
  }, [productData]);

  const navigateToDetail = id => {
    navigation.navigate('Detail', {id});
  };

  const renderProduct = item => {
    return (
      <ProductCard
        productList={item}
        navigationToDetail={() => navigateToDetail(item.index)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={searchedData}
        renderItem={renderProduct}
        numColumns={2}
        ListHeaderComponent={
          <SearchCard onData={productData} onSearchData={setSearchedData} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
});

export default Main;
