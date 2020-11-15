import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// plugin
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, ModalModule, PaginationModule, TabsModule, TooltipModule } from 'ngx-bootstrap';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    NgbModule,
    TooltipModule.forRoot(),
    RouterModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CommonModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    Ng2SearchPipeModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    NgbModule,
    BsDatepickerModule,
    TabsModule,
    CommonModule,
    HttpClientXsrfModule,
    ModalModule,
    FormsModule,
    PaginationModule,
    TooltipModule,
    SidebarComponent,
    MalihuScrollbarModule,
    HeaderComponent,
    Ng2SearchPipeModule
  ],
})
export class SharedModule { }
