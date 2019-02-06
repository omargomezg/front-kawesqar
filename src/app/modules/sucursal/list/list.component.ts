import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import { SucursalModel } from '../core/models/sucursal-model';
import { CommonDataService } from '../core/services/common-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  sucursales: SucursalModel[];
  constructor(private sucService: SucursalService, private commonData: CommonDataService) { }

  ngOnInit() {
    this.loadTable();
  }

  loadTable() {
    this.sucService.getSucursales()
      .subscribe(data => {
        this.sucursales = data;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
