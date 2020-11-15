import { Component, DoCheck, OnInit } from '@angular/core';

// constants
import { URLConstants } from '../../common/constants/routerLink-constants';

// Services
import { LocalStorageService } from '../../common/service/local-storage.service';
import { LogoutService } from '../../common/service/logout.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [],
})
export class HeaderComponent implements OnInit, DoCheck {
	//variable Declarartion
	public URLConstants = URLConstants;
	public user: any;
	public userName: any;

	constructor(private localStorageService: LocalStorageService, public logoutService: LogoutService) {
	}

	ngOnInit() {
		$('[data-toggle="offcanvas"]').on('click', function () {
			$('.sidebar-offcanvas').toggleClass('active');
		});
		$('body').addClass('asideleft-maximize');
	}

	ngDoCheck(): void {
		this.userName = this.localStorageService.getToken('name');
	}

}
