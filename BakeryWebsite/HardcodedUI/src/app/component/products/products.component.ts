import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  category:string = "";
  searchString:string = "";
  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe(params=>{
      this.category = params['category'];
      this.searchString = params['searchString'];
      if(this.category !== undefined){
        this.products = this.productService.getProductsInCategory(this.category);
      } else if( this.searchString !== undefined) {
        this.products = this.productService.searchProducts(this.searchString);
      } else {
        this.products = this.productService.getProducts();
      }

    });


  }

}
