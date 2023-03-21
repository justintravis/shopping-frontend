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