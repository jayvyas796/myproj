import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn :boolean=false;

  constructor() { }

  login(){
    this.isLoggedIn=!this.isLoggedIn;
  }

  authenticate(): boolean{
    return this.isLoggedIn;
  }
}
