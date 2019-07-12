import {Component, Inject, OnInit} from '@angular/core';
import {ModalEgresoComponent} from '../modal-egreso/modal-egreso.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ExpensesModel} from '../../core/models/expenses.model';
import {ArticleService} from '../../core/services/article.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  model: ExpensesModel[] = [];
  articleList: any[] = [];
  currentProduct: any;
  editModel: ExpensesModel;
  shippingForm = false;
  constructor(
    public dialog: MatDialog,
    private service: ArticleService) { }

  ngOnInit() {
    const data: ExpensesModel = new ExpensesModel();
    data.amount = 7780;
    data.quantity = 2;
    data.cashDiscount = 300;
    data.description = 'Papel Milim';
    data.available = 34;
    this.model.push(data);
  }

  getBySku(event: any) {
    this.service.getBySku(event.target.value).subscribe(
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
    this.shippingForm = true;
    }

    searchArticle(sku: number) {
      console.log(this.currentProduct);
    }

    cashDiscount() {}

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

}
