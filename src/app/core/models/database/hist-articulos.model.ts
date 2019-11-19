import {InvoiceModel} from './invoice.model';
import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {ProductModel} from './product.model';

export class HistArticulosModel {

  idtable: number;
  id: number;
  create: Date;
  ArtValor: number;
  Vencimiento: Date;
  idSucursal: number | null;
  isActive: boolean | null;
  estadoUso: boolean | null;
  rutusuario: string | null;
  granelOriginal: number | null;
  idBodega: number | null;
  invoice: InvoiceModel;
  proofOfPurchase: ProofOfPurchaseModel;
  product: ProductModel;

}
