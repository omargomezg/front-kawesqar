import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './invoice-cancellation-order.model';
import {StorageDataService} from '../../core/services/storage-data.service';
import {ShortcutNavService} from '../../core/services/shortcut-nav.service';
import {ProofOfPurchaseService} from '../../core/services/proof-of -purchase.service';
import {ProofOfPurchaseModel} from '../../core/models/database/proof-of-purchase.model';
import {ProofOfPurchaseDetailModel} from '../../core/models/database/proof-of-purchase-detail.model';

@Component({
  selector: 'app-invoice-cancellation-order',
  templateUrl: './invoice-cancellation-order.component.html',
  styleUrls: ['./invoice-cancellation-order.component.css']
})
export class InvoiceCancellationOrderComponent implements OnInit {
  invoiceRequestForm: FormGroup;
  id: ProofOfPurchaseModel;

  constructor(private fb: FormBuilder,
              private localStorage: StorageDataService,
              private pathData: ShortcutNavService,
              private proofOfPurchaseService: ProofOfPurchaseService) {
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

  searchDocument() {
    this.proofOfPurchaseService.getProofOfPurchase(this.invoiceRequestForm.get(['folio']).value)
      .subscribe(
        (res: ProofOfPurchaseModel) => {
          console.log(res);
          this.id = res;
        },
        error => {
          console.log('Something wrong here');
        }
      );
  }
}
