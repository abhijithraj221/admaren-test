import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private https: HttpClient) {}

  // get data form Json file
  getData() {
    return this.https
      .get('../../assets/data.json')
      .pipe(catchError(this.errorHandler));
  }
  // Error handler returns error if any client side or server side error happens
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
