import {StoreModel} from './store.model';
import {BranchModel} from './branch.model';

export class RelationStoreBranchModel {

  id: number;
  isActive: boolean;
  store: StoreModel;
  branch: BranchModel;

}
