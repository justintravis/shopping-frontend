import React, { useState, useRef, useContext } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { CartItem, Item } from './models/store-models';
import Layout from './Layout/Layout';
import ShoppingContainer from './ShoppingContainer';
import ItemPage from './ItemPage/ItemPage';
import  { CartContext } from './CartContext';
import { CartActionsContext } from './CartActionsContext';

import './App.css'

const App = () => {
  const [userCart, setUserCart] = useState<CartItem[]>([]);

  const removeItemFromCart = (item: CartItem) => {
    const newCart = userCart.filter(cartItem => cartItem.id !== item.id);
    setUserCart(newCart);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <CartContext.Provider value={ userCart }>
            <CartActionsContext.Provider value={ setUserCart }>
              <Layout storeName={`Justin's Store`} cart={ userCart } handleRemoveItemFromCart={ removeItemFromCart } />
            </CartActionsContext.Provider>
          </CartContext.Provider>
        }>
          <Route index element={
            <ShoppingContainer storeName={`Justin's Store`} themeColor='#fefefe' locale='en-GB' />
          } />
          <Route path="/item/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
