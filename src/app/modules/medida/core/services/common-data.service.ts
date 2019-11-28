import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Measure } from 'kawesqar-class-model';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  serviceMedidaModel: Observable<Measure>;
  serviceRefreshList: Observable<boolean>;

  private serviceMedidaModelSubject = new Subject<any>();
  private serviceRefreshListSubject = new Subject<any>();

  constructor() {
    this.serviceMedidaModel = this.serviceMedidaModelSubject.asObservable();
    this.serviceRefreshList = this.serviceRefreshListSubject.asObservable();
  }

  setMedidaModel(data: Measure) {
    this.serviceMedidaModelSubject.next(data);
  }

  setRefreshList(status: boolean) {
    this.serviceRefreshListSubject.next(status);
  }

}
