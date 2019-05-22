import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalesService } from '../core/services/sucursales.service';
import { SucursalModel } from '../core/models/sucursal-model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model: SucursalModel;
  dataPage = {
    edit: false
  };

  constructor(private sucursalService: SucursalesService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        this.dataPage.edit = true;
        this.sucursalService.getSucursal(params.id)
          .subscribe(data => {
            this.model = data;
          }, error => {
            console.log('ouch!' + error.status);
          });
      } else {
        this.model = new SucursalModel;
      }
    });
    if (!this.model) {
      this.model = new SucursalModel;
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  setCiudad(data: any) {
    this.model.codigoComuna = data.codigo;
    this.model.nombreComuna = data.nombre;
  }

  update() {
    this.sucursalService.putSucursal(this.model)
      .subscribe(() => {
        this.router.navigateByUrl('sucursales/home');
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  gotoList() {
    this.router.navigateByUrl('sucursales/home');
  }

}
