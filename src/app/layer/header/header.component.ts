import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import { SucursalModel } from 'src/app/core/models/sucursal.model';
import { StorageDataService } from 'src/app/core/services/storage-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeUrl = environment.homeRoot;
  data: SucursalModel[];
  constructor(private readonly sucursalService: SucursalService,
    private localStorage: StorageDataService) { }

  ngOnInit() {
    this.getSucursales();
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
