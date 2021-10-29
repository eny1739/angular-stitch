import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router:Router){}
  
  canActivate():boolean{
    return this.authorize()
  }

  canActivateChild():boolean{
    return this.authorize()
  }

  private authorize():boolean{
    const authorize:boolean = (sessionStorage.getItem('token') !== null)

    if(!authorize){
      alert('Mohon maaf anda harus login terlebih dahulu')
      this.router.navigateByUrl('/')
    }

    return authorize;
  }
  
}
