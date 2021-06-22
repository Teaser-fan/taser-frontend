import { Category } from './category';

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  createdDate: Date;
  images?: string[];
}
