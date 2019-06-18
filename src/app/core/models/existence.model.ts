export interface ExistenceResponsModel {
    nomArticulo: string;
    idArticulo: number;
    artValor: number;
    cantidad: number;
    subTotal: number;
    medida: string;
    idBodega: number;
    idSucursal: number;
    selected: boolean;
}

export class ExistenceRequestModel {
    idSucursal: number;
    idBodega: number;
    name: string;
    sku: string;
}
