import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ShoppingCartModel} from 'src/app/core/models/database/ShoppingCart.model';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {OutputFlowTypeModel} from 'src/app/core/models/database/OutputFlowType.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutputFlowTypeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * Show a list of egress options
   * @param rut The user system rut
   */
  getAvailableOutputFlows(rut: string): Observable<OutputFlowTypeModel[]> {
    return this.http
      .get<OutputFlowTypeModel[]>(`${environment.apiUrl}/api/egress/${rut}`)
      .pipe(map(data => data));
  }
}
