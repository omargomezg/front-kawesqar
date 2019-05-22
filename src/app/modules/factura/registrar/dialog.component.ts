import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DetailDialogModel} from '../shared/detail-dialog.model';

@Component({
  selector: 'app-dialog-component',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public model: DetailDialogModel) {
  }

  updateContent() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
