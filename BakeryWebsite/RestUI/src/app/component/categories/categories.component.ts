import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:string[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProductCategories().subscribe(
      response => this.categories = response
    )
  }

}
