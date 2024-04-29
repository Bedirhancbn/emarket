import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import EmartketHeader from '../../../components/EmarketHeader/EmartketHeader';
import useFetch from '../../../hooks/useFetch';
import Config from 'react-native-config';
import ProductCard from '../../../components/ProductCard/ProductCard';
import SearchCard from '../../../components/MainFlatListHeader';

const Main = ({navigation}) => {
  const {data: productData} = useFetch(Config.URL);
  const [text, setText] = useState();

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
      <EmartketHeader />
      <FlatList
        data={productData}
        renderItem={renderProduct}
        numColumns={2}
        ListHeaderComponent={<SearchCard />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff'},
});

export default Main;
