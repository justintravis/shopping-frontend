import React, { useState, useRef } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { CartItem, Item } from './models/store-models';
import Layout from './Layout/Layout';
import ShoppingContainer from './ShoppingContainer';
import ItemPage from './ItemPage/ItemPage';

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
      });
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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout storeName={`Justin's Store`} cart={ userCart } />}>
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
