
import { APP_ID, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate,
  CanActivateChild, CanDeactivate, CanLoad, Router, RouterStateSnapshot,
} from '@angular/router';

// constants
import { URLConstants } from '../constants/routerLink-constants';

// service
import { LocalStorageService } from './local-storage.service';

/****************************************************************************
@PURPOSE      : Dont allow public pages to get accessed. (After Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
@Injectable()
export class CanLoginActivate implements CanActivate {
  URLConstants = URLConstants;
  constructor(public localStorageService: LocalStorageService, public router: Router) { }
  canActivate() {
    if (!this.localStorageService.getToken('accessToken')) {
      return true;
    }
    this.router.navigate([this.URLConstants.HOME]);
    return false;
  }
}
/****************************************************************************/


/****************************************************************************
@PURPOSE      : To allow authorized pages can be activated. (Before Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
@Injectable()
export class CanAuthActivate implements CanActivate {
  constructor(public localStorageService: LocalStorageService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.localStorageService.getToken("accessToken")) {
      return true;
    }
    this.router.navigate(['/login']);
    return false
  }
}
/****************************************************************************/




