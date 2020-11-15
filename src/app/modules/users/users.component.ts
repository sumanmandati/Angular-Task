import { Component, OnInit } from '@angular/core';
// constants
import { callAPIConstants } from '../../common/constants/callAPI-constants';

// service
import { CommonService } from '../../common/service/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit {

  // variable Declaration
  public callAPIConstants = callAPIConstants;
  public allUsers: Array<any> = [];
  public searchedKeyword: any;

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }


  /*************************************************************************
          @PURPOSE      : To Get  Allusers
          @PARAMETERS   : Void
          @RETURN       : Array
  /*************************************************************************/
  getAllUsers() {
    this.commonService.callApi(this.callAPIConstants.Users, '', 'get').then((success) => {
      if (success.length) {
        this.allUsers = success;
      }
    })
  }
  /*************************************************************************/



}
