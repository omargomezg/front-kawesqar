import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { RelationSystemUserRoleModel } from "../models/RelationSystemUserRole.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EgressModel } from "../models/egress.model";
import { catchError, retry, map } from "rxjs/operators";
import { UserModel, ExistsModel } from "../models/user.model";
import { environment } from "../../../../../environments/environment";
import { RoleModel } from "../models/Role.model";
import { SystemUser, Role, OutputType } from "kawesqar-class-model";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  constructor(private readonly http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${environment.apiUrl}/api/role/`);
  }

  getEgress(): Observable<OutputType[]> {
    return this.http.get<OutputType[]>(`${environment.apiUrl}/api/egress/`);
  }

  getUserByRut(rut: string): Observable<SystemUser> {
    return this.http.get<SystemUser>(`${environment.apiUrl}/api/user/${rut}`);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/api/user`);
  }

  putUserState(data: any, rut: string): Observable<any[]> {
    return this.http
      .put<any>(
        `${environment.apiUrl}/api/user/${rut}/enabled`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getExist(rut: string): Observable<boolean> {
    return this.http
      .get<ExistsModel>(`${environment.apiUrl}/api/user/${rut}/exist`)
      .pipe(
        map(data => {
          return data.value;
        })
      );
  }

  putUpdateUser(user: SystemUser): Observable<any[]> {
    return this.http
      .put<any[]>(
        `${environment.apiUrl}/api/user/${user.rut}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  postSaveUser(user: SystemUser): Observable<SystemUser[]> {
    return this.http
      .post<SystemUser[]>(
        `${environment.apiUrl}/api/user/${user.rut.replace("-", "")}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = "";
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
