import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/service/message.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-template-driven',
  templateUrl: './product-template-driven.component.html',
  styleUrls: ['./product-template-driven.component.css']
})
export class ProductTemplateDrivenComponent {
  product:Product;

  constructor(private messageService:MessageService,
      private productService:ProductService
  ){
    this.product = new Product();

  }

  saveProduct(frm:NgForm){
    if(frm.valid){
      //save in db
      this.productService.addProduct(this.product).subscribe({
        next:(res) => {
          if(res){
            this.messageService.notify('Product Saved Successfully');
          }
        },
        error:(err) => {
          console.log('Error > '+err);
        }
      })
      //alert('Product Saved successfully');
      this.messageService.notify('Product saved successfully');
    }
    else{
      this.messageService.notify('Validation Error');
    }
  }
}
