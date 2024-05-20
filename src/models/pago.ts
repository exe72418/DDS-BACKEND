import { TipoPago } from "./tipoPago";

export class Pago {

    idPago!: number;
    fecha!: Date;
    tipoPago!:TipoPago;

    constructor(
        fecha:Date,
        tipoPago:TipoPago
    ) {
        this.fecha=fecha;
        this.tipoPago=tipoPago;
    }
}