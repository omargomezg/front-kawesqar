import {CommuneModel} from './commune.model';
import {InvoiceModel} from './invoice.model';

export class SupplierModel {

  rut: string;
  ProvNombre: string;
  telephone: string;
  ProvFax: string;
  mobile: string;
  address: string;
  email: string;
  webSite: string;
  isActive: boolean;
  ProvAbreviacion: string;
  commune: CommuneModel;
  invoices: InvoiceModel[];

}
