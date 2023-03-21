export interface StoreModel {
  storeName: string;
  themeColor: string;
  locale: string;
}

export interface ItemImage {
  url: string
}

export interface Item {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  images: ItemImage[]
}

export interface Items {
  items: Item[];
}