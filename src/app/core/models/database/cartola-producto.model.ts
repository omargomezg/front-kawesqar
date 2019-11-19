import {ProductModel} from './product.model';
import {MovimientoArticuloModel} from './movimiento-articulo.model';

export class CartolaProductoModel {

  id: number;
  fecha: Date;
  cantidad: number;
  valor: number;
  saldo: number;
  idSucursal: number;
  comments: string;
  product: ProductModel;
  idMovimiento: MovimientoArticuloModel;

}
