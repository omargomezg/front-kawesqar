import {ProductModel} from './product.model';
import {ProofOfPurchaseModel} from './proof-of-purchase.model';

export class ProofOfPurchaseDetailModel {

  id: number;
  quantity: number;
  valorTotal: number;
  vGranel: boolean;
  idArticuloID: number;
  vCosto: number;
  f: boolean;
  proofOfPurchase: ProofOfPurchaseModel;
  product: ProductModel;

}
