import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);
  authService = inject(AuthService);
  constructor() { }

  getProducts(){
    return this.httpClient.get<Product[]>(`${environment.BASEURL}/api/ProductAPI/getall`);
  }
  addProduct(productToInsert:Product){
    let myHeader = new HttpHeaders({"Content-Type":"application/json"});

    let data = JSON.stringify(productToInsert);
    return this.httpClient.post<boolean>(`${environment.BASEURL}/api/ProductAPI/add`,data,{headers:myHeader});
  }
  deleteProduct(pid:number){
    return this.httpClient.delete<boolean>(`${environment.BASEURL}/api/ProductAPI/delete/${pid}`);
  }

  getProductById(pid:number){
    return this.httpClient.get<Product>(`${environment.BASEURL}/api/ProductAPI/get/${pid}`);
  }
}
