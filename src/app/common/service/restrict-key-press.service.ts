import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RestrictKeyPressService {

	constructor() { }

	/****************************************************************************
	  @PURPOSE      : To restrict or allow some values in input.
	  @PARAMETERS   : $event
	  @RETURN       : Boolen
	  ****************************************************************************/
	RestrictSpace(e) {
		if (e.keyCode == 32) {
			return false;
		} else {
			return true;
		}
	}

	AllowNumbers(e) {
		let input;
		if (e.metaKey || e.ctrlKey) {
			return true;
		}
		if (e.which === 32) {
			return false;
		}
		if (e.which === 0) {
			return true;
		}
		if (e.which < 33) {
			return true;
		}
		if (e.which === 43 || e.which === 45) {
			return true;
		}
		input = String.fromCharCode(e.which);
		return !!/[\d\s]/.test(input);
	}

	AllowChar(e) {
		if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123) || e.keyCode == 8) {
			return true;
		} else {
			return false;
		}
	}

}
