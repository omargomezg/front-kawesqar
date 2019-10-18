import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './invoice-cancellation-order.model';
import {StorageDataService} from '../../core/services/storage-data.service';
import {ShortcutNavService} from '../../core/services/shortcut-nav.service';

@Component({
  selector: 'app-invoice-cancellation-order',
  templateUrl: './invoice-cancellation-order.component.html',
  styleUrls: ['./invoice-cancellation-order.component.css']
})
export class InvoiceCancellationOrderComponent implements OnInit {
  invoiceRequestForm: FormGroup;

  constructor(private fb: FormBuilder,
              private localStorage: StorageDataService,
              private pathData: ShortcutNavService) {
    this.invoiceRequestForm = this.fb.group({
      user: this.fb.group({
        rut: [localStorage.getRutUser(), Validators.required]
      }),
      folio: [0, Validators.required],
      created: [new Date(), Validators.required],
      comment: []
    });
  }

  ngOnInit() {
    this.pathData.changePath(['egreso', 'Egreso', ''],
      ['invoice-cancellation-order', 'Anulación', 'active']
    );
  }

  sendRequest() {
    // console.warn(this.invoiceRequestForm);
    const model: User = Object.assign({}, this.invoiceRequestForm.value);
    console.warn(model);
  }
}
