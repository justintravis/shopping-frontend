import React, { useState, useRef, Suspense, lazy } from 'react'
import { StoreModel } from './models/store-models';
import items from './store-items.json';

const ShoppingContainer = ({ storeName, themeColor, locale}: StoreModel) => {
  const ItemsList = lazy(() => import('./ItemsList/ItemsList'));

  return (
    <Suspense fallback={'Loading items..'}>
      <ItemsList items={ items } />
    </Suspense>
  )
}

export default ShoppingContainer;