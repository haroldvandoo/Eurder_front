import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AppModule} from "../app.module";
import {RouterOutlet} from "@angular/router";



@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        LayoutComponent
    ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
