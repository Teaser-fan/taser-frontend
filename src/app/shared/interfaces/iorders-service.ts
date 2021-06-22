import { Order } from './order';

export interface IOrdersService {
  getOrdersByUser(userId: string): Promise<Order[]>;
  getOrderDetails(orderId: string): Promise<Order>;
  createOrder(newOrder: Order): Promise<void>;
  updateOrder(orderId: string, updatedOrder: Order): Promise<void>;
  cancelOrder(orderId: Order): Promise<void>;
}
