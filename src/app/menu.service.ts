import {Injectable} from "@angular/core"

@Injectable ()

export class MenuService{
    private menuItems:string[];
    constructor(){
         this.menuItems = ["home","products","contacts","books","help"];
    }
    getItems(){
        return this.menuItems;

    }

}