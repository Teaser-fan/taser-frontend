import { Category } from "./category";

export interface ICategoriesService {
  getCategories(skip: number, limit: number): Promise<Category[]>;
  getCategoryDetails(id: number): Promise<Category>;
}
