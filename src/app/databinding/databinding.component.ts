import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    productName:string = "Laptop";
    productCode:string = "0012Jay";
    
    showAlert(){
      alert("Product Name = "+this.productName);
    }
}
