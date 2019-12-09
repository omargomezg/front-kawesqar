import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Commune } from "kawesqar-class-model";

@Injectable({
  providedIn: "root"
})
export class CiudadService {
  constructor(private http: HttpClient) {}

  getCiudades(): Observable<Commune[]> {
    return this.http
      .get<Commune[]>(environment.apiUrl + "/api/city")
      .pipe(map(data => data));
  }

  //   getSucursalesUsuario(rut: string): Observable<SucursalModel[]> {
  //     return this.http
  //       .get<SucursalModel[]>(`${environment.apiUrl}/api/${rut}/sucursal`)
  //       .pipe(map(data => data));
  //   }
}
