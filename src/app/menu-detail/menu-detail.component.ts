import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { MenuService } from '../Service/menu.service';
import { MenuItem } from '../model/menu-item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItems } from '../mock-data/mock-menu-items';



@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

// menuItems:MenuItem[];
menuItems:MenuItem[];
@Input() selectedParentMenu:MenuItem;
showingMenuItems:MenuItem[];
display='none'; //default Variable
@Output() selectedChildMenu:EventEmitter<MenuItem>=new EventEmitter();

  constructor(private route:ActivatedRoute,private menuService:MenuService,private location:Location) { }

  ngOnInit() {
    // this.getMenuItem();
  }
  getMenuItem():void {
    // const id=+this.route.snapshot.paramMap.get('id');
    // console.log(id);
    if(this.selectedParentMenu==null) return;
    this.menuService.getMenuItem(this.selectedParentMenu.id)
    .subscribe(menuItem=>this.menuItems=menuItem);
// console.log(this.menuItems);
console.log('from menudetail: '+this.selectedParentMenu);

console.log(this.showingMenuItems);
  }
  ngOnChanges() {
  this.getMenuItem();
    // alert(this.selectedMenu.id) //this comes undefined
    // alert(this.menuItems) //this comes undefined
//    var menus=MenuItems.find(x=>x.id==this.selectedMenu.id);
//    alert(menus);
//     this.showingMenuItems.push(menus);
// alert(this.showingMenuItems)
}

onSelect(menu:MenuItem){
  this.selectedChildMenu.emit(menu);
}

openModalDialog(){
  console.log('openModelDialog');
  this.display='block'; //Set block css
}

closeModalDialog(){
this.display='none'; //set none css after close dialog
}
  goBack():void{
    this.location.back();
  }
  
}
