
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IBuildInfo } from './buildInfo';

@Injectable({
  providedIn: 'root'
})
export class BuildInfoService {


  private infoUrl = 'api/buildInfo.json';

  constructor(private http: HttpClient) { }

  getBuildInfo(): Observable<IBuildInfo | undefined> {
    return this.http.get<IBuildInfo>(this.infoUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

