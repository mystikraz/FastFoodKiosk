import { Injectable } from '@angular/core';
import { orderedItem } from '../model/orderedItem';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: orderedItem[] = [];

  constructor() { }

  add(order: orderedItem) {
    this.orders.push(order);
  }
  clear() {
    this.orders = [];
  }
}
