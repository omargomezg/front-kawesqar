import {InvoiceModel} from './invoice.model';
import {ProductModel} from './product.model';

export class InvoiceContentModel {

  id: number;
  amount: number;
  quantity: number;
  invoice: InvoiceModel;
  product: ProductModel;

}
