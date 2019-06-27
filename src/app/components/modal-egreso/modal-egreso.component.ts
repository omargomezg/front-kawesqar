import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-egreso',
  templateUrl: './modal-egreso.component.html',
  styleUrls: ['./modal-egreso.component.css']
})
export class ModalEgresoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalEgresoComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateContent() {}

}
