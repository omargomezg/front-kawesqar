import {MovimientosModel} from './movimientos.model';
import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {ClientModel} from './client.model';

export class CartolaModel {

  id: number;
  valor: number;
  fecha: Date;
  saldo: number;
  idMovimiento: MovimientosModel;
  client: ClientModel;
  proofOfPurchase: ProofOfPurchaseModel;

}
