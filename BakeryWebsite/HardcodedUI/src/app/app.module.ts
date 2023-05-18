import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductPageComponent,
    NavbarComponent,
    WishListComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
