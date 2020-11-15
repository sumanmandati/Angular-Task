import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// constants
import { URLConstants } from '../../common/constants/routerLink-constants';

// service
import { LocalStorageService } from '../../common/service/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {

  public currentYear: any = new Date().getFullYear();
  Verticalscrollbar: any = {};
  URLConstants = URLConstants;

  constructor(private localStorageService: LocalStorageService, private router: Router) {
    if (!this.localStorageService.getToken('accessToken')) {
      this.router.navigate([this.URLConstants.LOGIN]);
    }
  }

  ngOnInit() {
  }

  overlayHide() {
    $('body').removeClass('asideleft-on');
    $('body').removeClass('asideleft-minimize');
  }
}
