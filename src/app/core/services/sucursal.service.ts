import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../src/environments/environment';
import {SucursalModel} from '../models/sucursal.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HeaderModel} from '../../../../src/app/layer/header/header.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http: HttpClient) {
  }

  getSucursales(): Observable<SucursalModel[]> {
    return this.http
      .get<SucursalModel[]>(environment.apiUrl + '/api/sucursal')
      .pipe(map(data => data));
  }

  getSucursalesUsuario(rut: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${environment.apiUrl}/api/user/${rut}/sucursal`)
      .pipe(map(data => data));
  }

  getHeader(rut: string): Observable<HeaderModel> {
    return this.http
      .get<HeaderModel>(`${environment.apiUrl}/api/header/${rut}`)
      .pipe(map(data => data));
  }

}
