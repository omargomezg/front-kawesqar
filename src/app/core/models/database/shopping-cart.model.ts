import {ShoppingCartContentModel} from './shopping-cart-content.model';
import {SystemUserModel} from './system-user.model';

export class ShoppingCartModel {
  id: number;
  created: Date;
  updated: Date;
  contents: ShoppingCartContentModel[];
  systemUser: SystemUserModel;
}
