import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { HomeComponent } from './component/home/home.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"product/:id", component: ProductPageComponent},
  {path:"cart/:id", component: CartComponent},
  {path:"checkout", component: CheckoutComponent},
  {path:"products-by-category/:category", component: ProductsComponent},
  {path:"find/:searchString", component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
