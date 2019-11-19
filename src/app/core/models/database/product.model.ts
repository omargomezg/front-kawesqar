import {ProofOfPurchaseDetailModel} from './proof-of-purchase-detail.model';
import {FamilyModel} from './family.model';
import {MeasureModel} from './measure.model';
import {ShoppingCartContentModel} from './shopping-cart-content.model';
import {NoteModel} from './note.model';
import {CartolaProductoModel} from './cartola-producto.model';
import {DesgloseArticuloModel} from './desglose-articulo.model';
import {InvoiceContentModel} from './invoice-content.model';
import {HistArticulosModel} from './hist-articulos.model';
import {DetalleExistenciaModel} from './detalle-existencia.model';
import {TempArtModel} from './temp-art.model';

export class ProductModel {

  id: string;
  isActive: boolean | null;
  Alerta: number | null;
  estadoAlerta: boolean | null;
  vencimiento: boolean | null;
  Notas: string | null;
  ganancia: number | null;
  precioGranel: number | null;
  name: string;
  usaInventario: boolean;
  folio: number | null;
  imgFile: String | null;
  imgContentType: string | null;
  family: FamilyModel;
  measure: MeasureModel;
  idMedidaGranel: MeasureModel | null;
  notes: NoteModel[];
  cartolaProductos: CartolaProductoModel[];
  desgloseArticulos: DesgloseArticuloModel[];
  detalleExistencias: DetalleExistenciaModel[];
  invoiceContents: InvoiceContentModel[];
  proofOfPurchaseDetail: ProofOfPurchaseDetailModel[];
  histArticuloss: HistArticulosModel[];
  tempArts: TempArtModel[];
  shoppingCartContent: ShoppingCartContentModel[];

}
