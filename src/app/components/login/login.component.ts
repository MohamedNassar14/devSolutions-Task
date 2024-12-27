import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _authService:AuthService, private router:Router) {}

  loginForm:FormGroup = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  get getUserName()
  {
    return this.loginForm.get('userName');
  }

  get getPassword()
  {
    return this.loginForm.get('password');
  }

  submitForm()
  {
    if((this._authService.userData.userName === this.loginForm.value.userName)&& (this._authService.userData.password === this.loginForm.value.password))
    {
      localStorage.setItem('userToken', JSON.stringify(this.loginForm.value));
      this._authService.saveUserData();
      this.router.navigateByUrl('home');
    }
    else if((this._authService.adminData.userName === this.loginForm.value.userName)&& (this._authService.adminData.password === this.loginForm.value.password))
    {
      localStorage.setItem('adminToken', JSON.stringify(this.loginForm.value));
      this._authService.saveAdminData();
      this.router.navigateByUrl('admin');
    }
  }
  ngOnInit(): void { 
  }
}
