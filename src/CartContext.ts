import { createContext } from "react";
import { CartItem  } from "./models/store-models";

export const CartContext = createContext<CartItem[]>([]);