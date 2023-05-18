import { Component, OnInit } from '@angular/core';
import {WishlistService} from "../../service/wishlist.service";
import {wishList} from "../../service/wishlist";

@Component({
  selector: 'app-cart',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  constructor(private wishlistService:WishlistService) {}

  ngOnInit(): void {
  }

  get totalPrice(){
    return this.wishlistService.total.toFixed(2);
  }

  get wishListProducts(){
    return wishList;
  }

  removeFromWishList(id: number) {
    this.wishlistService.removeFromWishList(id);
  }
}
