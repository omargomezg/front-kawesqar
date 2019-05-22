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
        let url = '';
        if (id > 0) {
            url = `${environment.apiUrl}/api/menu/${rut}/${id}`;
        } else {
            url = `${environment.apiUrl}/api/menu/${rut}`;
        }
        return this.http
            .get<MenuModel[]>(url)
            .pipe(
                catchError((error) => {
                    throw error;
                })
            );
    }
}
