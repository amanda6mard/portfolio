import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any;
  cartProducts:Map<CartItem, Product> = new Map();
  cartId:number = 0;
  constructor(private cartService:CartService, private productService:ProductService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.cartId = params['id'];
      this.loadCartItems()
      console.log(this.items)
    });
  }
  loadCartItems():void {
    this.items = this.cartService.sessionCart.items;
    for(let productId in this.items){
      this.productService.getProduct(this.items[productId].productId).subscribe(response=> this.cartProducts.set(this.items[productId], response));
    }
  }
  remove(id:number):void {
    this.cartService.deleteItemFromCart(id);
    this.loadCartItems();
  }


}
