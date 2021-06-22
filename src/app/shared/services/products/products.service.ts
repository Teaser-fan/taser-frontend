import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProductsService } from '../../interfaces/iproducts-service';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements IProductsService {
  private url: string;

  constructor(private _http: HttpClient) {
    const baseUrl: string = environment.baseUrl;
    const serviceName: string = 'products';
    this.url = `${baseUrl}/${serviceName}`;
  }

  public getProducts(skip: number = 0, limit: number = 20): Promise<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('skip', skip.toString());
    params = params.set('limit', limit.toString());
    return this._http.get<any>(this.url, { params }).toPromise();
  }

  public getProductDetails(id: string): Promise<Product> {
    return this._http.get<Product>(`${this.url}/${id}`).toPromise();
  }

  public getProductsByCategory(categoryId: number): Promise<Product[]> {
    return this._http
      .get<Product[]>(`${this.url}/category/${categoryId}`)
      .toPromise();
  }

  public addProductToFavorites(productId: number): Promise<void> {
    return this._http
      .post<void>(`${this.url}/favorite/${productId}`, {})
      .toPromise();
  }
}
