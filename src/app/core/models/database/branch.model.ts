import {CommuneModel} from './commune.model';
import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {SystemUserModel} from './system-user.model';
import {InvoiceModel} from './invoice.model';
import {DesgloseArticuloModel} from './desglose-articulo.model';
import {RelationFamilyBranchModel} from './relation-family-branch.model';
import {RelationSystemUserBranchModel} from './relation-system-user-branch.model';
import {TempArtModel} from './temp-art.model';
import {RelationStoreBranchModel} from './relation-store-branch.model';
import {ShoppingCartContentModel} from './shopping-cart-content.model';

export class BranchModel {

  id: number;
  rut: string;
  name: string;
  address: string;
  commune: CommuneModel;
  telephone: string;
  rutRepLegal: string;
  nombreRepLegal: string;
  fax: string;
  Giro: string;
  registroContado: boolean;
  numInicialRegContado: number;
  legalRepresentative: SystemUserModel;
  stores: RelationStoreBranchModel[];
  proofOfPurchase: ProofOfPurchaseModel[];
  relationSystemUserBranch: RelationSystemUserBranchModel[];
  desgloseArticulos: DesgloseArticuloModel[];
  invoices: InvoiceModel[];
  relationFamilyBranches: RelationFamilyBranchModel[];
  tempArts: TempArtModel[];
  shoppingCartContents: ShoppingCartContentModel[];

}
