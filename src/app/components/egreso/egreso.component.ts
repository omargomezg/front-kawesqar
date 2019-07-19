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
  saleType = SaleTypeEnum;
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
    private localStorage: StorageDataService) {
  }

  ngOnInit() {
    this.model.rut = this.localStorage.getRutUser();
    this.model.output = SaleTypeEnum.CASH_SALE;
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

  preFinalize() {
    const rut = this.localStorage.getRutUser();
    this.model.detail.forEach(item => {
      this.servShoppingCart.getSave(this.model);
    });
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
  }

  getDetail(obj: ShoppingCartDetailModel) {
    if (this.model.detail === undefined) {
      this.model.detail.push(obj);
    } else {
      if (this.model.detail.some(r => r.id === obj.id)) {
        this.model.detail.forEach(item => {
          if (item.id === obj.id) {
            item.quantity++;
          }
        });
      } else {
        this.model.detail.push(obj);
      }
    }
  }
}
