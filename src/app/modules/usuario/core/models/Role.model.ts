import {RelationSystemUserRoleModel} from './RelationSystemUserRole.model';

export class RoleModel {
  id: number;
  name: string;
  description: string | null;
  isActive: boolean | null;
  accesoVenta: boolean;
  valorDescuento: number;
  ventAdmin: boolean;
  relationSystemUserRoles: RelationSystemUserRoleModel[];

}
