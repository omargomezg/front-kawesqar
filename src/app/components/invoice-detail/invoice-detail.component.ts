import {Component, Input, OnInit} from '@angular/core';
import {Client, InvoiceDetail, InvoiceModel} from './invoice.model';
import {ProofOfPurchaseService} from '../../core/services/proof-of -purchase.service';
import {ProofOfPurchaseModel} from '../../core/models/database/proof-of-purchase.model';
import {ProofOfPurchaseDetailModel} from '../../core/models/database/proof-of-purchase-detail.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  model: InvoiceModel = new InvoiceModel(
    1,
    new Date(),
    new Client('14081226-9', 'Omar Gómez Gómez'),
    'Observation',
    [
      new InvoiceDetail(
        '1224512',
        'Paliza BIC azul',
        2,
        540,
        1080
      ),
      new InvoiceDetail(
        '21424577',
        '1240',
        3, 5000, 15000
      )
    ]
  );

  @Input() id: ProofOfPurchaseModel;

  constructor(private proofOfPurchaseService: ProofOfPurchaseService) {
  }

  ngOnInit() {
  }

  getTotal(): number {
    return this.id.purchaseDetails.reduce((sum, item) => sum + item.valorTotal, 0);
  }
}
