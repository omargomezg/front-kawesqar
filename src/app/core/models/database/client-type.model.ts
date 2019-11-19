import {ClientModel} from './client.model';

export class ClientTypeModel {

  id: number;
  name: string;
  isActive: boolean | null;
  clients: ClientModel[];

}
