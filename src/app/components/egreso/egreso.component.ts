import {Component, OnInit} from '@angular/core';
import {ModalEgresoComponent} from '../modal-egreso/modal-egreso.component';
import {MatDialog} from '@angular/material';
import {ExpensesModel} from '../../core/models/expenses.model';
import {ArticleService} from '../../core/services/article.service';
import {StorageDataService} from '../../core/services/storage-data.service';
import {ShoppingCartService} from '../../core/services/shopping-cart.service';
import {ShoppingCartModel} from '../../core/models/database/ShoppingCart.model';
import {ShoppingCartDetailModel} from '../../core/models/request/shopping-cart-detail.model';
import {RelationSystemUserOutputType, SaleTypeEnum, SystemUser} from 'kawesqar-class-model';
import {SucursalService} from '../../core/services/sucursal.service';
import {OutputFlowTypeService} from '../../core/services/output-flow-type.service';
import {OutputFlowTypeModel} from '../../core/models/database/OutputFlowType.model';
import {ShoppingCartDetail} from '../../core/models/database/ShoppingCartDetail.model';
import {ShortcutNavService} from '../../core/services/shortcut-nav.service';
import {DisponibleVentaModel} from '../../core/models/response/disponibleVenta.model';
import {RelationSystemUserOutputTypeService} from 'src/app/core/services/relation-system-user-output-type.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  eggressToShow: any;
  unauthorized = false;
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
  relation: RelationSystemUserOutputType[];
  skuUnavailable = false;

  constructor(
    public dialog: MatDialog,
    private service: ArticleService,
    private servShoppingCart: ShoppingCartService,
    private localStorage: StorageDataService,
    private sucursalService: SucursalService,
    private flowService: OutputFlowTypeService,
    private pathData: ShortcutNavService,
    private relationOutputService: RelationSystemUserOutputTypeService
  ) {
  }

  ngOnInit() {
    this.pathData.changePath(['egreso', 'Egreso', ''], ['', '', '']);
    // this.model.rut = this.localStorage.getRutUser();
    // this.model.output = SaleTypeEnum.CASH_SALE;
    this.relationOutputService.getRelations('130856101').subscribe(
      (data: RelationSystemUserOutputType[]) => {
        this.relation = data.filter(item => item.isActive);
      },
      error => {
      }
    );

    this.setSubsidiaryForm();
    this.getCart();
    const smd = [];
    const data1 = new ShoppingCartDetail();
    data1.id = 112;
    data1.sku = '23456A8521';
    data1.name = 'Producto 1';
    data1.amount = 45566.23;
    data1.quantity = 2;
    const data2 = new ShoppingCartDetail();
    data2.id = 14;
    data2.sku = '2345676311';
    data2.name = 'Producto 2';
    data2.amount = 45566.23;
    data2.quantity = 1;

    // this.model.detail.push(data1);
    // this.model.detail.push(data2);
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
      .getAvailableOutputFlows(this.localStorage.getRutUser().replace('-', ''))
      .subscribe(
        data => {
          this.Flows = data;
        },
        error => {
        }
      );
  }

  getBySku(event: any) {
    this.service.getBySkuOrText(event.target.value).subscribe(
      data => {
        this.articleList = data;
      },
      error => {
        console.log('Something wrong here');
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
          console.log('ouch!' + error.status);
        }
      );
  }

  preFinalize() {
    const rut = this.localStorage.getRutUser();
    if (this.selectedSaleTypeEnum === SaleTypeEnum.BRANCH_TRANSFER) {
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
            console.log('ouch!' + error.status);
          }
        );
    }
  }

  saveTemporalCart() {
  }

  searchArticle(sku: string) {
    // call by id
    this.service
      .getBySku(
        sku,
        this.isBulk,
        this.localStorage.getRutUser().replace('-', '')
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
          console.log('Something wrong here');
        }
      );
  }

  cashDiscount() {
  }

  openDialog(data: ShoppingCartDetail): void {
    const dialogRef = this.dialog.open(ModalEgresoComponent, {
      width: '300px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  selectOut(abr: SaleTypeEnum) {
    this.selectedSaleTypeEnum = abr;
    if (abr === SaleTypeEnum.BRANCH_TRANSFER) {
      this.sucursalService
        .getSucursalesUsuario(this.localStorage.getRutUser())
        .subscribe(
          (result: SystemUser) => {
            this.subsidiarys = result.relationSystemUserBranch.filter(
              r => r.isSelected === false
            );
          },
          error => {
            console.log('ouch!' + error.status);
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
          this.localStorage.getRutUser().replace('-', '')
        )
        .subscribe(
          (res: DisponibleVentaModel[]) => {
            if (res.length > 0) {
              const newData = new ShoppingCartDetail();
              newData.id = res[0].idRegistro;
              newData.sku = this.skuSearch;
              newData.name = res[0].Nombre;
              newData.amount = res[0].ValorUnitario;
              newData.quantity = 1;
              if (this.model.detail === undefined) {
                this.model.detail = Array<ShoppingCartDetail>();
              }
              if (this.model.detail.some((item: ShoppingCartDetail) => item.sku === newData.sku)) {
                this.model.detail.forEach(detail => {
                  if (detail.sku === newData.sku) {
                    detail.quantity += 1;
                  }
                });
              } else {
                this.model.detail.push(newData);
              }
              this.setUnavailableSku(false);
            } else {
              this.setUnavailableSku(true);
            }
          },
          error => {
            if (error.status === 404) {
              this.setUnavailableSku(true);
            } else {
              console.log('Something wrong here');
            }
          }
        );
    }
  }

  setUnavailableSku(enabled: boolean) {
    this.skuUnavailable = enabled;
    this.skuSearch = '';
    if (enabled) {
      setInterval(() => {
this.skuUnavailable = false;
      }, 2000);
    }
    document.getElementById('inputSearch').focus();
  }

  getDetail(obj: any) {
  }

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
      rut: this.localStorage.getRutUser().replace('-', ''),
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
      .addToCart(request, this.localStorage.getRutUser().replace('-', ''))
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
    console.log(saleTypeEnum);
    let show = false;
    try {
      if (this.relation !== undefined) {
        const exists = this.relation.find(item => item.outputType.codeEnum === saleTypeEnum);
        show = exists.isActive;
      }
    } catch (e) {
      show = false;
    }
    return show;
  }

  private getCart() {
    this.servShoppingCart
      .getCart(this.localStorage.getRutUser().replace('-', ''), 0)
      .subscribe(
        res => {
          this.model = res;
        },
        error => {
          this.unauthorized = true;
          console.log('Something wrong here');
        }
      );
  }
}
