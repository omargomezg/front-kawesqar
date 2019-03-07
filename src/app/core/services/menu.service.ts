import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MenuModel } from '../models/menu.models';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }

    getMenu(id: number, rut: string): Observable<MenuModel[]> {
        return this.http
            .post<MenuModel[]>(`${environment.apiUrl}/api/menu/${id}`,
                { rut: rut }, this.httpOptions)
            .pipe(
                catchError((error) => {
                    throw error;
                })
            );
    }

}
