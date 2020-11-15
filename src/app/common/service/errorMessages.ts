import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { messages } from '../constants/errorMessagesData';

@Injectable()
export class ErrorMessages {
  public MSG = (messages as any);

  constructor() { }
  getError(field, error) {
    let message = '';
    if (error) {
      if (error.required) {
        const required = this.MSG.ERROR.REQUIRED;
        switch (field) {
          case 'password':
            {
              message = required.Password;
            }
            break;
          case 'emailId':
            {
              message = required.emailId;
            }
            break;
        }
      } else if (error.pattern) {
        const pattern = this.MSG.ERROR.PATTERN;
        switch (field) {
          case 'emailId': { message = pattern.Email; } break;
        }
      }
      return message;
    }
  }
}
