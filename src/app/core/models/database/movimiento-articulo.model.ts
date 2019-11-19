import {CartolaProductoModel} from './cartola-producto.model';

export class MovimientoArticuloModel {

  public idMovimiento: number;
  public descripcion: string;
  public tipo: string;
  public cartolaProductos: CartolaProductoModel[];

}
