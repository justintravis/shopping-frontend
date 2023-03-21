import React, { useState, useRef } from 'react'
import { StoreModel } from './models/store-models';
import ItemsList from './ItemsList/ItemsList';
import items from './store-items.json';

const ShoppingContainer = ({ storeName, themeColor, locale}: StoreModel) => {
  return (
    <>
      <ItemsList items={ items } />
    </>
  )
}

export default ShoppingContainer;