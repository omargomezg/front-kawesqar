import {ClientModel} from './client.model';
import {ProvinciasModel} from './provincias.model';
import {BranchModel} from './branch.model';
import {SupplierModel} from './supplier.model';

export class CommuneModel {

  code: number;
  name: string;
  father: ProvinciasModel;
  clients: ClientModel[];
  branches: BranchModel[];
  supplier: SupplierModel[];

}
