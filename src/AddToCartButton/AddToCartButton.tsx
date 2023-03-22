import React, { useState, useRef, useContext } from 'react'
import { CartItem, Item } from '../models/store-models';
import { useCart } from '../hooks/useCart';

interface Props {
  item: Item
}

const AddToCartButton = ({ item }: Props) => {
  const { addItemToCart } = useCart();

  return (
    <button onClick={ () => addItemToCart({ item }) }>Add to Cart</button>
  )
}

export default AddToCartButton;