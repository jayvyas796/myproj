import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-model-driven',
  templateUrl: './product-model-driven.component.html',
  styleUrls: ['./product-model-driven.component.css']
})
export class ProductModelDrivenComponent {
  frm:FormGroup;

  constructor(private fb:FormBuilder){
    //Old way
    // this.frm = new FormGroup({
    //   productId : new FormControl()
    // });

    //New way
    this.frm = this.fb.group({
      productId : this.fb.control(''),
      productCode: this.fb.control('',[Validators.required]),
      productName: this.fb.control('',{updateOn:'blur',validators:[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]}),
      price:this.fb.control(''),
      description: this.fb.group({
        shortDesc: this.fb.control(''),
        fullDesc: this.fb.control(''),
      })
    })

    this.frm.get('productName')?.valueChanges.subscribe(data=>{
      let priceCtrl = this.frm.get('price');
      priceCtrl?.clearValidators();

      if(data!=null && data.indexOf('P')!=-1){
        priceCtrl?.addValidators([Validators.required])
      }
      priceCtrl?.updateValueAndValidity();

    });

  }

  saveProduct(){
    if(this.frm.valid){
      let data = JSON.stringify(this.frm.value);

      alert('product save successfully '+ data);
    }
    else{
      alert('something went wrong');
    }
  }

  disableValidation(){
    //find the element
    let productNameCtrl = this.frm.get('productName');

    //clear validation
    productNameCtrl?.clearValidators();

    //update UI
    productNameCtrl?.updateValueAndValidity();
  }
  resetForm(){
    this.frm.reset();
  }
  updateForm(){

    //this.frm.get('productId')?.setValue(111);

    this.frm.patchValue({
      productId:345,
      productName:'jay',
      description:{
        shortDesc:'test',
        fullDesc:'full test'
      }
    });


  }
}
