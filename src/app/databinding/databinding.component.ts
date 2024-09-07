import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    productName:string = "Laptop";
    productCode:string = "0012Jay";
    
    authService = inject(AuthService);
    btnText: string = "Login(Toggle)";
    showAlert(){
      alert("Product Name = "+this.productName);
    }

    constructor(){
      if(this.authService.authenticate()){
        this.btnText = "Logged In";
      }
      else{
        this.btnText = "Login (Toggle)";
      }
    }

    login(){
      this.authService.login();
      console.log('Login Value > '+ this.authService.authenticate());
      if(this.authService.authenticate()){
        this.btnText = "Logged In";
      }
      else{
        this.btnText = "Login (Toggle)";
      }
    }
}
