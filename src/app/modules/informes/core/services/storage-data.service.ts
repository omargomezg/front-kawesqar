import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExistenciaRequestModel } from '../models/existencia-request.model';

@Injectable({
  providedIn: 'root'
})
export class StorageDataService {
  private readonly localStorageService;

  constructor() {
    this.localStorageService = localStorage;
  }

  setDataRequest(data: ExistenciaRequestModel): void {
    this.localStorageService.setItem('report', JSON.stringify(data));
  }

  getDataRequest(): ExistenciaRequestModel {
    if (this.localStorageService.getItem('report')) {
      const data = this.localStorageService.getItem('report');
      return (data) ? <ExistenciaRequestModel>JSON.parse(data) : new ExistenciaRequestModel();
    } else {
      return new ExistenciaRequestModel();
    }
  }

}
