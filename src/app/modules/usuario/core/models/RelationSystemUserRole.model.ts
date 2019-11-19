import {UserModel} from './user.model';
import {RoleModel} from './Role.model';

export class RelationSystemUserRoleModel {
  id: number;
  isActive: boolean;
  user: UserModel | null;
  role: RoleModel | null;

  constructor(id: number, isActive: boolean, user: UserModel | null, role: RoleModel | null) {
    this.id = id;
    this.isActive = isActive;
    this.user = user;
    this.role = role;
  }
}
