import {ProductModel} from './product.model';
import {InvoiceModel} from './invoice.model';
import {BranchModel} from './branch.model';
import {StoreModel} from './store.model';

export class TempArtModel {

  id: number;
  created: Date;
  amount: number;
  ArtCantidad: number;
  expirationDate: Date | null;
  product: ProductModel;
  invoice: InvoiceModel;
  branch: BranchModel;
  store: StoreModel;

}
