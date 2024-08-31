import { Component, Inject } from '@angular/core';
import { MessageService } from './service/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproj';
  message:string|undefined;


  constructor(private messageService: MessageService){
    this.messageService.getMessage().subscribe({
     next:(res) =>{
      this.message=res;
      setTimeout(() => {
        this.message = "";
      }, 2000);
     },
     error:(err)=>{
      console.log('Error');
     } 
    });
  }

  callme(){
    this.messageService.getMessage().subscribe({
      next:(res) =>{
        console.log('Last Message > '+res);
      }
    })
  }

}
