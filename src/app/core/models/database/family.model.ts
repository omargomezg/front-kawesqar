import {ProductModel} from './product.model';
import {RelationFamilyBranchModel} from './relation-family-branch.model';

export class FamilyModel {

  id: number;
  name: string | null;
  isActive: boolean | null;
  products: ProductModel[];
  branches: RelationFamilyBranchModel[];

}
