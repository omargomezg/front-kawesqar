import {SupplierModel} from './supplier.model';
import {SystemUserModel} from './system-user.model';
import {BranchModel} from './branch.model';
import {ProductModel} from './product.model';
import {DesgloseArticuloModel} from './desglose-articulo.model';
import {InvoiceContentModel} from './invoice-content.model';
import {HistArticulosModel} from './hist-articulos.model';
import {TempArtModel} from './temp-art.model';
import {NoteModel} from './note.model';
import {TipoDocInModel} from './tipo-doc-in.model';

export class InvoiceModel {

  id: number;
  number: string;
  date: Date;
  creation: Date | null;
  estadoUso: string | null;
  valImpuesto: number | null;
  notas: string | null;
  supplier: SupplierModel;
  idTipoDocIn: TipoDocInModel;
  systemUser: SystemUserModel | null;
  products: ProductModel[];
  branch: BranchModel;
  desgloseArticulos: DesgloseArticuloModel[];
  content: InvoiceContentModel[];
  histArticuloss: HistArticulosModel[];
  tempArts: TempArtModel[];
  notes: NoteModel[];

}
