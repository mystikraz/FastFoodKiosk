import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../Service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
  }

}
