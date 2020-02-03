import { Component, OnInit } from "@angular/core";
import { ModalEgresoComponent } from "../modal-egreso/modal-egreso.component";
import { MatDialog } from "@angular/material";
import { ExpensesModel } from "../../core/models/expenses.model";
import { ArticleService } from "../../core/services/article.service";
import { StorageDataService } from "../../core/services/storage-data.service";
import { ShoppingCartService } from "../../core/services/shopping-cart.service";
import { ShoppingCartModel } from "../../core/models/database/ShoppingCart.model";
import { ShoppingCartDetailModel } from "../../core/models/request/shopping-cart-detail.model";
import {
  RelationSystemUserOutputType,
  SaleTypeEnum,
  SystemUser,
  CostCenterChild
} from "kawesqar-class-model";
import { SucursalService } from "../../core/services/sucursal.service";
import { OutputFlowTypeService } from "../../core/services/output-flow-type.service";
import { OutputFlowTypeModel } from "../../core/models/database/OutputFlowType.model";
import { ShoppingCartDetail } from "../../core/models/database/ShoppingCartDetail.model";
import { ShortcutNavService } from "../../core/services/shortcut-nav.service";
import { DisponibleVentaModel } from "../../core/models/response/disponibleVenta.model";
import { RelationSystemUserOutputTypeService } from "src/app/core/services/relation-system-user-output-type.service";
import { FormBuilder } from "@angular/forms";
import { CostCenterService } from "../../core/services/cost-center.service";
import { UserService } from "../../core/services/user.service";

@Component({
  selector: "app-egreso",
  templateUrl: "./egreso.component.html",
  styleUrls: ["./egreso.component.css"]
})
export class EgresoComponent implements OnInit {
  unauthorized = false;
  costCenterChilds: CostCenterChild[] = Array<CostCenterChild>();
  model: ShoppingCartModel = new ShoppingCartModel();
  articleList: any[] = [];
  editModel: ExpensesModel;
  isBulk = false;
  selectedSaleTypeEnum: SaleTypeEnum;
  sku: string;
  skuSearch: string;
  subsidiaryFrom: number;
  subsidiaryTo: number;
  saleType = SaleTypeEnum;
  subsidiarys: any[];
  Flows: OutputFlowTypeModel[] = Array<OutputFlowTypeModel>();
  btn = [
    { abr: "CONT", key: SaleTypeEnum.CASH_SALE, description: "Contado" },
    { abr: "DEB", key: SaleTypeEnum.DEBIT_CARD, description: "Dedito" },
    { abr: "CRED", key: SaleTypeEnum.CREDIT_CARD, description: "Crédito" },
    {
      abr: "CONS",
      key: SaleTypeEnum.DELIVERY_SUPPLIES,
      description: "Consumo"
    },
    {
      abr: "SUC",
      key: SaleTypeEnum.BRANCH_TRANSFER,
      description: "Cambiar de Bodega"
    }
  ];
  relation: RelationSystemUserOutputType[];
  outputTypeId: number;
  userForm: any;

  constructor(
    public dialog: MatDialog,
    private service: ArticleService,
    private servShoppingCart: ShoppingCartService,
    private localStorage: StorageDataService,
    private sucursalService: SucursalService,
    private flowService: OutputFlowTypeService,
    private pathData: ShortcutNavService,
    private relationOutputService: RelationSystemUserOutputTypeService,
    private costCenter: CostCenterService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      rut: "",
      fullName: "",
      businessOffice: []
    });
  }

  ngOnInit() {
    this.pathData.changePath(["egreso", "Egreso", ""], ["", "", ""]);
    this.relationOutputService
      .getRelations(this.localStorage.getRutUser())
      .subscribe(
        (data: RelationSystemUserOutputType[]) => {
          this.relation = data.filter(item => item.isActive);
          this.model.output = data.find(item => item.isDefault).outputType.code;
        },
        error => {}
      );
    this.loadCenterCostChild();
  }

  onSubmitUser(user: any) {
    const rut = user.rut.replace(/[^0-9kK]+|[kK](?!\s*$)/g, "");
    console.log(rut);
    this.userService.getUser(rut).subscribe(result => {
      this.userForm.patchValue({
        fullName: `${result.firstName} ${result.lastName}`
      });
    });
  }

  addOrQuitItem(value: number, id: number) {
    let deleteItem = false;
    this.model.detail.forEach(item => {
      if (item.id === id) {
        item.quantity += value;
        deleteItem = item.quantity === 0;
      }
    });
    if (deleteItem) {
      this.model.detail = this.model.detail.filter(item => item.id !== id);
    }
  }

  loadOutputFlows() {
    this.flowService
      .getAvailableOutputFlows(this.localStorage.getRutUser().replace("-", ""))
      .subscribe(
        data => {
          this.Flows = data;
        },
        error => {}
      );
  }

  getBySku(event: any) {
    this.service.getBySkuOrText(event.target.value).subscribe(
      data => {
        this.articleList = data;
      },
      error => {
        console.log("Something wrong here");
      }
    );
  }

  edit(data: ExpensesModel) {
    this.editModel = data;
  }

  clean() {
    this.model.detail = [];
  }

  setSubsidiaryForm() {
    this.sucursalService
      .getSucursalesUsuario(this.localStorage.getRutUser())
      .subscribe(
        (result: SystemUser) => {
          result.relationSystemUserBranch.forEach(item => {
            if (item.isSelected) {
              this.subsidiaryFrom = item.branch.id;
            }
          });
        },
        error => {
          console.log("ouch!" + error.status);
        }
      );
  }

  preFinalize() {
    const rut = this.localStorage.getRutUser();
    if (this.model.output === SaleTypeEnum.BRANCH_TRANSFER) {
      this.setSubsidiaryForm();
      this.sucursalService
        .getSucursalesUsuario(this.localStorage.getRutUser())
        .subscribe(
          (result: SystemUser) => {
            const data = {
              rut: rut,
              subsidiaryFrom: this.subsidiaryFrom,
              subsidiaryTo: 2
            };
            this.servShoppingCart.branchTransfer(data).subscribe();
          },
          error => {
            console.log("ouch!" + error.status);
          }
        );
    }
  }

  saveTemporalCart() {}

  searchArticle(sku: string) {
    // call by id
    this.service
      .getBySku(
        sku,
        this.isBulk,
        this.localStorage.getRutUser().replace("-", "")
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
            const result: ShoppingCartDetailModel = new ShoppingCartDetailModel();
            result.quantity = data.Cant;
            result.description = data.Nombre;
            // this.model.detail.push(result);
          }
        },
        error => {
          console.log("Something wrong here");
        }
      );
  }

  cashDiscount() {}

  openDialog(data: ShoppingCartDetail): void {
    const dialogRef = this.dialog.open(ModalEgresoComponent, {
      width: "300px",
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
    });
  }

  selectOut(outputType: any) {
    this.model.output = outputType.value;
    if (outputType.value === SaleTypeEnum.BRANCH_TRANSFER) {
      this.sucursalService
        .getSucursalesUsuario(this.localStorage.getRutUser())
        .subscribe(
          (result: SystemUser) => {
            this.subsidiarys = result.relationSystemUserBranch.filter(
              r => r.isSelected === false
            );
          },
          error => {
            console.log("ouch!" + error.status);
          }
        );
    }
  }

  loadProduct() {
    if (this.skuSearch) {
      this.service
        .getBySku(
          this.skuSearch,
          true,
          this.localStorage.getRutUser().replace("-", "")
        )
        .subscribe(
          (res: DisponibleVentaModel) => {
            const newData = new ShoppingCartDetail();
            newData.id = res.idRegistro;
            newData.sku = this.skuSearch;
            newData.name = res.Nombre;
            newData.amount = res.ValorUnitario;
            newData.quantity = 1;
            if (this.model.detail === undefined) {
              this.model.detail = Array<ShoppingCartDetail>();
            }
            this.model.detail.push(newData);
            this.skuSearch = "";
            document.getElementById("inputSearch").focus();
          },
          error => {
            console.log("Something wrong here");
          }
        );
    }
  }

  getDetail(obj: any) {}

  /*getDetail(obj: ShoppingCartDetailModel) {
    if (this.model.detail === undefined) {
      this.model.detail.push(obj);
    } else {
      if (this.model.detail.some(r => r.id === obj.id)) {
        this.model.detail.forEach(item => {
          if (item.id === obj.id) {
            item.quantity++;
            obj.quantity = item.quantity;
          }
        });
      } else {
        this.model.detail.push(obj);
      }
    }
    this.saveShoppingCart(obj);
  }*/

  saveShoppingCart(data: ShoppingCartDetailModel) {
    const request = {
      rut: this.localStorage.getRutUser().replace("-", ""),
      sku: data.sku,
      quantity: data.quantity,
      total: data.total,
      id: data.id,
      idArticuloID: data.idArticleID,
      estado: data.bulk,
      idSucursal: this.subsidiaryFrom,
      idSucursalDestino: this.subsidiaryTo
    };
    console.log(request);
    this.servShoppingCart
      .addToCart(request, this.localStorage.getRutUser().replace("-", ""))
      .subscribe(res => {
        // Code here
      });
  }

  total() {
    if (this.model.detail !== undefined) {
      let total = 0;
      this.model.detail.forEach(item => {
        total += item.amount * item.quantity;
      });
      return total;
    }
  }

  showOutput(saleTypeEnum: SaleTypeEnum) {
    let show = false;
    try {
      if (this.relation !== undefined) {
        const exists = this.relation.find(
          item => item.outputType.codeEnum === saleTypeEnum
        );
        show = exists.isActive;
      }
    } catch (e) {
      show = false;
    }
    return show;
  }

  private getCart() {
    this.servShoppingCart
      .getCart(this.localStorage.getRutUser().replace("-", ""), 0)
      .subscribe(
        res => {
          this.model = res;
        },
        error => {
          this.unauthorized = true;
          console.log("Something wrong here");
        }
      );
  }

  openUrl(data: any) {}

  loadCenterCostChild() {
    this.costCenter.getCostCenterChild().subscribe(result => {
      this.costCenterChilds = result;
    });
  }
}
