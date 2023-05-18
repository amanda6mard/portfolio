import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';
import {WishlistService} from "../../service/wishlist.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productId:number = 0;
  product:Product = {id:0,name:"",price:0,description:"",imageFilename:"",category:""};
  products:Product[] = [];
  inputQuantity:number = 1;
  added:boolean = false;
  constructor(private productService:ProductService, private wishlistService:WishlistService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productId = params['id'];
      let product = this.productService.getProduct(this.productId);
      if(product != undefined){
        this.product = product;
      }
    });
  }

  addItemToWishList(productId:number, quantity:number){
    this.wishlistService.addToWishList(productId, quantity);
    this.added=true;
  }

}
