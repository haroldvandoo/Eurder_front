export enum StockUrgency {
  HIGH,
  MEDIUM,
  LOW
}

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  amountOfStock: number;
  stockUrgency: StockUrgency;
}
