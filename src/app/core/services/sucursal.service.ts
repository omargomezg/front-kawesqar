import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SucursalModel } from '../models/sucursal.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http: HttpClient) { }

  getSucursales(): Observable<SucursalModel[]> {
    return this.http
      .get<SucursalModel[]>(environment.apiUrl + '/api/sucursal')
      .pipe(map(data => data));
  }

  getSucursalesUsuario(rut: string): Observable<SucursalModel[]> {
    return this.http
      .get<SucursalModel[]>(`${environment.apiUrl}/api/${rut}/sucursal`)
      .pipe(map(data => data));
  }

}
