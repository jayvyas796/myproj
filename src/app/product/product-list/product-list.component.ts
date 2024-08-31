import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  productService = inject(ProductService);
  products: Product[];
  subscription : Subscription|undefined;

  constructor(){
    this.products=[];
  }
  ngOnDestroy(): void {
    console.log('Product List destroyed');
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(){
   this.subscription =  this.productService.getProducts().subscribe({
      next:(res)=>{
        this.products = res;
      },
      error:(err)=>{
        console.log('Error > '+err);
      }
    })
  }
}
