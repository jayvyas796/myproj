import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.css']
})
export class PipeSampleComponent {

  product: Product;
  DOB:Date;

  constructor(){
    this.product = new Product(101,"Laptop","P101",45000);

    this.DOB = new Date('1996-07-12');
  }
}
