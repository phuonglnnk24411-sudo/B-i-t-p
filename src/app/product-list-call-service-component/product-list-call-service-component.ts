import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  minPrice:number=0
  maxPrice:number=100
  products:Product[]=[]
  constructor(private ps: ProductService){}
  ngOnInit(): void {
  this.products = this.ps.getProduct()
  }
  doFilterByPrice(){
    this.products = this.ps.getProduct()
    .filter(p => p.price >= this.minPrice && p.price <= this.maxPrice);
  }
}
