import {ShoppingCartDetailModel} from '../../../core/models/request/shopping-cart-detail.model';

export class ShoppingCartModel {
  rut: string;
  output: string;
  idSubsidiary: number;
  idDestinationSubsidiary: number;
  detail: ShoppingCartDetailModel[] = [];
}
