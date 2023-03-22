import React, { useState, useRef, useContext } from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { CartContext } from '../CartContext';
import { Item, CartItem } from '../models/store-models';

interface Props extends Item {
  handleAddItemToCart: Function;
  handleRemoveItemFromCart: Function;
}

const ItemPDP = ({ id, name, price, qtyAvailable, images, handleAddItemToCart }: Props) => {
  const cart: CartItem[] = useContext(CartContext); // Use context to display how many items are already in user's cart

  const getQtyInCart = () : number | undefined => {
    return cart.find(i => Number(i.id) === id)?.quantity;
  }

  const qtyInCart = getQtyInCart();

  return (
    <div>
      <h2>{ name }</h2>
      <ImageCarousel images={ images } width={ 250 } height={ 250 } />
      <p>{ price }</p>
      { qtyAvailable > 0
        ? <button onClick={ () => handleAddItemToCart() }>Add to Cart</button>
        : 'Join Waitlist'
      }
      <p>{ qtyInCart && qtyInCart > 0 ? `You have ${ qtyInCart } in your cart` : '' }</p>
    </div>
  )
}

export default ItemPDP;