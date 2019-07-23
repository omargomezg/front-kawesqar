import {Component, OnInit} from '@angular/core';
import {ModalEgresoComponent} from '../modal-egreso/modal-egreso.component';
import {MatDialog} from '@angular/material';
import {ExpensesModel} from '../../core/models/expenses.model';
import {ArticleService} from '../../core/services/article.service';
import {StorageDataService} from '../../core/services/storage-data.service';
import {ShoppingCartService} from '../../core/services/shopping-cart.service';
import {ShoppingCartModel} from '../../core/models/request/shopping-cart.model';
import {ShoppingCartDetailModel} from '../../core/models/request/shopping-cart-detail.model';
import {SaleTypeEnum} from '../../core/models/constant/SaleTypeEnum';
import {SucursalService} from '../../core/services/sucursal.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  model: ShoppingCartModel = new ShoppingCartModel();
  articleList: any[] = [];
  editModel: ExpensesModel;
  isBulk = false;
  sku: string;
  subsidiaryFrom: number;
  subsidiaryTo: number;
  saleType = SaleTypeEnum;
  subsidiarys: any[];
  btn = [
    {abr: 'CONT', key: SaleTypeEnum.CASH_SALE, description: 'Contado'},
    {abr: 'DEB', key: SaleTypeEnum.DEBIT_CARD, description: 'Dedito'},
    {abr: 'CRED', key: SaleTypeEnum.CREDIT_CARD, description: 'Crédito'},
    {abr: 'CONS', key: SaleTypeEnum.DELIVERY_SUPPLIES, description: 'Consumo'},
    {abr: 'SUC', key: SaleTypeEnum.BRANCH_TRANSFER, description: 'Cambiar de Bodega'}
  ];

  constructor(
    public dialog: MatDialog,
    private service: ArticleService,
    private servShoppingCart: ShoppingCartService,
    private localStorage: StorageDataService,
    private sucursalService: SucursalService) {
  }

  ngOnInit() {
    this.model.rut = this.localStorage.getRutUser();
    this.model.output = SaleTypeEnum.CASH_SALE;
    this.setSubsidiaryForm();
  }

  getBySku(event: any) {
    this.service.getBySkuOrText(event.target.value).subscribe(
      data => {
        this.articleList = data;
      },
      error => {
        console.log('Something wrong here');
      });
  }

  edit(data: ExpensesModel) {
    this.editModel = data;
  }

  clean() {
    this.editModel = null;
  }

  setSubsidiaryForm() {
    this.sucursalService.getSucursalesUsuario(this.localStorage.getRutUser())
      .subscribe((result: any[]) => {
        this.subsidiaryFrom = result.filter(r => r.isPrimary === true)[0].id;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

  preFinalize() {
    const rut = this.localStorage.getRutUser();
    if (this.model.output === SaleTypeEnum.BRANCH_TRANSFER) {
      this.setSubsidiaryForm();
      this.sucursalService.getSucursalesUsuario(this.localStorage.getRutUser())
        .subscribe((result: any[]) => {
          const data = {
            rut: rut,
            subsidiaryFrom: this.subsidiaryFrom,
            subsidiaryTo: 2
          };
          this.servShoppingCart.branchTransfer(data)
            .subscribe();
        }, error => {
          console.log('ouch!' + error.status);
        });
    }
  }

  saveTemporalCart() {

  }

  searchArticle(sku: string) {
    // call by id
    this.service.getBySku(sku, this.isBulk, this.localStorage.getRutUser().replace('-', '')).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {
          const result: ShoppingCartDetailModel = new ShoppingCartDetailModel();
          result.quantity = data.Cant;
          result.description = data.Nombre;
          this.model.detail.push(result);
        }
      },
      error => {
        console.log('Something wrong here');
      });
  }

  cashDiscount() {
  }

  openDialog(data: ExpensesModel): void {
    const dialogRef = this.dialog.open(ModalEgresoComponent, {
      width: '250px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  selectOut(abr: string) {
    this.model.output = abr;
    if (abr === SaleTypeEnum.BRANCH_TRANSFER) {
      this.sucursalService.getSucursalesUsuario(this.localStorage.getRutUser())
        .subscribe((result: any[]) => {
          this.subsidiarys = result.filter(r => r.isPrimary === false);
        }, error => {
          console.log('ouch!' + error.status);
        });
    }
  }

  getDetail(obj: ShoppingCartDetailModel) {
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
  }

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
    this.servShoppingCart.addToCart(request, this.localStorage.getRutUser().replace('-',''))
      .subscribe(res => {
        // Code here
      });
  }
}
