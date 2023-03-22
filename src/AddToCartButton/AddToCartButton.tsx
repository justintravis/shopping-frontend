import React, { useState, useRef, useContext } from 'react'
import { CartItem, Item } from '../models/store-models';
import { CartContext } from '../CartContext';
import { CartActionsContext } from '../CartActionsContext';

interface Props {
  item: Item
}

const AddToCartButton = ({ item }: Props) => {
  const userCart = useContext(CartContext);
  const setUserCart = useContext(CartActionsContext) as Function;

  const addItemToCart = () => {
    const itemInCart = userCart.find(userCartItem => {
      return userCartItem.id === item.id;
    });
  
    if (itemInCart) {
      const newCart = userCart.map(cartItem => {
        if (cartItem.id === item.id) {
          const newQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newQuantity,
            totalPrice: newQuantity * cartItem.price
          };
        } else {
          return cartItem;
        }
      }) as CartItem[];
      setUserCart(newCart);
    } else {
      let cartItem: CartItem = {
        id: item.id,
        name: item.name,
        quantity: 1,
        price: item.price,
        totalPrice: item.price
      }
  
      setUserCart([
        ...userCart,
        cartItem
      ]);
    }
  }

  return (
    <button onClick={ () => addItemToCart() }>Add to Cart</button>
  )
}

export default AddToCartButton;