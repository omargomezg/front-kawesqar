import {CartolaModel} from './cartola.model';
import {TipoMovimientoModel} from './tipo-movimiento.model';

export class MovimientosModel {

  id: number;
  name: string;
  tipoMovimiento: TipoMovimientoModel;
  cartolas: CartolaModel[];

}
