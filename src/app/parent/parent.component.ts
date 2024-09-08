import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy {
  customers:Customer[] = [];
  customer:Customer;
  constructor(){
    this.customer = new Customer();

  }
  ngOnDestroy(): void {
    console.log('On Destroy');
  }
  ngOnInit(): void {
    console.log('On Init Parent');
  }
  add(){
    let ob = Object.assign({},this.customer);
    this.customers.push(ob);
    alert('new customr added');
  }
}
