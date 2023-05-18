import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartComponent } from '../component/cart/cart.component';
import { Cart } from '../model/Cart';
import { CartItem } from '../model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  sessionCart:Cart = {id:0, items:{}};
  baseUrl:string = "http://localhost:8082/api/v1/carts"
  constructor(private http:HttpClient) { }
  createCart():void {
    this.http.post<Cart>(this.baseUrl, this.sessionCart).subscribe(response => {
      this.sessionCart = response;
    });
  }

  getCarts():Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl);
  }

	getCart(id:number):Observable<Cart>{
    return this.http.get<Cart>(this.baseUrl+"/"+id);
  }

  updateCart():void {
      this.http.put<Cart>(this.baseUrl, this.sessionCart).subscribe(response => this.sessionCart = response);
  }

  addItemToCart(productId:number, quantity:number):void {
    let cartItem:CartItem = {id:0, productId: productId, quantity:quantity}
     this.http.post<Cart>(this.baseUrl + "/cartItems/"+this.sessionCart.id, cartItem).subscribe(response => this.sessionCart = response)
  }

  updateItemInCart(productId:number, quantity:number):void {
    let cartItem:CartItem = {id:0, productId: productId, quantity:quantity}
     this.http.put<Cart>(this.baseUrl + "/cartItems/"+this.sessionCart.id, cartItem).subscribe(response => this.sessionCart = response)
  }
  deleteItemFromCart(productId:number):void {
    let items:any = this.sessionCart.items;
    delete items[productId];
    this.sessionCart.items = items;
    this.updateCart();
  }
}
