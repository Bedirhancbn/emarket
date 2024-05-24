import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../../context/ProductContext';
import {useNavigation} from '@react-navigation/native';
import Favcard from '../../components/FavCard/FavCard';

const Favorities = () => {
  const {favData} = useContext(ProductContext);
  const navigation = useNavigation();

  const navigateToDetail = id => {
    navigation.navigate('Detail', {id});
  };

  const renderCart = ({item}) => {
    return (
      <Favcard
        favList={item}
        navigationToDetail={() => navigateToDetail(item.id - 1)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favData}
        renderItem={renderCart}
        style={styles.containerFlatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  containerFlatList: {marginBottom: 5},
});

export default Favorities;
