import {BankModel} from './bank.model';
import {ProofOfPurchaseModel} from './proof-of-purchase.model';

export class ChequePagoModel {

  id: number;
  number: number;
  amount: number;
  telephone: string | null;
  nombrePersona: string | null;
  isActive: boolean | null;
  bank: BankModel;
  proofOfPurchase: ProofOfPurchaseModel;

}
