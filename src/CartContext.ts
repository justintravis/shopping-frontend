import { createContext, Dispatch } from "react";
import { CartProps, CartDispatchProps } from "./models/store-models";

interface ContextProps {
  cart: CartProps | [];
  dispatch: Dispatch<any>;
}

export const CartContext = createContext<ContextProps>({
  cart: [],
  dispatch: () => null
});