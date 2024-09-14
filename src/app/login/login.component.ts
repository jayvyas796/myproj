import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  frm :FormGroup ;
  authService = inject(AuthService);
  router = inject(Router);
  constructor(private fb:FormBuilder){
    this.frm = this.fb.group({
      userName:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required])
    });
  }

  Login(){
    if(this.frm.valid){
      let loginUser = new Login();
      loginUser.userName = this.frm.get('userName')?.value;
      loginUser.password = this.frm.get('password')?.value;

      this.authService.validateUser(loginUser).subscribe({
        next:(response) => {
          this.authService.setAuthUser(response);
          this.router.navigate(['databinding']);
        }
      })


    }
  }
}
