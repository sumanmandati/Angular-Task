import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { AppRoutingModule } from './app-routing.module';


// Service
import { ServiceModule } from './common/service/service.module';

// Common
import { CanAuthActivate, CanLoginActivate } from './common/service/auth.gaurd';
import { CommonService } from './common/service/common.service';
import { ErrorMessages } from './common/service/errorMessages';


// component
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceModule,
    SharedModule
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CanLoginActivate,
    CanAuthActivate,
    CommonService,
    ErrorMessages
  ],
})
export class AppModule { }
