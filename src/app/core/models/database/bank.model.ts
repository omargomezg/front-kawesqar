import {PaymentModel} from './payment.model';

export class BankModel {

  id: number;
  name: string;
  isActive: boolean | null;
  cheques: any[];
  payments: PaymentModel[];

}
