import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ShoppingCartDetail} from '../../core/models/database/ShoppingCartDetail.model';

@Component({
  selector: 'app-modal-egreso',
  templateUrl: './modal-egreso.component.html',
  styleUrls: ['./modal-egreso.component.css']
})
export class ModalEgresoComponent {

  constructor(public dialogRef: MatDialogRef<ModalEgresoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ShoppingCartDetail) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateContent() {
  }

  delete() {

  }
}
