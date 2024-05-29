import {View, FlatList, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import MainFlatListHeader from '../../../components/MainFlatListHeader';
import {ProductContext} from '../../../context/ProductContext';

const Main = ({navigation}) => {
  const {mainData, mainFilterData, homeScreenData, setHomeScreenData} =
    useContext(ProductContext);

  useEffect(() => {
    setHomeScreenData(mainFilterData.length > 0 ? mainFilterData : mainData);
  }, [mainData, mainFilterData, setHomeScreenData]);

  const navigateToDetail = id => {
    navigation.navigate('Detail', {id});
  };

  const renderProduct = item => {
    return (
      <ProductCard
        productList={item}
        navigationToDetail={() => navigateToDetail(item.item.id - 1)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={homeScreenData}
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
