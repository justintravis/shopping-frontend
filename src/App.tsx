import React, { useState, useRef } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import TodosContainer from './TodosContainer';
import Layout from './Layout/Layout';
import ShoppingContainer from './ShoppingContainer';
import ItemPage from './ItemPage/ItemPage';

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout storeName={`Justin's Store`} />}>
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
