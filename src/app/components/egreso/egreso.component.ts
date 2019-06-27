import {Component, Inject, OnInit} from '@angular/core';
import {ModalEgresoComponent} from '../modal-egreso/modal-egreso.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ExpensesModel} from '../../core/models/expenses.model';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  model: ExpensesModel[] = [];
  constructor(
    public dialog: MatDialog) { }

  ngOnInit() {
    const data: ExpensesModel = new ExpensesModel();
    data.amount = 778;
    data.quantity = 2;
    data.cashDiscount = 300;
    data.description = 'Papel Milim';
    this.model.push(data);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEgresoComponent, {
      width: '300px',
      data: this.model
    });
  }
}
