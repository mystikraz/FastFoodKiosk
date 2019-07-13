import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

const routes:Routes=[
  {path:'menudetail/:id',component:MenuDetailComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
