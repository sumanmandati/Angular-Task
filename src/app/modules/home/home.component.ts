import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  //variable Declarartion
  public arr = [2, 5, 3, 9, 7];
  public minSum: Number;
  public maxSum: Number;
  constructor() {
  }

  ngOnInit(): void {
    let isInteger = this.arr.every(e => e > 0);
    if (this.arr.length >= 5 && isInteger) {
      this.getMinMaxValues(this.arr);
    } else {
      alert('Please provide five positive integers');
    }
  }
  /*************************************************************************
           @PURPOSE      : To Get  Min and Max values
           @PARAMETERS   : arr
           @RETURN       : min and max values
   /*************************************************************************/
  getMinMaxValues(arr) {
    let maxArr = [...arr].sort((a, b) => a - b);
    let minArr = [...arr].sort((a, b) => b - a);
    this.maxSum = maxArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
    this.minSum = minArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
  }
  /*************************************************************************/
}
