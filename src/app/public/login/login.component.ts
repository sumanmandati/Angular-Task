import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// plugins
import swal from 'sweetalert2';

// constants
import { callAPIConstants } from '../../common/constants/callAPI-constants';
import { URLConstants } from '../../common/constants/routerLink-constants';

// service
import { CommonService } from '../../common/service/common.service';
import { LocalStorageService } from '../../common/service/local-storage.service';
import { ShowErrorService } from '../../common/service/show-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  //variable Declaration
  public callAPIConstants = callAPIConstants;
  public URLConstants = URLConstants;
  public swal = swal;
  public user: any = {};
  public submitted = false;
  public usersArray: Array<any> = [];
  public show: boolean = false;
  public passtype = "password";

  constructor(private localStorageService: LocalStorageService, private commonService: CommonService,
    private showErrorService: ShowErrorService, private router: Router) {
  }

  ngOnInit() {
  }


  /*************************************************************************
        @PURPOSE      :  To login the users
        @PARAMETERS   : {
              form: Object,  
         }
         @RETURN       : Array
    /*************************************************************************/
  onLogin(form) {
    this.submitted = true;
    if (form.valid) {
      this.commonService.callApi(this.callAPIConstants.Users, '', 'get', true, false).then((success) => {
        if (success.length) {
          this.usersArray = success;
          const match = this.usersArray.find((obj) => {
            return obj.email === this.user.emailId && obj.username === this.user.password;
          });
          if (!!match) {
            this.localStorageService.setToken('accessToken', match.company.catchPhrase); // Just authorization i have used catchPhrase as accessToken 
            this.localStorageService.setToken('name', match.name);
            this.showErrorService.popToast('success', `User ${match.name} login Successfully`);
            this.router.navigate([this.URLConstants.HOME]);
          } else {
            this.showErrorService.popToast('error', 'Login Failed. Invalid credentials!');
          }
        } else {
          this.showErrorService.popToast('error', 'Login Failed. Invalid credentials!');
        }
      });
    }
  }
  /*************************************************************************/

  /****************************************************************************
@PURPOSE      : To show and hide password
@PARAMETERS   : N/A
@RETURN       : <string>
/****************************************************************************/
  showpass() {
    this.show = !this.show;
    if (this.show) {
      this.passtype = "text";
    }
    else {
      this.passtype = "password";
    }
  }
  /****************************************************************************/


}
