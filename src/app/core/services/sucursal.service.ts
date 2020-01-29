import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../src/environments/environment";
import { SucursalModel } from "../models/sucursal.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HeaderModel } from "../../../../src/app/layer/header/header.model";
import { RelationSystemUserBranch, SystemUser } from "kawesqar-class-model";

@Injectable({
  providedIn: "root"
})
export class SucursalService {
  constructor(private http: HttpClient) {}

  getSucursales(): Observable<SucursalModel[]> {
    return this.http
      .get<SucursalModel[]>(environment.apiUrl + "/api/sucursal")
      .pipe(map(data => data));
  }

  getSucursalesUsuario(rut: string): Observable<SystemUser> {
    const emptyString = "";
    return this.http
      .get<SystemUser>(
        `${environment.apiUrl}/api/user/${rut.replace(
          /\D/g,
          `${emptyString}`
        )}/sucursal`
      )
      .pipe(map(data => data));
  }

  getHeader(rut: string): Observable<SystemUser> {
    return this.http
      .get<SystemUser>(`${environment.apiUrl}/api/header/${rut}`)
      .pipe(map(data => data));
  }
}
