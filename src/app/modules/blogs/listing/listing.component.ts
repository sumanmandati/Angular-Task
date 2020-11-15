import { Component, OnInit } from '@angular/core';
// constants
import { callAPIConstants } from '../../../common/constants/callAPI-constants';

// service
import { CommonService } from '../../../common/service/common.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: []
})
export class ListingComponent implements OnInit {
  // variable Declaration
  public callAPIConstants = callAPIConstants;
  public allBlogs: Array<any> = [];
  public searchedKeyword: any;
  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.getAllBlogs();
  }
  /*************************************************************************
          @PURPOSE      : To Get  AllBlogs
          @PARAMETERS   : Void
          @RETURN       : Array
  /*************************************************************************/
  getAllBlogs() {
    this.commonService.callApi(this.callAPIConstants.Blogs, '', 'get').then((success) => {
      if (success.length) {
        this.allBlogs = success;
      }
    })
  }
  /*************************************************************************/

}
