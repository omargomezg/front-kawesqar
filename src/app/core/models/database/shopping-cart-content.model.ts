import {ProductModel} from './product.model';
import {StoreModel} from './store.model';

export class ShoppingCartContentModel {

  id: number;
  cantidad: number | null;
  rutUsuario: string;
  valor: number;
  estado: boolean | null;
  idArticuloID: number | null;
  products: ProductModel;
  store: StoreModel;
  content: ShoppingCartContentModel;
}
