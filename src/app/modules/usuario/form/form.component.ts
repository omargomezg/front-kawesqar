import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../core/services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../core/models/user.model';
import {RoleModel} from '../core/models/role.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model: UserModel = new UserModel();
  common: any = {
    roles: [],
    action: 'insert'
  };
  roles: RoleModel[];
  validation = {
    exists: false,
    rut: ''
  };
  loading = true;

  constructor(private serviceRole: UtilsService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.loadRol();
    this.loadEgresos();
    this.route.params.subscribe(params => {
      if (params.rut !== undefined) {
        this.serviceRole.getUserByRut(params.rut)
          .subscribe(data => {
            this.model = data;
            this.model.allowedServices.bill = data.salidaFactura;
            this.model.allowedServices.employees = data.salidaEmpleados;
            this.model.allowedServices.sales = data.salidaVenta;
            this.model.allowedServices.subsidiary = data.traspaso;
            this.model.rut = params.rut;
            this.common.action = 'edit';
            this.loading = false;
          }, error => {
            console.log('ouch!' + error.status);
          });
      } else {
        this.common.action = 'insert';
        this.model.password = Math.random().toString(36).slice(-8);
      }
    });
  }

  validateIfExists() {
    this.validation.exists = false;
    this.validation.rut = '';
    if (this.common.action === 'insert') {
      this.serviceRole.getExist(this.model.rut)
        .subscribe(data => {
          this.validation.exists = data;
          if (data) {
            this.model.rut = '';
          }
        }, error => {
          console.log('ouch!' + error.status);
        });
    }
  }

  loadRol() {
    this.serviceRole.getRoles()
      .subscribe(data => {
        this.roles = data.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        this.model.rol = this.roles[0].id;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  loadEgresos() {
    this.serviceRole.getEgress()
      .subscribe(data => {
        this.common.egress = data;
        this.model.egreso = data[0].id;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  goToList() {
    this.router.navigateByUrl('usuarios/list');
  }

  save() {
    if (this.common.action === 'edit') {
      this.model.password = '';
      this.serviceRole.putUpdateUser(this.model)
        .subscribe(data => {
          this.router.navigateByUrl('usuarios/list');
        }, error => {
          console.log('ouch!' + error.status);
        });
    } else {
      this.serviceRole.postSaveUser(this.model)
        .subscribe(data => {
          console.log(data);
          // this.router.navigateByUrl('usuarios/list');
        }, error => {
          console.log('ouch!' + error.status);
        });
    }
  }
}
