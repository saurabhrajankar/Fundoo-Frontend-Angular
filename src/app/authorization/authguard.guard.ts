import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthgurdserviceService } from '../Services/authservice/authgurdservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authgurdservice:AuthgurdserviceService,private route:Router){}
  canActivate():boolean{
    if(!this.authgurdservice.getTocken()){
      this.route.navigateByUrl("/Login")
    }
    return this.authgurdservice.getTocken();

     
  }
    
  }
  

