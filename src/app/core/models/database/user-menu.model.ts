import {SystemUserModel} from './system-user.model';
import {MenuModel} from './menu.model';

export class UserMenuModel {

  id: number;
  isActive: boolean;
  menu: MenuModel;
  systemUser: SystemUserModel;

}
