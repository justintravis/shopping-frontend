import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import { CartActionsContext } from '../CartActionsContext';
import { Item, CartItem } from '../models/store-models';

interface Props {
  item: Item
}

export function useCart() {

  const userCart = useContext(CartContext);
  const setUserCart = useContext(CartActionsContext) as Function;

  const addItemToCart = ({ item }: Props) => {
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

  const removeItemFromCart = (item: CartItem) => {
    const newCart = userCart.filter(cartItem => cartItem.id !== item.id);
    setUserCart(newCart);
  }

  return {
    addItemToCart,
    removeItemFromCart
  }
}