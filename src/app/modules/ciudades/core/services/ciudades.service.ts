import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CiudadModel } from '../models/ciudad.model';

@Injectable({
    providedIn: 'root'
})
export class CiudadService {

    constructor(private http: HttpClient) { }

    getCiudades(): Observable<CiudadModel[]> {
        return this.http
            .get<CiudadModel[]>(environment.apiUrl + '/api/city')
            .pipe(map(data => data));
    }

    //   getSucursalesUsuario(rut: string): Observable<SucursalModel[]> {
    //     return this.http
    //       .get<SucursalModel[]>(`${environment.apiUrl}/api/${rut}/sucursal`)
    //       .pipe(map(data => data));
    //   }

}
