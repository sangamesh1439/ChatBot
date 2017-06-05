import {Component} from '@angular/core'
import {MenuService} from "./menu.service"

@Component({
    selector :"menu",
    template: `
  `,
providers: [MenuService]
})



export class  MenuComponent{

    menuItems:string[];
    constructor(menuservie : MenuService){
        this.menuItems = menuservie.getItems();

    }
}