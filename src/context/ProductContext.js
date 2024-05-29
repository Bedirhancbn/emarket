import React, {useCallback, useEffect, useState} from 'react';
import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import axios from 'react-native-axios';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [originData, setOriginData] = useState([]);
  const [mainData, setMainData] = useState([]); // Bu ana ekranda ilk gösterilen data filtreleme uygulamadan ilk gelen
  const [homeScreenData, setHomeScreenData] = useState([]); // bu ana ekrandaki filtrelendiyse filtrelenmiş değilsede ana datayı bulunduruyor
  const [chechkBoxBrands, setChechkBoxBrands] = useState([]); // ekranda gözüken checkbox benzersiz verileri
  const [searchCheckBoxBrands, setSearchCheckBoxBrands] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);

  const [mainFilterData, setMainFilterData] = useState([]);

  const [cartData, setCartData] = useState([]);
  const [favData, setFavData] = useState([]);
  const [radioButtonValue, setRadioButtonValue] = useState(0);

  useEffect(() => {
    // cihaza kaydedilmiş verileri getir
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('cart-key');
        const jsonValueFav = await AsyncStorage.getItem('fav-key');
        if (jsonValue !== null) {
          setCartData(JSON.parse(jsonValue));
        }
        if (jsonValueFav !== null) {
          setFavData(JSON.parse(jsonValueFav));
        }
      } catch (error) {
        console.log('Get data error:', error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    // cihaza verileri kaydet
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(cartData);
        const jsonValueFav = JSON.stringify(favData);
        await AsyncStorage.setItem('cart-key', jsonValue);
        await AsyncStorage.setItem('fav-key', jsonValueFav);
      } catch (error) {
        console.log('Store error:', error);
      }
    };
    storeData();
  }, [cartData, favData]);

  const addCart = useCallback(
    oneProductData => {
      if (!cartData.some(item => item.id === oneProductData.id)) {
        setCartData(prevCartData => [
          ...prevCartData,
          {...oneProductData, quantity: 1},
        ]);
        console.log('Product added successfully');
      } else {
        console.log('Product already in cart');
      }
    },
    [cartData],
  );

  const addFav = useCallback(
    oneProductData => {
      if (!favData.some(item => item.id === oneProductData.id)) {
        setFavData(prevFavData => [
          ...prevFavData,
          {...oneProductData, isFav: true},
        ]);
        console.log('Product add successfully fav');
      } else {
        console.log('Product already added fav.');
      }
    },
    [favData],
  );

  const removeFav = useCallback(oneFavData => {
    setFavData(prevFavData =>
      prevFavData.filter(item => item.id !== oneFavData.id),
    );
  }, []);

  const increaseQuantity = useCallback(id => {
    setCartData(prevCartData =>
      prevCartData.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  }, []);

  const decreaseQuantity = useCallback(id => {
    setCartData(prevCartData =>
      prevCartData
        .map(item =>
          item.id === id && item.quantity > 1
            ? {...item, quantity: item.quantity - 1}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  }, []);

  useEffect(() => {
    axios(Config.URL).then(res => {
      setOriginData(res.data);
      setMainData(res.data);
      setHomeScreenData(res.data);
      setChechkBoxBrands(res.data);
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        originData, // hiçbir manüpülasyon yapılmadan saf data
        mainData, // ekranda ilk gözüken data
        setMainData,
        mainFilterData, // bütün filtrelemeler elde edildikten sonraki data
        setMainFilterData,
        homeScreenData, // filtreleme yapılmış veya yapılmamış ana ekranda gözükecek data
        setHomeScreenData,
        chechkBoxBrands, // bu markaların checkbox verisi ekranda gözüken
        setChechkBoxBrands,
        searchCheckBoxBrands,
        setSearchCheckBoxBrands,
        filteredModels,
        setFilteredModels,

        cartData,
        favData, // fav veri
        removeFav, // fav veri silme
        addCart,
        addFav,
        increaseQuantity,
        decreaseQuantity,
        radioButtonValue,
        setRadioButtonValue,
      }}>
      {props.children}
    </ProductContext.Provider>
  );
};
