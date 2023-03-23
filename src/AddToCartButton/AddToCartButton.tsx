import React, { useState, useRef, useContext } from 'react'
import { CartActionProps, Item } from '../models/store-models';
import { CartActions } from '../types';
import { CartContext } from '../CartContext';

interface Props {
  item: Item
}

const AddToCartButton = ({ item }: Props) => {
  const { dispatch } = useContext(CartContext);
  console.log(dispatch);

  return (
    <button onClick={ () => dispatch({ type: CartActions.Add, item }) }>Add to Cart</button>
  )
}

export default AddToCartButton;