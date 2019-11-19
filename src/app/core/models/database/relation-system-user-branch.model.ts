import {BranchModel} from './branch.model';
import {SystemUserModel} from './system-user.model';

export class RelationSystemUserBranchModel {

  id: number;
  isActive: boolean;
  branch: BranchModel;
  systemUser: SystemUserModel;

}
