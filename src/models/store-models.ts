export interface ItemImage {
  url: string
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

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}