
export class ExistenciaRequestModel {
    fechaInicio: Date;
    fechaFin: Date;

    constructor() {
        this.fechaInicio = this.getFecha();
        this.fechaFin = new Date();
    }

    getFecha() {
        const now = new Date();
        let fechaOut: Date;
        if (now.getDate() === 1) {
            fechaOut = new Date(now.getFullYear(), now.getMonth(), 1);
            fechaOut.setMonth(fechaOut.getMonth() - 1);
        } else {
            fechaOut = new Date(now.getFullYear(), now.getMonth(), 1);
        }
        return fechaOut;
    }
}
