import { Producto } from "./producto";

export class LineaDeProducto {

    cantidad!:number;
    subtotal!:number;
    producto!:Producto;

    constructor (
        producto: Producto,
        cantidad: number,
        subtotal: number,
    ) {
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.producto = producto;
    }
  }
  