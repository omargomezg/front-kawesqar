import {DetalleExistenciaModel} from './detalle-existencia.model';

export class ExistenciaModel {

  id: number;
  fecha: Date;
  rutUsuario: string;
  idSucursal: number;
  estado: boolean;
  detalleExistencias: DetalleExistenciaModel[];

}
