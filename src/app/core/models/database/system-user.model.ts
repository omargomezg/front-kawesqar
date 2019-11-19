import {PersonModel} from './person.model';
import {BranchModel} from './branch.model';
import {ShoppingCartModel} from './shopping-cart.model';
import {RelationSystemUserRoleModel} from '../../../modules/usuario/core/models/RelationSystemUserRole.model';
import {RelationSystemUserBranchModel} from './relation-system-user-branch.model';
import {DesgloseArticuloModel} from './desglose-articulo.model';
import {InvoiceModel} from './invoice.model';
import {EliminaVentaModel} from './elimina-venta.model';
import {RelationSystemUserOutputTypeModel} from './relation-system-user-output-type.model';
import {TurnoVentaModel} from './turno-venta.model';
import {UserMenuModel} from './user-menu.model';

export class SystemUserModel extends PersonModel {

  isActive: boolean;
  password: String;
  userName: string;
  created: Date;
  updated: Date;
  imagenPerfil: String;
  imagenTipo: string | null;
  salidaVenta: boolean;
  salidaFactura: boolean;
  salidaEmpleados: boolean;
  sendToOtherBranch: boolean;
  credito: boolean;
  discount: boolean;
  branch: BranchModel;
  shoppingCart: ShoppingCartModel;
  relationSystemUserRoles: RelationSystemUserRoleModel[];
  relationSystemUserBranch: RelationSystemUserBranchModel[];
  desgloseArticulos: DesgloseArticuloModel[];
  invoices: InvoiceModel[];
  eliminaVentas: EliminaVentaModel[];
  menuUsuarios: UserMenuModel[];
  tipoEgresoUsuarios: RelationSystemUserOutputTypeModel[];
  turnoVenta: TurnoVentaModel[];

}
