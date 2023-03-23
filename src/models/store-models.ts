import { DispatchWithoutAction } from "react";

export interface StoreModel {
  storeName: string;
  themeColor: string;
  locale: string;
}

export interface ItemImage {
  url: string
}

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface Item {
  id: number;
  name: string;
  price: number;
  qtyAvailable: number;
  images: ItemImage[]
}

export interface Items {
  items: Item[];
}

export interface CartActionProps {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART';
  item: CartItem;
}

export interface CartDispatchProps {
  dispatch: () => void;
}

export interface CartProps {
  cart: CartItem[];
  action: CartActionProps;
}