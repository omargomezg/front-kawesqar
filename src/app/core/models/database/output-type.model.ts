import {RelationSystemUserOutputTypeModel} from './relation-system-user-output-type.model';

export class OutputTypeModel {

  id: number;
  name: string;
  code: string;
  userOutputTypes: RelationSystemUserOutputTypeModel[];

}
