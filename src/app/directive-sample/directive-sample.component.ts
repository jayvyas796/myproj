import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.css']
})
export class DirectiveSampleComponent {
  num:number;
  colors: string[];
  product:Product[];
  selectedColor:string = "red";
  constructor(){
    this.num = 0;
    this.colors = ["blue","red","green"];

    let p1= new Product(101,"P101","Laptop",1000);
    let p2 = new Product(102,"P102","Mouse",2000);
    let p3 = new Product(103,"P103","Charger",500);

    this.product = [];
    this.product.push(p1);
    this.product.push(p2);
    this.product.push(p3);


  }
  AddNewProduct(){
    let p4 = new Product(104,"P104","Cable",540);
    this.product.push(p4);
  }
}
