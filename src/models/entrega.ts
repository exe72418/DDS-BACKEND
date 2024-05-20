import { Repartidor } from "./repartidor";

export class Entrega {

    fecha!:Date;
    lote!:string;
    zona!:string;
    repartidor!:Repartidor;

    constructor (
        fecha: Date,
        lote: string,
        zona: string,
        repartidor:Repartidor
    ) {
        this.fecha = fecha;
        this.lote= lote;
        this.zona = zona;
        this.repartidor = repartidor;
    }
}