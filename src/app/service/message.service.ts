import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject: Subject<string>;
  constructor() { 
    this.subject = new Subject<string>();
  }

  notify(msg:string){
    this.subject.next(msg);
  }

  getMessage(){
    return this.subject.asObservable();
  }

}
