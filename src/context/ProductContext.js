import React, {useEffect, useState} from 'react';
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

  const addCart = oneProductData => {
    const alreadyAdded = cartData.some(
      element => element.id === oneProductData.id,
    );
    if (!alreadyAdded) {
      setCartData([...cartData, {...oneProductData, quantity: 1}]);
      console.log('Product add successfully');
    } else {
      console.log('Product already added cart.');
    }
  };

  const addFav = oneProductData => {
    const alreadyAdded = favData.some(
      element => element.id === oneProductData.id,
    );
    if (!alreadyAdded) {
      setFavData([...favData, {...oneProductData, isFav: true}]);
      console.log('Product add successfully fav');
    } else {
      console.log('Product already added fav.');
    }
  };

  const removeFav = oneFavData => {
    setFavData(prevFavData =>
      prevFavData.filter(element => element.id !== oneFavData.id),
    );
  };

  const increaseQuantity = idQuantity => {
    const updateQuantity = cartData.map(element => {
      if (idQuantity === element.id) {
        return {...element, quantity: element.quantity + 1};
      } else {
        return element;
      }
    });
    setCartData(updateQuantity);
  };

  const decreaseQuantity = idQuantity => {
    const updateQuantity = cartData
      .map(element => {
        if (idQuantity === element.id && element.quantity > 1) {
          return {...element, quantity: element.quantity - 1};
        } else if (idQuantity === element.id && element.quantity === 1) {
          return undefined;
        } else {
          return element;
        }
      })
      .filter(element => element !== undefined);
    setCartData(updateQuantity);
  };

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
        setOriginData,
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
