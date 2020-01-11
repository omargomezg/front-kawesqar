import { SubsidiaryModel } from './Subsidiary.model';
import { SystemUserModel } from './system-user.model';
import { ShoppingCartDetail } from './ShoppingCartDetail.model';
import { OutputFlowTypeModel } from './OutputFlowType.model';

export class ShoppingCartModel {
  public id: number;
  public user: SystemUserModel;
  public subsidiaryTo: SubsidiaryModel = new SubsidiaryModel();
  public subsidiaryFrom: SubsidiaryModel = new SubsidiaryModel();
  public created: string;
  public updated: string;
  public detail: ShoppingCartDetail[] = Array<ShoppingCartDetail>();
  public flow: OutputFlowTypeModel = new OutputFlowTypeModel();
  public output: any;
}
