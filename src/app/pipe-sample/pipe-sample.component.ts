import { Component, Inject } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.css']
})
export class PipeSampleComponent {

  product: Product;
  DOB:Date;
  //router = Inject(Router);//Dirrect way to inject class 

  constructor(private router:Router){
    this.product = new Product(101,"Laptop","P101",45000);

    this.DOB = new Date('1996-07-12');
  }

  redirect(){
    //this.router.navigate(['dir',this.product.productId]);
    this.router.navigate(['dir',this.product.productId],{
      queryParams:{
        city:'mumbai',country:'india'
      }
    });

  }

}
