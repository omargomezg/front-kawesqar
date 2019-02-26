import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SucursalesService } from '../core/services/sucursales.service';
import { SucursalModel } from '../core/models/sucursal-model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model: SucursalModel = new SucursalModel();
  constructor(private sucursalService: SucursalesService, private route: ActivatedRoute,
    private router: Router) { }

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

  update() {
    this.sucursalService.putSucursal(this.model)
      .subscribe(data => {
        this.router.navigateByUrl('/sucursales');
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  goList() {

  }

}
