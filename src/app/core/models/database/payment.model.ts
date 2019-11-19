import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {BankModel} from './bank.model';

export class PaymentModel {

  id: number;
  documentNumber: number;
  nameOfPerson: string;
  personName: string;
  paymentMethod: any;
  proofOfPurchase: ProofOfPurchaseModel;
  bank: BankModel;
}
