export class UserModel {
  action: string;
  clave: string;
  rol: number;
  egreso: number;
  rut: string;
  nombres: string;
  apPaterno: string;
  apMaterno: string;
  fono: string;
  eMail: string;
  userName: string;
  fechaCreacion: Date;
  estado: boolean;
  salidaVenta: boolean;
  salidaFactura: boolean;
  salidaEmpleados: boolean;
  traspaso: boolean;
  credito: boolean;
  discount: boolean;
  allowedServices: AllowedDeliveriesModel;
  updated: Date;
  DefaultRol: string;

  constructor() {

  }
}

export class ExistsModel {
  value: boolean;
}

export class AllowedDeliveriesModel {
  sales: boolean;
  employees: boolean;
  subsidiary: boolean;
  bill: boolean;

  constructor() {
    this.sales = false;
    this.employees = false;
    this.subsidiary = false;
    this.bill = false;
  }
}
