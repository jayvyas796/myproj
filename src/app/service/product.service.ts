import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);
  constructor() { }

  getProducts(){
    return this.httpClient.get<Product[]>('https://localhost:7241/api/ProductAPI/getall');
  }
  addProduct(productToInsert:Product){
    let myHeader = new HttpHeaders({"Content-Type":"application/json"});

    let data = JSON.stringify(productToInsert);
    return this.httpClient.post<boolean>('https://localhost:7241/api/ProductAPI/add',data,{headers:myHeader});
  }
  deleteProduct(pid:number){
    return this.httpClient.delete<boolean>(`https://localhost:7241/api/ProductAPI/delete/${pid}`);
  }

  getProductById(pid:number){
    return this.httpClient.get<Product>(`https://localhost:7241/api/ProductAPI/get/${pid}`);
  }
}
