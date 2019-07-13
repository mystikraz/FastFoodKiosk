import { Component } from '@angular/core';
import { MenuService } from './Service/menu.service';
import { MenuItem } from './model/menu-item';

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

  constructor(private menuService:MenuService){}
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
  }

}
