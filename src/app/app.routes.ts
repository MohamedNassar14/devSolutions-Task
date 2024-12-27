import { Routes } from '@angular/router';
import { userGuard } from './guards/user.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = 
[
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', canActivate:[userGuard] ,loadComponent:()=> import('./components/home/home.component').then((c)=>c.HomeComponent)},
    {path: 'admin', canActivate:[adminGuard] ,loadComponent:()=> import('./components/dashboard/dashboard.component').then((c)=>c.DashboardComponent)},
    {path: 'login', loadComponent:()=> import('./components/login/login.component').then((c)=>c.LoginComponent)}
];
