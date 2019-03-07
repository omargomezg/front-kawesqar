import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SucursalesService } from '../core/services/sucursales.service';
import { SucursalModel } from '../core/models/sucursal-model';
import { CommonDataService } from '../core/services/common-data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model: SucursalModel = new SucursalModel();
  homeUrl = environment.homeRoot;

  constructor(private sucursalService: SucursalesService, private route: ActivatedRoute,
    private router: Router,
    private commonData: CommonDataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        this.sucursalService.getSucursal(params.id)
          .subscribe(data => {
            this.model = data;
          }, error => {
            console.log('ouch!' + error.status);
          });
      }
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  setCiudad(data: any) {
    this.model.codigoComuna = data.codigo;
    this.model.nombreComuna = data.nombre;
  }

  update() {
    this.sucursalService.putSucursal(this.model)
      .subscribe(data => {
        this.router.navigateByUrl('/sucursales');
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  gotoList() {
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        this.router.navigateByUrl('sucursales');
      } else {
        this.commonData.showData(true);
      }
    });
  }

}
