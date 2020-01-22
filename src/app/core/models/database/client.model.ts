import {CartolaModel} from './cartola.model';
import {ProofOfPurchaseModel} from './proof-of-purchase.model';
import {CommuneModel} from './commune.model';
import {ClientTypeModel} from './client-type.model';
import {PersonModel} from './person.model';

export class ClientModel extends PersonModel{

  Fax: string;
  mobile: string;
  address: string;
  MaxCredito: number;
  permiteVentaCredito: boolean;
  permiteVentaFactura: boolean;
  fantasyName: string;
  giro: string;
  commune: CommuneModel;
  typeOfClient: ClientTypeModel;
  cartolas: CartolaModel[];
  proofOfPurchase: ProofOfPurchaseModel[];

}
