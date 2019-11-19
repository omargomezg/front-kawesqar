import {ProofOfPurchaseModel} from './proof-of-purchase.model';

export class IngresoContadoModel {

  idIngresoContado: number;
  nombreComprador: string;
  numCorrelativo: number;
  idSucursal: number;
  proofOfPurchase: ProofOfPurchaseModel;

}
