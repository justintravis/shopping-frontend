import React, { useState, useRef, useContext } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { CartItem, Item } from './models/store-models';
import Layout from './Layout/Layout';
import ShoppingContainer from './ShoppingContainer';
import ItemPage from './ItemPage/ItemPage';
import  { CartContext } from './CartContext';

import './App.css'

const App = () => {
  const [userCart, setUserCart] = useState<CartItem[]>([]);

  const addItemToCart = (item: Item) => {
    const itemInCart = userCart.find(userCartItem => {
      return userCartItem.id === item.id;
    });

    if (itemInCart) {
      const newCart = userCart.map(cartItem => {
        if (cartItem.id === item.id) {
          const newQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newQuantity,
            totalPrice: newQuantity * cartItem.price
          };
        } else {
          return cartItem;
        }
      }) as CartItem[];
      setUserCart(newCart);
    } else {
      let cartItem: CartItem = {
        id: item.id,
        name: item.name,
        quantity: 1,
        price: item.price,
        totalPrice: item.price
      }

      setUserCart([
        ...userCart,
        cartItem
      ]);
    }
  }

  const removeItemFromCart = (item: CartItem) => {
    console.log(item);
    const newCart = userCart.filter(cartItem => cartItem.id !== item.id);

    setUserCart(newCart);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <CartContext.Provider value={ userCart }>
            <Layout storeName={`Justin's Store`} cart={ userCart } handleRemoveItemFromCart={ removeItemFromCart } />
          </CartContext.Provider>
        }>
          <Route index element={
            <ShoppingContainer storeName={`Justin's Store`} themeColor='#fefefe' locale='en-GB' />
          } />
          <Route path="/item/:id" element={<ItemPage handleAddItemToCart={ addItemToCart } />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
