import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor (
   private authService : AuthService,
   private router : Router) {}

   canActivate(): boolean {
     if(this.authService.loggedIn()){
       return true
     } else {
       this.router.navigate(['/admin/login'])
       return false
     }
   }
}
