import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-template-driven',
  templateUrl: './product-template-driven.component.html',
  styleUrls: ['./product-template-driven.component.css']
})
export class ProductTemplateDrivenComponent {
  product:Product;

  constructor(){
    this.product = new Product();

  }

  saveProduct(frm:NgForm){
    if(frm.valid){
      //save in db
      alert('Product Saved successfully');
    }
    else{
      alert('Validation Error');
    }
  }
}
