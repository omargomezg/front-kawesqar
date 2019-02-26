import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../core/services/sucursales.service';
import { CommonDataService } from '../core/services/common-data.service';
import { SucursalesModel } from '../core/models/sucursales-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  sucursales: SucursalesModel[];
  constructor(private sucService: SucursalesService, private commonData: CommonDataService) { }

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
