import {SystemUserModel} from './system-user.model';
import {OutputTypeModel} from './output-type.model';

export class RelationSystemUserOutputTypeModel {

  id: number;
  isActive: boolean;
  isDefault: boolean;
  outputType: OutputTypeModel;
  systemUser: SystemUserModel;

}
