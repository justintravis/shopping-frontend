import React, { useState, useRef, useContext } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { CartItem, Item } from './models/store-models';
import Layout from './Layout/Layout';
import ShoppingContainer from './ShoppingContainer';
import ItemPage from './ItemPage/ItemPage';
import  { CartProvider } from './CartContext';

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <CartProvider>
            <Layout storeName={`Justin's Store`} />
          </CartProvider>
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
