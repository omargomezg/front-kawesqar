import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SucursalModel } from '../models/sucursal-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private readonly http: HttpClient) { }

  getSucursales(): Observable<SucursalModel[]> {
    return this.http.get<SucursalModel[]>(`${environment.apiUrl}/api/sucursal`);
  }

  getSucursal(id: number): Observable<SucursalModel> {
    return this.http.get<SucursalModel>(`${environment.apiUrl}/api/sucursal/${id}`);
  }

}
