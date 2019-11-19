import {ProductModel} from './product.model';
import {InvoiceModel} from './invoice.model';
import {BranchModel} from './branch.model';
import {SystemUserModel} from './system-user.model';
import {StoreModel} from './store.model';

export class DesgloseArticuloModel {

  id: number;
  created: Date;
  artValor: number;
  isActive: boolean;
  expirationDate: Date;
  product: ProductModel;
  invoice: InvoiceModel;
  branch: BranchModel;
  estadoUso: boolean;
  user: SystemUserModel;
  granel: number;
  granelOriginal: number;
  store: StoreModel;

}
