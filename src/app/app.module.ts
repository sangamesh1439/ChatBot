import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MenuComponent }  from './menu.component';
import {FormsModule} from "@angular/forms";
import {Routes,RouterModule} from "@angular/router"

import {HttpModule} from "@angular/http"
import {MessageDashboard} from "./message-dashboard.component"


@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule],
  declarations: [ AppComponent,MenuComponent,MessageDashboard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
