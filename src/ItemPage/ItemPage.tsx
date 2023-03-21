import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { Item } from '../models/store-models';
import ItemPDP from '../ItemPDP/ItemPDP';
import items from '../store-items.json';

interface Props {
  handleAddItemToCart: Function;
}

const ItemPage = ({ handleAddItemToCart }: Props) => {
  const { id: itemId } = useParams<string>();
  const item: Item = items.find(i => i.id === Number(itemId));
  const { id, name, price, qtyAvailable, images } = item;

  return (
    <>
      <ItemPDP
        id={ id }
        name={ name }
        price={ price }
        qtyAvailable={ qtyAvailable }
        images={ images }
        handleAddItemToCart={ () => handleAddItemToCart(item) }
      />
    </>
  )
}

export default ItemPage;