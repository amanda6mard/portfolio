import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string = "http://localhost:8081/api/v1/products";
  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
  getProduct(id:number):Observable<Product> {
    return this.http.get<Product>(this.baseUrl+"/"+id);
  }
  createProduct(product:Product):Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
  deleteProduct(id:number):void {
    this.http.delete(this.baseUrl + "/" + id);
  }
  getProductCategories():Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl+"/categories");
  }
  searchProducts(searchString:string):Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/filter/' + searchString );
  }
  getProductsInCategory(category:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + "/categories/" + category);
  }
}
