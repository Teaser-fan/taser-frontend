import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../../interfaces/category';
import { ICategoriesService } from '../../interfaces/icategories-service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService implements ICategoriesService {
  private url: string;

  constructor(private _http: HttpClient) {
    const baseUrl: string = environment.baseUrl;
    const serviceName: string = 'categories';
    this.url = `${baseUrl}/${serviceName}`;
  }

  public getCategories(
    skip: number = 0,
    limit: number = 20
  ): Promise<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('skip', skip.toString());
    params = params.set('limit', limit.toString());
    return this._http.get<any>(this.url, { params }).toPromise();
  }

  public getCategoryDetails(id: number): Promise<Category> {
    return this._http.get<Category>(this.url).toPromise();
  }
}
