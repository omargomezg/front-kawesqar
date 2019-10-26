

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

export class UserModel {
  password: string;
  rol: number;
  egreso: number;
  rut: string;
  firstName: string;
  lastName: string;
  secondLastName: string;
  fono: string;
  email: string;
  userName: string;
  fechaCreacion: Date;
  isActive: boolean;
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
    this.isActive = true;
    this.salidaVenta = false;
    this.salidaFactura = false;
    this.salidaEmpleados = false;
    this.traspaso = false;
    this.credito = false;
    this.discount = false;
    this.updated = new Date();
  }

}

export class ExistsModel {
  value: boolean;
}
