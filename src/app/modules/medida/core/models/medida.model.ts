export class MedidaModel {
    id: number;
    nombre: string;
    nombrePlural: string;
    lastupdate?: Date;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.nombrePlural = '';
    }
}
