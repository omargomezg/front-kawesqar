import {SubsidiaryModel} from './Subsidiary.model';
import {UserModel} from './User.model';
import {ShoppingCartDetail} from '../../models/database/ShoppingCartDetail.model';

export class ShoppingCartModel {
  public id: number;
  public user: UserModel;
  public subsidiaryTo: SubsidiaryModel = new SubsidiaryModel();
  public subsidiaryFrom: SubsidiaryModel = new SubsidiaryModel();
  public created: string;
  public updated: string;
  public detail: ShoppingCartDetail[] = [];
  public output: string;
}
