import {ProvinciasModel} from './provincias.model';

export class RegionModel {

  code: number;
  name: string | null;
  idRomano: string;
  isActive: boolean;
  provincias: ProvinciasModel[];

}
