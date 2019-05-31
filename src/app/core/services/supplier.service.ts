import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SucursalModel} from '../models/sucursal.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {SupplierModel} from '../models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getByRut(rut: string): Observable<SupplierModel> {
    return this.http
      .get<SupplierModel>(environment.apiUrl + '/api/supplier/${rut}')
      .pipe(map(data => data));
  }
}
