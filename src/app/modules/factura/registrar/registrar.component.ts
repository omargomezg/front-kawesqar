import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog.component';
import {StorageDataService} from '../../../core/services/storage-data.service';
import {SucursalModel} from '../../../core/models/sucursal.model';
import {DetailDialogModel} from '../shared/detail-dialog.model';
import {SupplierService} from '../../../core/services/supplier.service';
import {SupplierModel} from '../../../core/models/supplier.model';
import {RegistrarModel} from '../core/models/registrar.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  dialogModel: DetailDialogModel = new DetailDialogModel();
  sucursales: SucursalModel[];
  supplier: SupplierModel;
  model: RegistrarModel = new RegistrarModel();

  constructor(public dialog: MatDialog, private localStorage: StorageDataService, private supplierService: SupplierService) {
  }

  ngOnInit() {
  }

  search() {
    this.supplierService.getByRut(this.model.rut)
      .subscribe(data => {
        this.model.razonSocial = data.razonSocial;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  openDialog(): void {
    this.dialogModel.name = 'Jla';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: this.dialogModel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
