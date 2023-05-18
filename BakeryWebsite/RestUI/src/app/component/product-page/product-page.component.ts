import { createFactoryType } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

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
  constructor(private productService:ProductService, private route:ActivatedRoute, private cartService:CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productId = params['id'];
      this.productService.getProduct(this.productId).subscribe(response => this.product = response);
    });
  }

  addItemToCart(productId:number, quantity:number){
    this.cartService.addItemToCart(productId, quantity);
    this.added=true;
  }

}
