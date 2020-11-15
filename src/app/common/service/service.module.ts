import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// service
import { CommonService } from './common.service';
import { LocalStorageService } from './local-storage.service';
import { LogoutService } from './logout.service';
import { RestrictKeyPressService } from './restrict-key-press.service';
import { ShowErrorService } from './show-error.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    CommonService,
    LocalStorageService,
    LogoutService,
    RestrictKeyPressService,
    ShowErrorService
  ],
})
export class ServiceModule { }
