import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {

  }

  canActivate(): boolean {
    return true
  }

  //canDeactivate determines whether we can navigate from the route before the component gets deactiavted

  //canLoad - the following route loads the adminModule lazily.Angualr loads it only when the user naviagtes to the admin route - it is also used when we don not want to unauthorized user to navigate to any of the routes of the module and also stop then even see the source code of the module.

  //canActivateChild is same like canActiavte just the difference canActivate will restrict the main route with child route but in activate child if we want the user can see the main route but the child route can only be accessible by admin then we will create service for child routes.


}