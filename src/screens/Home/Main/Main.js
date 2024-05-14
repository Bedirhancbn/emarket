import {View, FlatList, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import MainFlatListHeader from '../../../components/MainFlatListHeader';
import {ProductContext} from '../../../context/ProductContext';

const Main = ({navigation}) => {
  const {mainData, searchedData, setSearchedData} = useContext(ProductContext);

  useEffect(() => {
    setSearchedData(mainData);
  }, [mainData, setSearchedData]);

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
        data={mainData}
        renderItem={renderProduct}
        numColumns={2}
        ListHeaderComponent={<MainFlatListHeader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
});

export default Main;
