import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  
  let _authService = inject(AuthService);
  let router = inject(Router);

  if(_authService.userToken != null)
  {
    return true;
  }
  else
  {
    router.navigateByUrl('login');
    return false;
  }
};
