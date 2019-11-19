import {ProductModel} from './product.model';
import {StoreModel} from './store.model';
import {ExistenciaModel} from './existencia.model';

export class DetalleExistenciaModel {

  idDetalleExistencia: number;
  cantidad: number;
  esGranel: boolean | null;
  valorUnitario: number;
  existencia: ExistenciaModel;
  product: ProductModel;
  store: StoreModel;

}
