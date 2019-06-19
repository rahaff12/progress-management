import { Injectable } from '@angular/core';
import { IProject } from '../project/project';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  url: string = 'http://127.0.0.1:8000/api/googlesheet';


  constructor(
    private http: HttpClient
  ) { }

  getProjectList(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }


  
}

// import {Injectable} from '@angular/core';
// import {IProject} from '../project/project';
// import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
// import {Observable, throwError} from 'rxjs';
// import {catchError, tap} from 'rxjs/operators';@Injectable({
//  providedIn: 'root'
// })
// export class ProjectListService {
//  private url = 'http://127.0.0.1:8000/api/googlesheet';
 
//    constructor(private http: HttpClient) {  } 

//    getProjectList(): Observable<IProject[]> {
//    return this.http.get<IProject[]>(this.url).pipe(
//      tap(data => console.log('All: ' + JSON.stringify(data))),
//      catchError(this.handleError)
//    );
//  }  private handleError(err: HttpErrorResponse) {
//    // in a real world app, we may send the server to some remote logging infrastructure
//    // instead of just logging it to the console
//    let errorMessage = '';
//    if (err.error instanceof ErrorEvent) {
//      // A client-side or network error occurred. Handle it accordingly.
//      errorMessage = `An error occurred: ${err.error.message}`;
//    } else {
//      // The backend returned an unsuccessful response code.
//      // The response body may contain clues as to what went wrong,
//      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
//    }
//    console.error(errorMessage);
//    return throwError(errorMessage);
//  }}
