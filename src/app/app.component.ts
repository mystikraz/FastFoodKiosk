import { Component } from '@angular/core';
import { MenuService } from './Service/menu.service';
import { OrdersService } from './Service/orders.service';
import { MenuItem } from './model/menu-item';
import { orderedItem } from './model/orderedItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

menugroups:MenuItem[];
selectedMenu:MenuItem;
selectedChildMenu:MenuItem;
quantity:number=0;
childMenuName:string;
orderedItemList:orderedItem[]=[];
  constructor(private menuService:MenuService,private orderService:OrdersService){}
ngOnInit(){
  this.getMenuGroups();
}
  getMenuGroups() {
    this.menuService.getMenuByGroup()
    .subscribe(menuGroups=>this.menugroups=menuGroups)
  }
  onSelect(menu:MenuItem):void{
    this.selectedMenu=menu;
    console.log("selected:"+this.selectedMenu.id);
  }

  addQuantity(){
    ++this.quantity;
    console.log(this.quantity)
  }
  subQuantity(){
    if(this.quantity<1)return;
    --this.quantity;
    console.log(this.quantity)
  }

  getSelectedChildMenu(menu:MenuItem){
    this.selectedChildMenu=menu;
    this.childMenuName=menu.name;
    console.log(this.selectedChildMenu);
    console.log(this.selectedChildMenu.name);
    console.log(this.selectedChildMenu);

  }

  addToOrder(){
    console.log('addtoorder');
    console.log(this.selectedChildMenu);
    let order =new orderedItem();
      order.menu=this.selectedChildMenu;
      console.log('order: '+order.menu);
    for(var i=0;i<this.quantity;i++){
      // this.orderedItemList.push(order);
      this.orderService.add(order);
    }

      console.log('OrderedItemList: '+this.orderedItemList);
  }
  showOrder(){
    console.log('showOrder');
  }

}
