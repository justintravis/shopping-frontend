import { CartItem, Item, CartActions } from '../models/store-models';

export interface ActionProps {
  item: Item,
  type: CartActions.Add | CartActions.Remove
}

export const cartReducer = (cart: CartItem[], action: ActionProps) => {
  const { item } = action;

  switch (action.type) {
    case CartActions.Add:
      const itemInCart = cart.find(userCartItem => {
        return userCartItem.id === item.id;
      });
    
      if (itemInCart) {
        const newCart = cart.map(cartItem => {
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
        });
        return newCart;
      } else {
        let cartItem: CartItem = {
          id: item.id,
          name: item.name,
          quantity: 1,
          price: item.price,
          totalPrice: item.price
        }
    
        return [
          ...cart,
          cartItem
        ];
      }
    case CartActions.Remove:
      return cart.filter(cartItem => cartItem.id !== item.id);
    default:
      return cart;
  }
}