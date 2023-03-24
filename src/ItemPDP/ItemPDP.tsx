import React, { useState, useRef, useContext, Suspense, lazy } from 'react'
import { useCart } from '../CartContext';
import { Item, CartItem } from '../models/store-models';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

import './ItemPDP.css';

interface Props {
  item: Item;
}

const IMAGE_WIDTH = 250;
const IMAGE_HEIGHT = 250;

const Loader = () => {
  // Make the loader the same size as the carousel so it
  // doesn't cause the page to jump when the component actually loads
  return (
    <div className='PDP-Loader' style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT + 80 }}>Loading images...</div>
  )
}

const ItemPDP = ({ item }: Props) => {
  const { id, name, price, qtyAvailable, images } = item;
  const ImageCarousel = lazy(() => import('../ImageCarousel/ImageCarousel.js'));

  const cart: CartItem[] = useCart(); // Use context to display how many items are already in user's cart

  const getQtyInCart = () : number | undefined => {
    return cart.find(i => Number(i.id) === id)?.quantity;
  }

  const qtyInCart = getQtyInCart();

  return (
    <div>
      <h2>{ name }</h2>
      <Suspense fallback={ <Loader /> }>
        <ImageCarousel images={ images } width={ IMAGE_WIDTH } height={ IMAGE_HEIGHT } />
      </Suspense>
      <p>{ price }</p>
      { qtyAvailable > 0
        ? <AddToCartButton item={ item } />
        : 'Join Waitlist'
      }
      <p>{ qtyInCart && qtyInCart > 0 ? `You have ${ qtyInCart } in your cart` : '' }</p>
    </div>
  )
}

export default ItemPDP;