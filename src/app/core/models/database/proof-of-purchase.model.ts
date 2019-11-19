import {CostCenterChildModel} from './cost-center-child.model';
import {TurnoVentaModel} from './turno-venta.model';
import {CartolaModel} from './cartola.model';
import {ProofOfPurchaseDetailModel} from './proof-of-purchase-detail.model';
import {ClientModel} from './client.model';
import {TipoPago} from './TipoPago.model';
import {BranchModel} from './branch.model';
import {EliminaVentaModel} from './elimina-venta.model';
import {HistArticulosModel} from './hist-articulos.model';
import {ChequePagoModel} from './cheque-pago.model';
import {PaymentModel} from './payment.model';
import {IngresoContadoModel} from './ingreso-contado.model';

export class ProofOfPurchaseModel {

  id: number;
  create: Date;
  isActive: boolean;
  usoCredito: boolean;
  estadoCredito: boolean;
  tipoVenta: string;
  nDocumento: number;
  descuento: number;
  notas: string;
  rutUsuario: string;
  idIngresoContado: number;
  idtVenta: number;
  client: ClientModel;
  tipoPago: TipoPago;
  turnoVenta: TurnoVentaModel;
  branch: BranchModel;
  idSubGrupo: CostCenterChildModel;
  cartolas: CartolaModel[];
  cheques: ChequePagoModel[];
  purchaseDetails: ProofOfPurchaseDetailModel[];
  eliminaVentass: EliminaVentaModel[];
  histArticuloss: HistArticulosModel[];
  ingresoContados: IngresoContadoModel[];
  payments: PaymentModel[];

}
