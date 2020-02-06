import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ShoppingCartModel} from '../models/database/ShoppingCart.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ProofOfPurchase} from 'kawesqar-class-model';

@Injectable({
  providedIn: 'root'
})
export class ProofOfPurchaseService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getProofOfPurchase(id: number): Observable<ProofOfPurchase> {
    return this.http
      .get<ProofOfPurchase>(`${environment.apiUrl}/api/proof-of-purchase/${id}`)
      .pipe(map(data => data));
  }
}
