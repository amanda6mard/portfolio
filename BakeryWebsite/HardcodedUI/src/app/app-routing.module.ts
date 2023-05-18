import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:"products", component: ProductsComponent},
  {path:"", component: ProductsComponent},
  {path:"product/:id", component: ProductPageComponent},
  {path:"wishlist", component: WishListComponent},
  {path:"products-by-category/:category", component: ProductsComponent},
  {path:"find/:searchString", component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
