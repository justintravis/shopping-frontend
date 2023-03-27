import React, { useState, useRef, Suspense, lazy, useEffect } from 'react'
import { useProducts } from './CartContext';
import { Item } from './models/store-models';

const ShoppingContainer = () => {
  const ItemsList = lazy(() => import('./ItemsList/ItemsList'));
  const { products } = useProducts();

  return (
    <Suspense fallback={'Loading items..'}>
      { products && <ItemsList items={ products } /> }
    </Suspense>
  )
}

export default ShoppingContainer;