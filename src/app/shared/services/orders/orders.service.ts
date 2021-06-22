import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOrdersService } from '../../interfaces/iorders-service';
import { Order } from '../../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService implements IOrdersService {
  private url: string;

  constructor(private _http: HttpClient) {
    const baseUrl: string = environment.baseUrl;
    const serviceName: string = 'orders';
    this.url = `${baseUrl}/${serviceName}`;
  }

  public getOrdersByUser(userId: string): Promise<Order[]> {
    return this._http.get<Order[]>(`${this.url}/user/${userId}`).toPromise();
  }

  public getOrderDetails(orderId: string): Promise<Order> {
    return this._http.get<Order>(`${this.url}/${orderId}`).toPromise();
  }

  public createOrder(newOrder: Order): Promise<void> {
    return this._http.post<void>(`${this.url}`, newOrder).toPromise();
  }

  public updateOrder(orderId: string, updatedOrder: Order): Promise<void> {
    return this._http
      .patch<void>(`${this.url}/${orderId}`, updatedOrder)
      .toPromise();
  }

  public cancelOrder(orderId: Order): Promise<void> {
    return this._http.patch<void>(`${this.url}/${orderId}`, {}).toPromise();
  }
}
