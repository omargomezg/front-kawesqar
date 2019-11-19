import {InvoiceModel} from './invoice.model';
import {ProductModel} from './product.model';

export class NoteModel {
  id: number;
  invoice: InvoiceModel;
  product: ProductModel;
  note: string;
  created: Date;
  updated: Date;
}
