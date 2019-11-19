import {InvoiceModel} from './invoice.model';

export class TipoDocInModel {

  id: number;
  description: string;
  isActive: boolean;
  invoices: InvoiceModel[];

}
