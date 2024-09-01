import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/service/message.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  productService = inject(ProductService);
  messageService = inject(MessageService);
  router = inject(Router);

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

  deleteProduct(product:Product){
    let confirmDelete = confirm(`Are you sure you want to delete ${product.productName}?`);

    if(confirmDelete){
      this.productService.deleteProduct(product.productId).subscribe({
        next:(res)=>{
          if(res){
            this.messageService.notify('Product deleted successfully');
            this.loadProducts();
          }
        },
        error:(err)=>{
          console.log('Error > '+err);
        }
      })
    }
  }

  editProduct(product:Product){
    this.router.navigate(['templatedriven'],{queryParams:{
      id:product.productId
    }})
  }
}
