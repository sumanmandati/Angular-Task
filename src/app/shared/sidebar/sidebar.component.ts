import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// constants
import { URLConstants } from '../../common/constants/routerLink-constants';

// Services
import { CommonService } from '../../common/service/common.service';
import { LocalStorageService } from '../../common/service/local-storage.service';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit, DoCheck {

  URLConstants = URLConstants;
  public user: any;
  public accessPermission: any;
  public userName: any;
  public photo: any;
  public onUsersModule: any;
  public onAdminUsersModule: any;
  public onCmsModule: any;
  public onEmailTemplateModule: any;
  public onManageRolesModule: any;

  constructor(private localStorageService: LocalStorageService, private commonService: CommonService, private router: Router) {

  }

  isSidebarOpen: boolean;

  ngOnInit() {
    $('.asideleft-maximize .nav a').click(function () {
      const link = $(this);
      const closest_ul = link.closest('.asideleft-maximize ul');
      const parallel_active_links = closest_ul.find('.active');
      const closest_li = link.closest('li');
      const link_status = closest_li.hasClass('active');
      let count = 0;

      closest_ul.find('ul').slideUp('fast', function () {
        if (++count === closest_ul.find('ul').length) {
          parallel_active_links.removeClass('active');
        }
      });

      if (!link_status) {
        closest_li.children('ul').slideDown('fast');
        closest_li.addClass('active');
      }

    });
  }

  ngDoCheck(): void {
    this.userName = this.localStorageService.getToken('name');
    this.photo = this.localStorageService.getToken('photo');
  }



  asideLeftHide() {
    $('body').removeClass('asideleft-on');
  }

}
