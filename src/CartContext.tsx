import React, { createContext, useContext, useReducer } from "react";
import { CartActions, CartItem } from "./models/store-models";
import { cartReducer } from "./reducers/cartReducer";

const CartContext = createContext<CartItem[] | null>(null);
const CartActionsContext = createContext<React.Dispatch<any> | null>(null);

export const useCart = () => {
  const currentCartContext = useContext(CartContext);

  if (!currentCartContext) {
    throw new Error('useCart has to be used within <CartContext.Provider>');
  }

  return currentCartContext;
}

export const useCartDispatch = () => {
  const currentCartDispatch = useContext(CartActionsContext);

  if (!currentCartDispatch) {
    throw new Error('useCartDispatch has to be used within <CartActionsContext.Provider>');
  }

  return currentCartDispatch;
}

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={ cart }>
      <CartActionsContext.Provider value={ dispatch }>
        { children }
        </CartActionsContext.Provider>
    </CartContext.Provider>
  )
}