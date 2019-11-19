import {CostCenterChildModel} from './cost-center-child.model';
import {RelationClientCostCenterModel} from './relation-client-cost-center.model';

export class CostCenterModel {

  id: number;
  name: string;
  isActive: boolean;
  child: CostCenterChildModel[];
  relationClientCostCenter: RelationClientCostCenterModel[];

}
