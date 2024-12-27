import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor()
  {
    if(localStorage.getItem('userToken') != null)
    {
      this.saveUserData();
    }
    if(localStorage.getItem('adminToken') != null)
    {
      this.saveAdminData()
    }
  }

  userToken:any;
  adminToken:any;


  userData= 
  {
    userName: 'test',
    password: 'testUser'
  }


  adminData= {
    userName: 'admin',
    password: 'adminUser'
  }

  saveUserData()
  {
    let userLogged = JSON.parse(localStorage.getItem('userToken')!);
    this.userToken = userLogged;
  }
  saveAdminData()
  {
    let adminLogged = JSON.parse(localStorage.getItem('adminToken')!);
    this.adminToken = adminLogged;
  }
}
