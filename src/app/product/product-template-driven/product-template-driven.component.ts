import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/service/message.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-template-driven',
  templateUrl: './product-template-driven.component.html',
  styleUrls: ['./product-template-driven.component.css']
})
export class ProductTemplateDrivenComponent implements OnInit {
  product:Product;
  isEditMode:boolean= false;

  constructor(private messageService:MessageService,
      private productService:ProductService,
      private activatedRoute:ActivatedRoute
  ){
    this.product = new Product();

  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      let pid = data['id'];
      if(pid!=undefined){
        this.isEditMode=true;
        this.productService.getProductById(pid).subscribe({
          next:(res)=>{
            this.product = res;
          },
          error:(err)=>{
            console.log('Error> '+err);
          }
        })
      }
    })
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
  newProduct(){
    this.product=new Product();
    this.isEditMode=false; 
  }
}
