import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MedidaModel } from '../models/medida.model';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  serviceMedidaModel: Observable<MedidaModel>;
  serviceRefreshList: Observable<boolean>;

  private serviceMedidaModelSubject = new Subject<any>();
  private serviceRefreshListSubject = new Subject<any>();

  constructor() {
    this.serviceMedidaModel = this.serviceMedidaModelSubject.asObservable();
    this.serviceRefreshList = this.serviceRefreshListSubject.asObservable();
  }

  setMedidaModel(data: MedidaModel) {
    this.serviceMedidaModelSubject.next(data);
  }

  setRefreshList(status: boolean) {
    this.serviceRefreshListSubject.next(status);
  }

}
