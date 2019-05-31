import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../core/services/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../core/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model: UserModel = new UserModel;
  common: any = {
    roles: []
  };
  validation = {
    exists: false,
    rut: ''
  };

  constructor(private serviceRole: UtilsService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadRol();
    this.loadEgresos();
    this.route.params.subscribe(params => {
      if (params.rut !== undefined) {
        this.serviceRole.getUserByRut(params.rut)
          .subscribe(data => {
            this.model = data;
            this.model.rut = params.rut;
            this.model.action = 'edit';
          }, error => {
            console.log('ouch!' + error.status);
          });
      } else {
        this.model.action = 'insert';
        this.model.clave = Math.random().toString(36).slice(-8);
      }
    });
  }

  validateIfExists() {
    this.validation.exists = false;
    this.validation.rut = '';
    if (this.model.action === 'insert') {
      this.serviceRole.getExist(this.model.rut)
        .subscribe(data => {
          this.validation.exists = data;
          if (data) { this.model.rut = ''; }
        }, error => {
          console.log('ouch!' + error.status);
        });
    }
  }

  loadRol() {
    this.serviceRole.getRoles()
      .subscribe(data => {
        this.common.roles = data.sort(function (a, b) {
          return a.titulo.localeCompare(b.titulo);
        });
        this.model.rol = this.common.roles[0].idRol;
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
    if (this.model.action === 'edit') {
      this.model.clave = '';
      this.serviceRole.putUpdateUser(this.model)
        .subscribe(data => {
          this.router.navigateByUrl('usuarios/list');
        }, error => {
          console.log('ouch!' + error.status);
        });
    } else {
      this.serviceRole.postSaveUser(this.model)
        .subscribe(data => {
          this.router.navigateByUrl('usuarios/list');
        }, error => {
          console.log('ouch!' + error.status);
        });
    }
  }
}
