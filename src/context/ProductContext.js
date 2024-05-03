import React, {useState} from 'react';
import {createContext} from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [cartData, setCartData] = useState([]);

  const addCart = oneProductData => {
    const alreadyAdded = cartData.find();
    setCartData([...cartData, {...oneProductData, quantity: 1}]);
  };
  const increaseQuantity = () => {
    setCartData([...cartData, {quantity: 3}]);
  };

  return (
    <ProductContext.Provider value={{cartData, addCart, increaseQuantity}}>
      {props.children}
    </ProductContext.Provider>
  );
};
