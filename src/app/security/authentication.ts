import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../service/user.service";
 
@Injectable(
    {
        providedIn: 'root'
    }
)
export class customAuthentication implements CanActivate
{
    constructor(private myRouter: Router, private uservice:UserService)
    {
     
    }
    canActivate(): boolean{
      // this.myRouter.navigate(['employee-list'])
      if(this.uservice.getSession())
      {
        return true;
      }
      else{
        this.myRouter.navigate(['log-in'])
        return false;
      }
    }
 
}