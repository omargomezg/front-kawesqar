import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SucursalesService } from "../core/services/sucursales.service";
import { SucursalModel } from "../core/models/sucursal-model";
import { Branch, Commune } from "kawesqar-class-model";
import { ShortcutNavService } from "src/app/core/services/shortcut-nav.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  homeUrl = window.location.origin;
  model: Branch;
  dataPage = {
    edit: false
  };

  constructor(
    private sucursalService: SucursalesService,
    private route: ActivatedRoute,
    private router: Router,
    private pathData: ShortcutNavService
  ) {}

  ngOnInit() {
    let id = 0;
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        id = params.id;
        this.dataPage.edit = true;
      }
    });
    this.pathData.changePath(
      ["sucursales/home", "Sucursales", ""],
      [
        id === 0 ? "sucursales/new" : `sucursales/edit/${id}`,
        id === 0 ? "Nueva Sucursal" : "Editar Sucursal",
        "active"
      ]
    );
    this.sucursalService.getSucursal(id).subscribe(
      data => {
        this.model = data;
      },
      error => {
        console.log("ouch!" + error.status);
      }
    );
    if (!this.model) {
      this.model = new Branch();
      this.model.commune = new Commune();
    }
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  setCiudad(data: any) {
    this.model.commune.code = data.codigo;
    this.model.commune.name = data.nombre;
  }

  update() {
    this.model.updated = new Date();
    this.sucursalService.putSucursal(this.model).subscribe(
      () => {
        this.router.navigateByUrl("sucursales/home");
      },
      error => {
        console.log("ouch!" + error.status);
      }
    );
  }

  gotoList() {
    this.router.navigateByUrl("sucursales/home");
  }
}
