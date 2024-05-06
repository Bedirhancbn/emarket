import React, {useEffect, useState} from 'react';
import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(cartData);
        await AsyncStorage.setItem('my-key', jsonValue);
      } catch (error) {
        console.log('Store error:', error);
      }
    };
    storeData();
  }, [cartData]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        console.log(JSON.parse(jsonValue));
        if (jsonValue != null) {
          setCartData(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.log('Get data error:', error);
      }
    };
    getData();
  }, []);

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

  return (
    <ProductContext.Provider
      value={{cartData, addCart, increaseQuantity, decreaseQuantity}}>
      {props.children}
    </ProductContext.Provider>
  );
};
