import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {CostCenterModel} from './cost-center.model';

export class CostCenterChildModel {

  id: number;
  name: string;
  isActive: boolean;
  costCenter: CostCenterModel;
  proofOfPurchase: ProofOfPurchaseModel[];

}
