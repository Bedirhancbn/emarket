import React, {useState} from 'react';
import {createContext} from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [cartData, setCartData] = useState([]);

  const addCart = () => {
    setCartData(...cartData, {quantity: 1});
  };

  return (
    <ProductContext.Provider value={{deger: 25, cartData, addCart}}>
      {props.children}
    </ProductContext.Provider>
  );
};
