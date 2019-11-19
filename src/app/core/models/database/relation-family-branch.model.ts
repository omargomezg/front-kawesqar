import {BranchModel} from './branch.model';
import {FamilyModel} from './family.model';

export class RelationFamilyBranchModel {

  id: number;
  isActive: boolean;
  branch: BranchModel;
  family: FamilyModel;

}
