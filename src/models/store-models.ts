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

export enum CartActions {
  Add = 'ADD_TO_CART',
  Remove = 'REMOVE_FROM_CART'
}