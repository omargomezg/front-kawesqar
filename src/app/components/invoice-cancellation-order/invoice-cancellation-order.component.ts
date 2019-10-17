import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InvoiceCancellationOrderModel, User} from './invoice-cancellation-order.model';
import {MenuService} from '../../core/services/menu.service';
import {StorageDataService} from '../../core/services/storage-data.service';

@Component({
  selector: 'app-invoice-cancellation-order',
  templateUrl: './invoice-cancellation-order.component.html',
  styleUrls: ['./invoice-cancellation-order.component.css']
})
export class InvoiceCancellationOrderComponent implements OnInit {
  invoiceRequestForm: FormGroup;

  constructor(private fb: FormBuilder,
              private localStorage: StorageDataService) {
    this.invoiceRequestForm  = this.fb.group({
      user: this.fb.group({
        rut: [localStorage.getRutUser(), Validators.required]
      }),
      folio: [0, Validators.required],
      created: [new Date(), Validators.required],
      comment: []
    });
  }

  ngOnInit() {

  }

  sendRequest() {
    // console.warn(this.invoiceRequestForm);
    const model: User = Object.assign({}, this.invoiceRequestForm.value);
    console.warn(model);
  }
}
