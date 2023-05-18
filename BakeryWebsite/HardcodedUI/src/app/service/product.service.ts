import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import {mockproducts} from "./mockproducts";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts():Product[] {
    return mockproducts;
  }
  getProduct(id:number):Product|undefined {
    return mockproducts.find(product => product.id == id);
  }
  getProductCategories():string[] {
    let categories:string[] = [];
    for(let product of mockproducts){
      if(!categories.includes(product.category)){
        categories.push(product.category)
      }
    }
    return categories.sort();
  }
  searchProducts(searchString:string):Product[] {
    return mockproducts.filter(product => product.name.includes(searchString));
  }
  getProductsInCategory(category:string):Product[]{
    return mockproducts.filter(product => product.category === category);
  }
}
