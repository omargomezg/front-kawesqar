import {Component, OnInit} from '@angular/core';
import {Client, InvoiceDetail, InvoiceModel} from './invoice.model';
import {InvoiceService} from './invoice.service';

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

  constructor() {
  }

  ngOnInit() {
  }

  getTotal(): number {
    return this.model.detail.reduce((sum, item) => sum + item.amount * item.quantity, 0);
  }
}
