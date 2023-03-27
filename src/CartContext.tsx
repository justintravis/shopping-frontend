import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import { CartActions, Item, CartItem } from "./models/store-models";
import { cartReducer, CART_LS_KEY, initializer } from "./reducers/cartReducer";

interface ProductsContextTypes {
  products: Item[];
  setProducts: React.SetStateAction<any>
};

const ProductsContext = createContext<ProductsContextTypes | null>(null);
const CartContext = createContext<CartItem[] | null>(null);
const CartActionsContext = createContext<React.Dispatch<any> | null>(null);

export const useProducts = () => {
  const currentProductsContext = useContext(ProductsContext);

  if (!currentProductsContext) {
    throw new Error('useProducts has to be used within <ProductsContext.Provider>');
  }

  return currentProductsContext;
}

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
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, [], initializer);
  
  useEffect(() => {
    localStorage.setItem(CART_LS_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <CartContext.Provider value={ cart }>
        <CartActionsContext.Provider value={ dispatch }>
          { children }
          </CartActionsContext.Provider>
      </CartContext.Provider>
      </ProductsContext.Provider>
  )
}