import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, public cartService:CartService) { }

  ngOnInit(): void {
  }

  searchProducts(searchString:string){
    if(searchString === ''){
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/find/'+searchString]);
    }

  }

}
