import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import {mockproducts} from "./mockproducts";
import {wishList} from "./wishlist";
import {ProductService} from "./product.service";
import {WishListItem} from "../model/WishListItem";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
    total:number = 0;

    constructor(private productService:ProductService) {
    }

    addToWishList(id:number, quantity:number){
      let cartItem = this.getKey(id);
      let currentQuantity = 0;
      if(cartItem !== undefined ){
        currentQuantity = cartItem.quantity;
        wishList.delete(cartItem);
      }
      let product = this.productService.getProduct(id);
      if(product !== undefined){
        wishList.set({productId:id, quantity: (quantity + currentQuantity)}, product);
      }
      this.calcTotal();
    }

    removeFromWishList(id:number){
      let cartItem = this.getKey(id);
      if(cartItem !== undefined ){
        wishList.delete(cartItem);
        this.calcTotal();
      }
    }

    calcTotal() {
      this.total = 0;
      for(let entry of wishList.entries()){
        this.total += (entry[0].quantity * entry[1].price);
      }
    }

    getKey(id:number) : WishListItem | undefined {
      let cartItem = undefined;
      for(let key of wishList.keys()){
        if(key.productId == id){
          cartItem = key;
          break;
        }
      }
      return cartItem;
    }

}
