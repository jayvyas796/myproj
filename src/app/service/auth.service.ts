import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn :boolean=false;
  currentUser: User | undefined;
  httpClient = inject(HttpClient);

  constructor() { 
    this.loadAuthUser();
  }

  login(){
    this.isLoggedIn=!this.isLoggedIn;
  }

  authenticate(): boolean{
    return this.isLoggedIn;
  }

  validateUser(loginUser:Login){
    let data = JSON.stringify(loginUser);
    let myHeader = new HttpHeaders({"Content-Type":"application/json"});

    return this.httpClient.post<User>('https://localhost:7241/api/Auth/authenticate',data,{headers:myHeader});
  }

  setAuthUser(user:User){
    localStorage["auth"] = JSON.stringify(user);
  }
  loadAuthUser(){
    if(localStorage["auth"] != null){
      this.currentUser = JSON.parse(localStorage["auth"]);
    }
    else{
      this.currentUser = undefined;
    }
  }

  removeAuthUser(){
    this.currentUser=undefined;
    localStorage.removeItem("auth");
    
  }

}
