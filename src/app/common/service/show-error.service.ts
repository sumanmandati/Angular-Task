import { Injectable, Injector } from '@angular/core';
import swal from 'sweetalert2';
import { ErrorMessages } from './errorMessages';

@Injectable({
	providedIn: 'root',
})
export class ShowErrorService {

	public swal = swal;

	constructor(injector: Injector, private errorMessage: ErrorMessages) { }

	/***************************************************************************
	@PURPOSE      : To show validation message
	@PARAMETERS   : <field_name, errorObj?>
	@RETURN       : error message.
	****************************************************************************/
	showError(field, errorObj?) {
		return this.errorMessage.getError(field, errorObj);
	}
	/****************************************************************************/

	// *************************************************************//
	// @Purpose : We can use following function to use Toaster Service.
	// *************************************************************//
	popToast(type, title) {
		swal({
			position: 'center',
			type,
			text: title,
			showConfirmButton: false,
			timer: 2000,
			customClass: 'custom-toaster',
		});
	}

	confirmpopToast(type, title) {
		return swal({
			// title: 'Are you sure?',
			text: title,
			type,
			showCancelButton: true,
			confirmButtonText: 'DELETE',
			confirmButtonClass: 'btn btn-primary',
			cancelButtonClass: 'btn btn--outline-primary',

		});
	}
	// *************************************************************//

}
