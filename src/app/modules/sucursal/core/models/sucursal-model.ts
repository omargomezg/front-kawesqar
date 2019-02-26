export class SucursalModel {
    codigoComuna: number;
    direccion: string;
    fax: string;
    giro: string;
    id: number;
    nombre: string;
    nombreComuna: string;
    nombreRepLegal: string;
    numInicialRegContado: number;
    registroContado: boolean;
    rut: string;
    rutRepLegal: string;
    telefono: string;

    constructor() {
        this.codigoComuna = 0;
        this.direccion = '';
        this.fax = '';
        this.giro = '';
        this.id = 0;
        this.nombre = '';
        this.nombreComuna = '';
        this.nombreRepLegal = '';
        this.numInicialRegContado = 0;
        this.registroContado = false;
        this.rut = '';
        this.rutRepLegal = '';
        this.telefono = '';
    }
}
