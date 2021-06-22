export interface Order {
  _id?: string;
  user: string;
  products: string[];
  totalAmount: number;
  createdDate?: Date;
  status?: String;
  shippingDate?: Date;
}
