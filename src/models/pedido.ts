import { LargeNumberLike } from "crypto";
import { Cliente } from "./cliente";
import { Entrega } from "./entrega";
import { Pago } from "./pago";
import { LineaDeProducto } from "./lineaDeProducto";

export class Pedido {
    nroPedido!:number;
    fecha!:Date;
    total!:number;
    cliente!:Cliente;
    entrega!:Entrega;
    pago!:Pago;
    lineaProducto!:LineaDeProducto;

    constructor (
        fecha: Date,
        total: number,
        cliente:Cliente,
        entrega:Entrega,
        pago:Pago,
        lineaProducto:LineaDeProducto
    ) {
        this.fecha=fecha;
        this.total=total;
        this.cliente=cliente;
        this.entrega=entrega;
        this.pago=pago;
        this.lineaProducto = lineaProducto;
    }
}