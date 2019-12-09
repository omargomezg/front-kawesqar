import { Component, OnInit } from "@angular/core";
import { UtilsService } from "../core/services/utils.service";
import { UserModel } from "../core/models/user.model";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { RelationSystemUserRoleModel } from "../core/models/RelationSystemUserRole.model";
import { ShortcutNavService } from "../../../core/services/shortcut-nav.service";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.css"]
})
export class ListUsersComponent implements OnInit {
  users: UserModel[];

  constructor(
    private serviceRole: UtilsService,
    private pathData: ShortcutNavService
  ) {}

  ngOnInit() {
    this.pathData.changePath(
      ["usuarios/list", "Usuario", ""],
      ["usuarios/list", "Usuarios registrados", "active"]
    );
    this.serviceRole.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  changeStatus(event: MatSlideToggleChange, rut: string) {
    this.serviceRole
      .putUserState({ rut: rut, enabled: event.checked }, rut)
      .subscribe(
        data => {
          // Any code
        },
        error => {
          console.log("ouch!" + error.status);
        }
      );
  }

  getRolName(data: RelationSystemUserRoleModel[]) {
    return data.filter(r => r.isActive === true)[0].role.name;
  }
}
