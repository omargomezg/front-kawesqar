import {Component, OnInit} from '@angular/core';
import {HeaderModel} from './header.model';
import {StorageDataService} from 'src/app/core/services/storage-data.service';
import {SucursalModel} from 'src/app/core/models/sucursal.model';
import {SucursalService} from 'src/app/core/services/sucursal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeUrl = window.location.origin;
  data: SucursalModel[];
  header: HeaderModel;
  idSelected: number;

  constructor(private readonly sucursalService: SucursalService,
              private localStorage: StorageDataService) {
  }

  ngOnInit() {
    if (this.localStorage.getRutUser() !== '') {
      this.getSucursales();
      this.getHeader();
    }
  }

  getHeader() {
    this.sucursalService.getHeader(this.localStorage.getRutUser())
      .subscribe(data => {
        this.header = data;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  getSucursales() {
    this.sucursalService.getSucursalesUsuario(this.localStorage.getRutUser())
      .subscribe((data: SucursalModel[]) => {
        this.data = data;
        this.idSelected = data[0].id;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
