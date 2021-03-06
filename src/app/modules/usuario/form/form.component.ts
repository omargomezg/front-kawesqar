import { Component, OnInit } from "@angular/core";
import { UtilsService } from "../core/services/utils.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ShortcutNavService } from "../../../core/services/shortcut-nav.service";
import {
  OutputType,
  RelationSystemUserOutputType,
  Role,
  SaleTypeEnum,
  SystemUser
} from "kawesqar-class-model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  saleTypeEnum: SaleTypeEnum;
  model: SystemUser = new SystemUser();
  selectRelation: RelationSystemUserOutputType[];
  filterOutputType: {};
  selectedRoleId: number;
  selectedOutputTypeId: number;
  common: any = {
    roles: [],
    action: "insert"
  };
  roles: Role[];
  validation = {
    exists: false,
    rut: ""
  };
  loading = true;

  constructor(
    private serviceRole: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private pathData: ShortcutNavService
  ) {}

  ngOnInit() {
    this.loadRol();
    this.loadEgresos();
    this.route.params.subscribe(params => {
      if (params.rut !== undefined) {
        this.pathData.changePath(
          ["usuarios/list", "Usuario", ""],
          [`usuarios/edit/${params.rut}`, "Editar usuario", "active"]
        );
        this.serviceRole.getUserByRut(params.rut).subscribe(
          (data: SystemUser) => {
            this.model = data;
            this.selectRelation = data.relationSystemUserOutputType;
            this.setRole();
            this.setDefaultOutputType();
            this.common.action = "edit";
            this.loading = false;
          },
          error => {
            console.log("ouch!" + error.status);
          }
        );
      } else {
        this.pathData.changePath(
          ["usuarios/list", "Usuario", ""],
          ["new", "Nuevo usuario", "active"]
        );
        this.common.action = "insert";
        this.model.password = Math.random()
          .toString(36)
          .slice(-8);
      }
    });
  }

  private setDefaultOutputType() {
    let isDefault = false;
    this.model.relationSystemUserOutputType.forEach(item => {
      if (item.isDefault) {
        this.selectedOutputTypeId = item.id;
        isDefault = true;
      }
    });
    if (!isDefault) {
      this.model.relationSystemUserOutputType.forEach(item => {
        if (!isDefault && item.isActive) {
          this.selectedOutputTypeId = item.id;
          item.isDefault = true;
          isDefault = true;
        }
      });
    }
  }

  private setRole() {
    this.model.relationSystemUserRoles.forEach(item => {
      if (item.isActive) {
        this.selectedRoleId = item.id;
      }
    });
  }

  changedExtraHandler(event_id: number) {
    this.model.relationSystemUserRoles.forEach(
      item => (item.isActive = item.id === event_id)
    );
  }

  validateIfExists() {
    this.validation.exists = false;
    this.validation.rut = "";
    if (this.common.action === "insert") {
      this.serviceRole.getExist(this.model.rut).subscribe(
        data => {
          this.validation.exists = data;
          if (data) {
            this.model.rut = "";
          }
        },
        error => {
          console.log("ouch!" + error.status);
        }
      );
    }
  }

  loadRol() {
    this.serviceRole.getRoles().subscribe(
      (data: Role[]) => {
        this.roles = data.sort(function(a, b) {
          return a.name.localeCompare(b.name);
        });
        /*this.roles.forEach(item => {
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
        });*/
      },
      error => {
        console.log("ouch!" + error.status);
      }
    );
  }

  loadEgresos() {
    this.serviceRole.getEgress().subscribe(
      (data: OutputType[]) => {
        this.common.OutputType = data;
        if (data.length > 0) {
          this.selectedRoleId = data[0].id;
        }
      },
      error => {
        console.log("ouch!" + error.status);
      }
    );
  }

  goToList() {
    this.router.navigateByUrl("usuarios/list");
  }

  save() {
    if (this.common.action === "edit") {
      this.model.password = "";
      this.serviceRole.putUpdateUser(this.model).subscribe(
        data => {
          this.router.navigateByUrl("usuarios/list");
        },
        error => {
          console.log("ouch!" + error.status);
        }
      );
    } else {
      this.serviceRole.postSaveUser(this.model).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl("usuarios/list");
        },
        error => {
          console.log("ouch!" + error.status);
        }
      );
    }
  }

  setRoleStatus(event) {
    this.model.relationSystemUserRoles.forEach(item => {
      item.isActive = item.role.id === event.value;
    });
  }

  isRoleActive(id: number) {
    return (
      this.model.relationSystemUserRoles.filter(item => {
        return item.isActive && item.role.id === id;
      }).length > 0
    );
  }

  setDefaultOutput(event: any) {
    this.model.relationSystemUserOutputType.forEach(
      (relation: RelationSystemUserOutputType) => {
        relation.isDefault =
          relation.outputType.id === parseInt(event.target.value, 0);
        this.selectedOutputTypeId = event.target.value;
      }
    );
  }

  enabledOutputType(id: number) {
    this.model.relationSystemUserOutputType.filter(item => {
      if (item.id === id) {
        item.isActive = !item.isActive;
      }
    });
  }

  setPrimary(value: any) {
    const id = parseInt(value.target.value, 0);
    this.selectedOutputTypeId = id;
    this.model.relationSystemUserOutputType.forEach(item => {
      item.isDefault = item.id === id;
    });
  }
}
