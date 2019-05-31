import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleModel } from '../models/role.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EgressModel } from '../models/egress.model';
import { catchError, retry, map } from 'rxjs/operators';
import { UserModel, ExistsModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private readonly http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getRoles(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(`${environment.apiUrl}/api/role/`);
  }

  getEgress(): Observable<EgressModel[]> {
    return this.http.get<EgressModel[]>(`${environment.apiUrl}/api/egress/`);
  }

  getUserByRut(rut: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.apiUrl}/api/user/${rut}`);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/api/user`);
  }

  putUserState(data: any, rut: string): Observable<any[]> {
    return this.http.put<any>(`${environment.apiUrl}/api/user/${rut}/enable`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getExist(rut: string): Observable<boolean> {
    return this.http.get<ExistsModel>(`${environment.apiUrl}/api/user/${rut}/exist`)
      .pipe(
        map(data => {
          return data.value;
        })
      );
  }

  putUpdateUser(user: UserModel): Observable<any[]> {
    return this.http.put<any[]>(`${environment.apiUrl}/api/user/${user.rut}`, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  postSaveUser(user: UserModel): Observable<any[]> {
    return this.http.post<any[]>(`${environment.apiUrl}/api/user/${user.rut}`, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
