import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { OrdersComponent } from './orders/orders.component';

const routes:Routes=[
  {path:'menudetail/:id',component:MenuDetailComponent},
  {path:'orders',component:OrdersComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
