import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ExpensesModel} from '../../core/models/expenses.model';

@Component({
  selector: 'app-modal-egreso',
  templateUrl: './modal-egreso.component.html',
  styleUrls: ['./modal-egreso.component.css']
})
export class ModalEgresoComponent {

  constructor(public dialogRef: MatDialogRef<ModalEgresoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ExpensesModel) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateContent() {
  }

}
