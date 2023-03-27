import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Item } from '../models/store-models';
import ItemPDP from '../ItemPDP/ItemPDP';

import { useProducts } from '../CartContext';

const ItemPage = () => {
  const { id: itemId } = useParams<string>();
  const { products } = useProducts();
  const item: Item = products.find(i => i.id === Number(itemId)) as Item;

  return (!item) ? null : (
    <>
      <ItemPDP
        item={ item }
      />
    </>
  )
}

export default ItemPage;