import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {SystemUserModel} from './system-user.model';

export class EliminaVentaModel {

  id: number;
  date: Date;
  description: string;
  proofOfPurchase: ProofOfPurchaseModel;
  systemUser: SystemUserModel;

}
