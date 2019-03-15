import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import { SucursalModel } from 'src/app/core/models/sucursal.model';
import { StorageDataService } from 'src/app/core/services/storage-data.service';
import { HeaderModel } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeUrl = environment.homeRoot;
  data: SucursalModel[];
  header: HeaderModel;
  constructor(private readonly sucursalService: SucursalService,
    private localStorage: StorageDataService) { }

  ngOnInit() {
    if (this.localStorage.getRutUser() !== '') {
      console.log('El rut es:', this.localStorage.getRutUser());
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
      .subscribe(data => {
        this.data = data;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
