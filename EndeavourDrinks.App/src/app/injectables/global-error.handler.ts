import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    // TODO: Implement better error handling & display/logging
    if (error instanceof HttpErrorResponse) {
      alert('An API problem has occurred:');
      console.error('An API problem has occurred:', error);
    } else {
      alert('An application error has occurred:');
      console.error('An application error has occurred:', error);
    }
  }
}
