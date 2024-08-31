import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private name: string="";

  constructor() { 
    console.log('Object is created');
  }

  setName(nm:string){

    this.name=nm;
    console.log('Name is set');
    
  }

  getName(){
    console.log(`Name=${this.name}`);
  }
}
