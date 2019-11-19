import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../core/services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AllowedDeliveriesModel, UserModel} from '../core/models/user.model';
import {RelationSystemUserRoleModel} from '../core/models/RelationSystemUserRole.model';
import {RoleModel} from '../core/models/Role.model';
import {ShortcutNavService} from '../../../core/services/shortcut-nav.service';
import {templateJitUrl} from '@angular/compiler';

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
              private route: ActivatedRoute, private router: Router, private pathData: ShortcutNavService) {
  }

  ngOnInit() {
    this.loadRol();
    this.loadEgresos();
    this.route.params.subscribe(params => {
      if (params.rut !== undefined) {
        this.pathData.changePath(['usuarios', 'Usuario', ''], [`usuarios/edit/${params.rut}`, 'Editar usuario', 'active']);
        this.serviceRole.getUserByRut(params.rut)
          .subscribe(data => {
            this.model = data;
            if (this.model.allowedServices === undefined) {
              this.model.allowedServices = new AllowedDeliveriesModel();
            }
            this.model.allowedServices.bill = data.salidaFactura;
            this.model.allowedServices.employees = data.salidaEmpleados;
            this.model.allowedServices.sales = data.salidaVenta;
            this.model.allowedServices.subsidiary = data.sendToOtherBranch;
            this.model.rut = params.rut;
            this.common.action = 'edit';
            this.loading = false;
          }, error => {
            console.log('ouch!' + error.status);
          });
      } else {
        this.pathData.changePath(['usuarios', 'Usuario', ''], ['new', 'Nuevo usuario', 'active']);
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
        this.roles.forEach(item => {
          const newRelationUserRole = new RelationSystemUserRoleModel(
            0,
            false,
            null,
            item
          );
          if (this.model.relationSystemUserRoles === undefined) {
            this.model.relationSystemUserRoles = [];
          }
          this.model.relationSystemUserRoles.push(newRelationUserRole);
        });
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  loadEgresos() {
    this.serviceRole.getEgress()
      .subscribe(data => {
        this.common.egress = data;
        if (data.length > 0) {
          this.model.egreso = data[0].id;
        }
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

  setRoleStatus(event) {
    this.model.relationSystemUserRoles.forEach(item => {
        item.isActive = item.role.id === event.value;
    });
  }

  isRoleActive(id: number) {
    return this.model.relationSystemUserRoles.filter(item => {
      return item.isActive && item.role.id === id;
    }).length > 0;
  }
}
