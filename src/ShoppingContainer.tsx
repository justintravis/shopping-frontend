import React, { useState, useRef, Suspense, lazy } from 'react'
import items from './store-items.json';

const ShoppingContainer = () => {
  const ItemsList = lazy(() => import('./ItemsList/ItemsList'));

  return (
    <Suspense fallback={'Loading items..'}>
      <ItemsList items={ items } />
    </Suspense>
  )
}

export default ShoppingContainer;