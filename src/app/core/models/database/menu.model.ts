import {UserMenuModel} from './user-menu.model';

export class MenuModel {

  id: number;
  parent: number;
  name: string;
  url: string;
  userMenus: UserMenuModel[];

}
