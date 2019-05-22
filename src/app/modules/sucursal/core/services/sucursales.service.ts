import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SucursalModel } from '../models/sucursal-model';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { SucursalesModel } from '../models/sucursales-model';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private readonly http: HttpClient) { }

  getSucursales(): Observable<SucursalesModel[]> {
    return this.http.get<SucursalesModel[]>(`${environment.apiUrl}/api/subsidiary`);
  }

  getSucursal(id: number): Observable<SucursalModel> {
    return this.http.get<SucursalModel>(`${environment.apiUrl}/api/subsidiary/${id}`);
  }

  putSucursal(model: SucursalModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .put(`${environment.apiUrl}/api/subsidiary/${model.id}`,
        JSON.stringify(model), httpOptions)
      .pipe(
        map(data => data),
        catchError((error) => {
          throw error;
        })
      );
  }

}
