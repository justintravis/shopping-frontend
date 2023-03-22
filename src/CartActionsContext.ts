import { createContext } from "react";
import { CartItem } from "./models/store-models";

export const CartActionsContext = createContext<Function | void>(undefined);