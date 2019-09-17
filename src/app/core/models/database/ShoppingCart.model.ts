import { SubsidiaryModel } from './Subsidiary.model';
import { UserModel } from './User.model';
import { ShoppingCartDetail } from './ShoppingCartDetail.model';
import { OutputFlowTypeModel } from './OutputFlowType.model';

export class ShoppingCartModel {
  public id: number;
  public user: UserModel;
  public subsidiaryTo: SubsidiaryModel = new SubsidiaryModel();
  public subsidiaryFrom: SubsidiaryModel = new SubsidiaryModel();
  public created: string;
  public updated: string;
  public detail: ShoppingCartDetail[] = [];
  public flow: OutputFlowTypeModel = new OutputFlowTypeModel();
  public output: any;
}
