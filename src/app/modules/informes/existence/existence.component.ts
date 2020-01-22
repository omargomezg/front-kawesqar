import { Component, OnInit } from '@angular/core';
import { StorageDataService } from 'src/app/core/services/storage-data.service';
import { FamilyService } from 'src/app/core/services/family.service';
import { FamilyModel } from 'src/app/core/models/family.model';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import { SucursalModel } from 'src/app/core/models/sucursal.model';
import { ExistenceService } from 'src/app/core/services/existence.service';
import { ExistenceRequestModel, ExistenceResponsModel } from 'src/app/core/models/existence.model';
import { ExistenciaRequestModel } from '../core/models/existencia-request.model';

@Component({
  selector: 'app-existence',
  templateUrl: './existence.component.html',
  styleUrls: ['./existence.component.css']
})
export class ExistenceComponent implements OnInit {
  family: FamilyModel[];
  sucursal: SucursalModel[];
  request: ExistenceRequestModel = new ExistenceRequestModel;
  existenceList: ExistenceResponsModel[];
  total: number;
  constructor(private readonly sucursalService: SucursalService,
    private localStorage: StorageDataService,
    private serFamily: FamilyService,
    private servExistence: ExistenceService) {
  }

  ngOnInit() {
    this.getFamily();
    this.sucursalService.getSucursalesUsuario(this.localStorage.getRutUser())
      .subscribe(data => {
        this.sucursal = data;
        this.request.idSucursal = data[0].id;
      }, error => {
        console.log('ouch!' + error.status);
      });
    this.request.name = '';
    this.request.sku = '';
  }

  getFamily() {
    this.serFamily.getFamilyByRut(this.localStorage.getRutUser())
      .subscribe(data => {
        this.family = data;
        this.request.idBodega = data[0].id;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  getData() {
    this.servExistence.getExistence(this.request)
      .subscribe(data => {
        this.existenceList = data;
        this.total = data.reduce((sum, item) => sum + (item.cantidad + item.artValor), 0);
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  selectAll(e) {
    this.existenceList.forEach(item => {
      item.selected = e.target.checked;
    });
  }

}
