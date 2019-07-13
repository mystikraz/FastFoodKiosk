import { Injectable } from '@angular/core';
import { of,observable, Observable } from 'rxjs';
import { MenuItem } from '../model/menu-item';
import { MenuItems } from '../mock-data/mock-menu-items';


@Injectable({
    providedIn:'root'//provides dependency inkection service at root level
})

export class MenuService{
    constructor(){}

    getMenuByGroup():Observable<MenuItem[]>{
        return of(MenuItems.filter(x=>x.menuType==='G'));
    }
    getMenuItem(id:number):Observable<MenuItem[]>{
        var res=MenuItems.find(x=>x.parent==id);
        return of(MenuItems.filter(x=>x.parent===id));
    }
    getAllMenuItem():Observable<MenuItem[]>{
        return of(MenuItems);
    }
    
}