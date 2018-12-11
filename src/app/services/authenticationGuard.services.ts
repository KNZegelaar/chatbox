import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.services";

@Injectable()
export class AuthenticationGuard implements CanActivate{
  constructor(private authenticationService: AuthenticationService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authenticationService.isAuthenticated();
  }
}
