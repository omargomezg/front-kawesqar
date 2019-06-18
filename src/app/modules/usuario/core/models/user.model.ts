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
    updated: Date;
    DefaulltRol: string;
}

export class ExistsModel {
    value: boolean;
}
