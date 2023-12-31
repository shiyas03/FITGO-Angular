import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(
    request: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const AUTH_ROUTE = 'auth';
        if (error.status === 401) {
          this._router.navigate([AUTH_ROUTE]);
        } 
        const customError = {
          message: 'An error occurred',
          status: error.status,
          error: error.error
        };
        return throwError(customError);
      })
    );
  }
}