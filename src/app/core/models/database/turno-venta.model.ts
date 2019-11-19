import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {SystemUserModel} from './system-user.model';

export class TurnoVentaModel {

  id: number;
  userRut: string;
  inicioTurno: Date;
  finTurno: Date | null;
  isActive: string;
  proofOfPurchase: ProofOfPurchaseModel[];
  systemUser: SystemUserModel;

}
