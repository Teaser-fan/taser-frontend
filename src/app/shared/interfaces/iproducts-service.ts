import { Product } from './product';

export interface IProductsService {
  getProducts(skip: number, limit: number): Promise<Product[]>;
  getProductDetails(id: string): Promise<Product>;
  getProductsByCategory(categoryId: number): Promise<Product[]>;
  addProductToFavorites(productId: number): Promise<void>;
}
