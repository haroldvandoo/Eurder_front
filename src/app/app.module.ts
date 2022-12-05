import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { ItemsOverviewComponent } from '../model/items-overview/items-overview.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ItemsOverviewComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    ItemsOverviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
