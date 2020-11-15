import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, Injector, PLATFORM_ID } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {

	public platformId: any;
	constructor(injector: Injector) {
		this.platformId = injector.get(PLATFORM_ID);
	}

	// *************************************************************//
	// @Purpose : We can use following function to use localstorage
	// *************************************************************//
	setToken(key, value) {
		if (isPlatformBrowser(this.platformId)) {
			window.localStorage.setItem(key, value);
		}
	}
	getToken(key) {
		if (isPlatformBrowser(this.platformId)) {
			return window.localStorage.getItem(key);
		}
	}
	removeToken(key) {
		if (isPlatformBrowser(this.platformId)) {
			window.localStorage.removeItem(key);
		}
	}
	clearToken() {
		if (isPlatformBrowser(this.platformId)) {
			window.localStorage.clear();
		}
	}

}
