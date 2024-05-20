import { LineaDePedido } from "./lineaDeProducto";

export class Producto {
    constructor (
        public codigo: number,
        public descripcion: string,
        public precio: number,
        public stock: number,
    ) {

    }
}