import {DesgloseArticuloModel} from './desglose-articulo.model';
import {DetalleExistenciaModel} from './detalle-existencia.model';
import {TempArtModel} from './temp-art.model';
import {ShoppingCartContentModel} from './shopping-cart-content.model';
import {RelationStoreBranchModel} from './relation-store-branch.model';

export class StoreModel {

  id: number;
  description: string;
  branches: RelationStoreBranchModel[];
  desgloseArticulos: DesgloseArticuloModel[];
  detalleExistencias: DetalleExistenciaModel[];
  tempArts: TempArtModel[];
  content: ShoppingCartContentModel[];

}
