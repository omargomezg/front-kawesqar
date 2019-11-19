import {CommuneModel} from './commune.model';
import {RegionModel} from './region.model';


export class ProvinciasModel {

  codigo: number;
  activo: number;
  nombre: string;
  padre: RegionModel;
  comunas: CommuneModel[];

}
