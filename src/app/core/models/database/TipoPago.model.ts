import {ProofOfPurchaseModel} from './proof-of-purchase.model';

export class TipoPago {

  id: number;
  name: string;
  usoBoleta: boolean;
  usoFactura: boolean;
  proofOfPurchase: ProofOfPurchaseModel[];

}
