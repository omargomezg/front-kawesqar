import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getBySkuOrText(text: string): Observable<any[]> {
    return this.http
      .get<any[]>(environment.apiUrl + '/api/article/' + text, this.httpOptions)
      .pipe(map(data => data));
  }

  getBySku(sku: string, isBulk: boolean, rut: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${environment.apiUrl}/api/article/sku/${sku}/${isBulk}/${rut}`, this.httpOptions)
      .pipe(map(data => data));
  }
}
